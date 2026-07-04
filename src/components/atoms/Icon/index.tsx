import React from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  ChevronRight,
  ChevronLeft,
  Check,
  X,
  Plus,
  Minus,
  Search,
  Mail,
  Phone,
  MapPin,
  Clock3,
  Calendar,
  User,
  Users,
  Star,
  Heart,
  Share2,
  Download,
  Upload,
  Link as LinkIcon,
  House,
  Settings,
  Info,
  TriangleAlert,
  CircleCheck,
  ShoppingCart,
  ShoppingBag,
  Tag,
  Menu,
  List,
  Grid3X3,
  MessageCircle,
} from 'lucide-react'
import { SiFacebook, SiInstagram, SiYoutube, SiX, SiWhatsapp } from '@icons-pack/react-simple-icons'

// LinkedIn custom SVG (uklonjen iz simple-icons)
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
  </svg>
)

export const iconMap = {
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  check: Check,
  x: X,
  plus: Plus,
  minus: Minus,
  search: Search,
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
  clock3: Clock3,
  calendar: Calendar,
  user: User,
  users: Users,
  star: Star,
  heart: Heart,
  share2: Share2,
  download: Download,
  upload: Upload,
  link: LinkIcon,
  house: House,
  settings: Settings,
  info: Info,
  triangleAlert: TriangleAlert,
  circleCheck: CircleCheck,
  shoppingCart: ShoppingCart,
  shoppingBag: ShoppingBag,
  tag: Tag,
  menu: Menu,
  list: List,
  grid3X3: Grid3X3,
  messageCircle: MessageCircle,
  facebook: SiFacebook,
  instagram: SiInstagram,
  linkedin: LinkedinIcon,
  youtube: SiYoutube,
  xTwitter: SiX,
  whatsapp: SiWhatsapp,
} as const

export type IconName = keyof typeof iconMap

type MediaObject = {
  url?: string | null
  alt?: string | null
  width?: number | null
  height?: number | null
}

export type IconProps = {
  hasIcon?: boolean
  iconType?: 'picker' | 'customSvg'
  icon?: string | null
  customSvg?: MediaObject | string | null
  size?: number
  className?: string
}

export const Icon: React.FC<IconProps> = ({
  hasIcon = false,
  iconType = 'picker',
  icon,
  customSvg,
  size = 16,
  className = '',
}) => {
  if (!hasIcon) return null

  // Custom SVG iz media kolekcije
  if (iconType === 'customSvg' && customSvg) {
    const media = typeof customSvg === 'object' ? customSvg : null
    const url = media?.url ?? (typeof customSvg === 'string' ? customSvg : null)

    if (!url) return null

    return (
      <Image
        src={url}
        alt={media?.alt ?? ''}
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
        style={{ width: size, height: size }}
      />
    )
  }

  // Picker ikonica
  if (iconType === 'picker' && icon) {
    const IconComponent = iconMap[icon as IconName]
    if (!IconComponent) return null

    return <IconComponent size={size} strokeWidth={2} className={className} aria-hidden="true" />
  }

  return null
}

export default Icon
