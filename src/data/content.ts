import type { NavItem } from '../types/blog'

export const navItems: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/articles', label: 'Articles' },
  { path: '/moments', label: 'Moments' },
  { path: '/about', label: 'About' },
]

export const siteContent = {
  brandName: 'Destiny',
  searchPlaceholder: 'Search...',
  subscribeButtonText: 'Subscribe',
  hero: {
    initials: "src/assets/avatar.png",
    status: 'Dazed',
    name: 'Quito',
    bio: 'To be both a speaker of words and a doer of deeds.',
    location: '📍 GuangDong, CN',
    writingSince: '✦ Writing since 2021',
  },
  newsletter: {
    title: 'Weekly Serenades',
    description: 'Join a weekly curation of design, technology and philosophy.',
    emailPlaceholder: 'email@example.com',
    buttonText: 'Join the Circle',
  },
  topics: [
    'Interface Design',
    'Digital Wellness',
    'Psychology',
    'SaaS Growth',
    'Writing',
    'Photography',
  ],
  connectLinks: [
    { label: 'Follow on X', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'WeChat', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
  about: {
    eyebrow: 'The Curator',
    title: 'Crafting digital experiences with intent and clarity.',
    description:
      'I am a designer and writer exploring technology, minimalism, and human psychology. Serenity is my digital sanctuary.',
    portraitInitials: 'ES',
  },
  detailAuthor: {
    initials: 'EL',
    name: 'Elias Thorne',
    title: 'Lead Designer at Serenity',
  },
  footer: {
    copyright: '© 2024 Serenity Blog. Captured in the light of the endless sky.',
    links: [
      { label: 'Archives', href: '#' },
      { label: 'RSS', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
}

