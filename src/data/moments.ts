import type { Moment } from '../types/blog'

const rawMoments: Moment[] = [
  {
    id: 'm1',
    time: '08:42 AM · Oct 24, 2023',
    text: 'Started the day by reviewing a Go service slowdown and tracing the hot path through the handler stack.',
    tags: ['#Go', '#Debugging'],
    tone: 'dawn',
  },
  {
    id: 'm2',
    time: '01:15 PM · Oct 24, 2023',
    text: 'Spent the afternoon tuning a Redis cache path and checking whether the TTL policy still matched real traffic.',
    tags: ['#Redis', '#Caching'],
    tone: 'noon',
  },
  {
    id: 'm3',
    time: '06:50 PM · Oct 24, 2023',
    text: 'Spent time comparing MySQL query plans and thinking about which index would actually survive future growth.',
    tags: ['#MySQL', '#QueryPlan'],
    tone: 'dusk',
  },
  {
    id: 'm4',
    time: '11:30 PM · Oct 24, 2023',
    text: 'Wrapped up the day by writing Docker notes and testing how the backend stack behaves in a clean local environment.',
    tags: ['#Docker', '#DevEnv'],
    tone: 'night',
  },
]

const toTimestamp = (timeLabel: string) => {
  const [clockPart, datePart] = timeLabel.split('·').map((part) => part.trim())
  return new Date(`${datePart} ${clockPart}`).getTime()
}

export const moments: Moment[] = [...rawMoments].sort(
  (left, right) => toTimestamp(right.time) - toTimestamp(left.time),
)