import type { Moment, NavItem } from '../types/blog'

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
    status: 'Available for projects',
    name: 'Quito',
    bio: 'Architect of digital experiences and curator of thoughtful narratives. Exploring the intersection of psychology, minimalist design, and quiet technology.',
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

export const moments: Moment[] = [
  {
    id: 'm1',
    time: '08:42 AM · Oct 24, 2023',
    text: 'The first light through the kitchen window always feels like a secret between the sun and morning brew.',
    tags: ['#QuietMorning', '#Solitude'],
    tone: 'dawn',
  },
  {
    id: 'm2',
    time: '01:15 PM · Oct 24, 2023',
    text: 'From high above, the city grid becomes calm. Clarity appears when motion becomes pattern.',
    tags: ['#MiddayFocus'],
    tone: 'noon',
  },
  {
    id: 'm3',
    time: '06:50 PM · Oct 24, 2023',
    text: 'The sky tonight is a gradient of ember and indigo, an apology for the noise of the day.',
    tags: ['#Sunset', '#Reset'],
    tone: 'dusk',
  },
  {
    id: 'm4',
    time: '11:30 PM · Oct 24, 2023',
    text: 'Shutting down the digital hum. Tomorrow is a fresh canvas.',
    tags: ['#NightLog'],
    tone: 'night',
  },
]
