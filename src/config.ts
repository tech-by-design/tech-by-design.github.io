import { getCollection, type CollectionEntry } from 'astro:content'

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'Tech by Design',
  description: 'Empowering Health Through Innovation',
  author: {
    name: 'Tech by Design',
    url: 'https://techbd.org',
    email: 'help@techbd.org',
    summary: 'Empowering Health Through Innovation'
  },
  org: {
    name: 'Tech by Design',
    url: 'https://techbd.org',
    email: 'help@techbd.org',
    summary: 'Empowering Health Through Innovation'
  },
  location: 'Albany, NY',
  latlng: [42.654960, -73.759240] as [number, number],
  repository: 'https://github.com/tech-by-design',
  buildTime: new Date()
}

export { default as Logo } from './assets/tech-by-design/logomark_Full-Color.svg'
export { default as LogoImage } from './assets/tech-by-design/logomark_Full-Color.svg'
export { default as FeaturedSVG } from './assets/tech-by-design/pri-logo_Reverse.svg'
export { default as DefaultSVG } from './assets/svg/undraw/undraw_my_feed.svg'
export { default as DefaultImage } from './assets/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '', target: '_self' },
  { name: 'About', href: 'about', target: '_self' },
  { name: 'Solutions', href: '#', target: '', children:
    [
      { name: 'Hub', href: 'hub', target: '_self' },
      { name: 'Fusion', href: 'fusion', target: '_self' }
    ]
  },
  { name: 'Get Help', href: 'get-help', target: '_self' },
  { name: 'Articles', href: 'blog', target: '_self' },
  { name: 'Docs', href: 'docs', target: '_self' },
  { name: 'Status', href: 'https://status.techbd.org', target: "blank" }
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/tech-by-design`

export const COMMUNITY_INVITE_URL = `https://github.com/tech-by-design/help-desk-non-phi`

export type Sidebar = Record<string, { text: string; link: string }[]>

export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true
  })
  return posts.sort((a, b) =>
    a.data.pubDate && b.data.pubDate ? +b.data.pubDate - +a.data.pubDate : 0
  )
}
