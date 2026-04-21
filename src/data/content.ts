import type { Article, Moment, NavItem } from '../types/blog'

export const navItems: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/articles', label: 'Articles' },
  { path: '/moments', label: 'Moments' },
  { path: '/about', label: 'About' },
]

export const siteContent = {
  brandName: 'destiny',
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

export const articles: Article[] = [
  {
    id: 'focus',
    category: 'Productivity',
    date: 'March 24, 2024',
    title: 'The Architecture of Focus: Designing a Distraction-Free Life',
    excerpt:
      'Understanding how spatial design and digital environment configuration amplifies deep work capacity.',
    readMinutes: 12,
    comments: 24,
    body: [
      'In an era of continuous alerts, silence is no longer an absence. It is an intentional structure we build around our time and attention.',
      'A calmer interface is not empty. It has hierarchy, rhythm, and room for thought. Once visual noise is reduced, decision quality improves quickly.',
      'When product and personal systems share the same principles, focus becomes sustainable rather than accidental.',
    ],
    quote:
      'Minimalism is not removal for style. It is arranged depth that makes priority obvious.',
    points: [
      'Use whitespace as a primary layout tool, not leftover space.',
      'Reduce simultaneous calls-to-action to lower cognitive switching.',
      'Create tonal layers so important information appears naturally.',
    ],
  },
  {
    id: 'minimalism',
    category: 'Philosophy',
    date: 'March 18, 2024',
    title: 'Liquid Minimalism: Beyond the Empty Room',
    excerpt:
      'Moving from visual emptiness to a usable philosophy of enough in digital and physical environments.',
    readMinutes: 9,
    comments: 12,
    body: [
      'Most minimalism fails because it removes personality and keeps friction. A better model removes friction first, then protects meaningful detail.',
      'When we treat interfaces as rooms with light, gravity, and memory, interaction patterns become easier to trust.',
      'Design systems should feel quiet at rest and precise in action.',
    ],
    quote: 'Clarity is not a look. It is behavior over time.',
    points: [
      'Design for recovery speed after interruption.',
      'Use consistent motion language for predictable state changes.',
      'Let containers and spacing reveal information hierarchy.',
    ],
  },
  {
    id: 'calm-tech',
    category: 'Mental Health',
    date: 'March 12, 2024',
    title: 'The Silence in the Machine: Finding Calm in Digital Chaos',
    excerpt:
      'Practical strategies for building resilient attention in high-frequency notification environments.',
    readMinutes: 8,
    comments: 31,
    body: [
      'Calm design starts with reducing urgency theater. Every red badge steals attention even when there is no real emergency.',
      'By limiting interruption channels and batching non-critical updates, teams can recover hours of quality concentration each week.',
      'Digital calm is not less ambition. It is cleaner execution.',
    ],
    quote: 'A quiet interface can still be ambitious.',
    points: [
      'Define notification severity tiers and default to silent.',
      'Delay low-priority updates to scheduled review windows.',
      'Keep error states expressive but spatially constrained.',
    ],
  },
  {
    id: 'systems',
    category: 'System Design',
    date: 'March 5, 2024',
    title: 'Layered Hierarchy in Information Architecture',
    excerpt:
      'How structural organization and semantic depth shape learning speed and long-term memory.',
    readMinutes: 10,
    comments: 18,
    body: [
      'Flat lists break down when knowledge grows. Layered information architecture creates stable paths for recall.',
      'Progressive disclosure only works when each level has a clear role and visual identity.',
      'The best systems help users know where they are and what comes next.',
    ],
    quote: 'Hierarchy is the map that keeps complexity humane.',
    points: [
      'Organize by intent, not just by object type.',
      'Use local context headers to anchor users in deep views.',
      'Pair concise labels with meaningful metadata.',
    ],
  },
]

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

export const getArticleById = (articleId: string | undefined) =>
  articles.find((article) => article.id === articleId) ?? articles[0]