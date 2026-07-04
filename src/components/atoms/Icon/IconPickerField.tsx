'use client'

import React, { useMemo, useState } from 'react'
import { useField, FieldLabel } from '@payloadcms/ui'
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

const ICON_SET = [
  { label: 'Arrow Right', value: 'arrowRight', icon: ArrowRight },
  { label: 'Arrow Left', value: 'arrowLeft', icon: ArrowLeft },
  { label: 'Arrow Up', value: 'arrowUp', icon: ArrowUp },
  { label: 'Arrow Down', value: 'arrowDown', icon: ArrowDown },
  { label: 'Chevron Right', value: 'chevronRight', icon: ChevronRight },
  { label: 'Chevron Left', value: 'chevronLeft', icon: ChevronLeft },
  { label: 'Check', value: 'check', icon: Check },
  { label: 'X', value: 'x', icon: X },
  { label: 'Plus', value: 'plus', icon: Plus },
  { label: 'Minus', value: 'minus', icon: Minus },
  { label: 'Search', value: 'search', icon: Search },
  { label: 'Mail', value: 'mail', icon: Mail },
  { label: 'Phone', value: 'phone', icon: Phone },
  { label: 'Map Pin', value: 'mapPin', icon: MapPin },
  { label: 'Clock', value: 'clock3', icon: Clock3 },
  { label: 'Calendar', value: 'calendar', icon: Calendar },
  { label: 'User', value: 'user', icon: User },
  { label: 'Users', value: 'users', icon: Users },
  { label: 'Star', value: 'star', icon: Star },
  { label: 'Heart', value: 'heart', icon: Heart },
  { label: 'Share', value: 'share2', icon: Share2 },
  { label: 'Download', value: 'download', icon: Download },
  { label: 'Upload', value: 'upload', icon: Upload },
  { label: 'Link', value: 'link', icon: LinkIcon },
  { label: 'House', value: 'house', icon: House },
  { label: 'Settings', value: 'settings', icon: Settings },
  { label: 'Info', value: 'info', icon: Info },
  { label: 'Alert', value: 'triangleAlert', icon: TriangleAlert },
  { label: 'Circle Check', value: 'circleCheck', icon: CircleCheck },
  { label: 'Shopping Cart', value: 'shoppingCart', icon: ShoppingCart },
  { label: 'Shopping Bag', value: 'shoppingBag', icon: ShoppingBag },
  { label: 'Tag', value: 'tag', icon: Tag },
  { label: 'Menu', value: 'menu', icon: Menu },
  { label: 'List', value: 'list', icon: List },
  { label: 'Grid', value: 'grid3X3', icon: Grid3X3 },
  { label: 'Message Circle', value: 'messageCircle', icon: MessageCircle },
  { label: 'Facebook', value: 'facebook', icon: SiFacebook },
  { label: 'Instagram', value: 'instagram', icon: SiInstagram },
  { label: 'LinkedIn', value: 'linkedin', icon: LinkedinIcon },
  { label: 'YouTube', value: 'youtube', icon: SiYoutube },
  { label: 'X / Twitter', value: 'xTwitter', icon: SiX },
  { label: 'WhatsApp', value: 'whatsapp', icon: SiWhatsapp },
]

type Props = {
  path: string
  label?: string
  required?: boolean
}

export const IconPickerField: React.FC<Props> = ({ path, label = 'Icon', required }) => {
  const { value, setValue } = useField<string>({ path })
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search) return ICON_SET
    const query = search.toLowerCase()
    return ICON_SET.filter(
      ({ label, value }) =>
        label.toLowerCase().includes(query) || value.toLowerCase().includes(query),
    )
  }, [search])

  const selectedIcon = ICON_SET.find((item) => item.value === value)

  const handleSelect = (nextValue: string) => {
    setValue(value === nextValue ? '' : nextValue)
  }

  return (
    <div className="icp-wrap">
      <FieldLabel label={label} required={required} />

      {selectedIcon ? (
        <div className="icp-preview">
          <selectedIcon.icon width={16} height={16} size={16} />
          <span className="icp-preview__name">{selectedIcon.label}</span>
          <button
            type="button"
            className="icp-preview__clear"
            onClick={() => setValue('')}
            aria-label="Remove icon"
          >
            <X size={12} strokeWidth={2} />
          </button>
        </div>
      ) : (
        <p className="icp-none">No icon selected</p>
      )}

      <input
        type="text"
        placeholder="Search icons..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="icp-search"
        aria-label="Search icons"
      />

      <div className="icp-grid" role="listbox" aria-label="Icon picker">
        {filtered.map(({ label, value: itemValue, icon: Icon }) => {
          const isSelected = value === itemValue
          return (
            <button
              key={itemValue}
              type="button"
              role="option"
              aria-selected={isSelected}
              aria-label={label}
              title={label}
              className={`icp-item${isSelected ? ' icp-item--selected' : ''}`}
              onClick={() => handleSelect(itemValue)}
            >
              <Icon width={16} height={16} size={16} strokeWidth={2} />
            </button>
          )
        })}
        {filtered.length === 0 && <p className="icp-empty">No icons found for “{search}”</p>}
      </div>

      <style>{`
        .icp-wrap { display:flex; flex-direction:column; gap:.8rem; margin-bottom:.8rem; }
        .icp-preview { display:inline-flex; align-items:center; gap:.8rem; padding:.6rem 1.2ewm; background:var(--theme-elevation-100,#f0f0f0); border-radius:4px; width:fit-content; }
        .icp-preview__name { font-size:1.2rem; color:var(--theme-text,#333); }
        .icp-preview__clear { display:inline-flex; align-items:center; justify-content:center; background:none; border:none; cursor:pointer; padding:.2rem; color:var(--theme-text,#666); border-radius:.3rem; }
        .icp-preview__clear:hover { background:var(--theme-elevation-200,#e0e0e0); }
        .icp-none { font-size:1.2rem; color:var(--theme-text-secondary,#888); font-style:italic; margin:0; }
        .icp-search { width:100%; max-width:28rem; padding:.6rem 1rem; border:1px solid var(--theme-elevation-300,#ccc); border-radius:4px; font-size:13px; background:var(--theme-input-bg,#fff); color:var(--theme-text,#333); }
        .icp-grid { display:flex; flex-wrap:wrap; gap:.4rem; max-width:48rem; }
        .icp-item { display:flex; align-items:center; justify-content:center; width:3.6rem; height:3.6rem; border-radius:4px; border:1px solid var(--theme-elevation-200,#ddd); background:var(--theme-elevation-50,#fafafa); cursor:pointer; color:var(--theme-text,#333); transition:background 120ms ease,border-color 120ms ease; }
        .icp-item:hover { background:var(--theme-elevation-150,#ebebeb); border-color:var(--theme-elevation-400,#bbb); }
        .icp-item--selected { background:#d4edda; border-color:#28a745; color:#155724; }
        .icp-empty { font-size:1.3rem; color:var(--theme-text-secondary,#888); padding:.4rem 0; margin:0; }
      `}</style>
    </div>
  )
}
