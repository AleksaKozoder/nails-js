import { getPayload } from 'payload'
import config from '@/payload.config'
import { BlockRenderer } from '@/blocks/BlockRenderer'
import { notFound } from 'next/navigation'

// Tipovi podataka za bezbednu proveru unutar funkcije
type BlockItem = {
  blockType: string
  populateBy?: 'latest' | 'manual'
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
            sort: '-createdAt',
          })

          postsData = postsQuery.docs
        } else if (block.populateBy === 'manual' && block.selectedPosts) {
          postsData = block.selectedPosts
            .map((post) => (typeof post === 'object' ? post : null))
            .filter(Boolean)
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

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const query = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
  })

  const page = query.docs[0]

  if (!page) {
    return notFound()
  }

  // Pokrećemo dubinsku pretragu kroz sve ugnježdene BlockHoldere i njihove atome
  const enrichedLayout = await enrichBlocks((page.layout || []) as BlockItem[], payload)

  return <BlockRenderer blocks={enrichedLayout} />
}
