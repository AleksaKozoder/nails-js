import { getPayload } from 'payload'
import config from '@/payload.config'
import { BlockRenderer } from '@/blocks/BlockRenderer'
import { notFound } from 'next/navigation'

type BlockItem = {
  blockType: string
  populateBy?: 'latest' | 'manual' | 'categories'
  limit?: number
  selectedPosts?: any[]
  atoms?: BlockItem[]
  blocks?: BlockItem[]
  [key: string]: any
}

// Rekurzivna funkcija koja kopa kroz BlockHolder i puni PostsBlock podacima
async function enrichBlocks(blocksArray: BlockItem[], payload: any): Promise<BlockItem[]> {
  return Promise.all(
    blocksArray.map(async (block) => {
      if (!block) return block

      // Proveravamo da li je u pitanju postsBlock (pokrivamo i camelCase i kebab-case)
      if (block.blockType === 'postsBlock' || block.blockType === 'posts-block') {
        let postsData: any[] = []

        if (block.populateBy === 'latest') {
          const postsQuery = await payload.find({
            collection: 'posts',
            limit: block.limit || 3,
            sort: '-createdAt', // Najnoviji idu prvi
          })

          postsData = postsQuery.docs
        } else if (block.populateBy === 'manual' && block.selectedPosts) {
          postsData = block.selectedPosts
            .map((post) => (typeof post === 'object' ? post : null))
            .filter(Boolean)
        } else if (block.populateBy === 'categories' && block.selectedCategories) {
          // 1. Mapiramo kroz niz selectedCategories i izvlačimo sve ID-eve
          const categoryIds = block.selectedCategories
            .map((cat: any) => {
              if (typeof cat === 'object' && cat !== null) return cat.id
              if (typeof cat === 'string' || typeof cat === 'number') return cat
              return null
            })
            .filter(Boolean) // Čistimo null vrednosti

          // 2. Pokrećemo upit samo ako imamo barem jedan validan ID kategorije
          if (categoryIds.length > 0) {
            const postsQuery = await payload.find({
              collection: 'posts',
              limit: block.limit || 3,
              sort: '-createdAt',
              where: {
                // Koristimo 'in' operator jer admin može da izabere više kategorija u nizu
                category: {
                  in: categoryIds,
                },
              },
            })
            postsData = postsQuery.docs
          } else {
            console.warn('Nema validnih ID-eva u selectedCategories:', block.selectedCategories)
          }
        }

        // Vraćamo blok sa ubacenim "posts" nizom
        return {
          ...block,
          posts: postsData,
        }
      }

      // Ako blok ima unutrašnje atome (BlockHolder unutar atoms niza)
      if (block.atoms && Array.isArray(block.atoms)) {
        return {
          ...block,
          atoms: await enrichBlocks(block.atoms, payload),
        }
      }

      // Ako tvoj BlockHolder na nekom nivou koristi ključ 'blocks'
      if (block.blocks && Array.isArray(block.blocks)) {
        return {
          ...block,
          blocks: await enrichBlocks(block.blocks, payload),
        }
      }

      return block
    }),
  )
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const query = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const page = query.docs[0]

  if (!page) {
    return notFound()
  }
  const enrichedLayout = await enrichBlocks((page.layout || []) as BlockItem[], payload)

  return <BlockRenderer blocks={enrichedLayout} />
}
