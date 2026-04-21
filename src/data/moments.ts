import type { Moment } from '../types/blog'

const rawMoments: Moment[] = [
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

const toTimestamp = (timeLabel: string) => {
  const [clockPart, datePart] = timeLabel.split('·').map((part) => part.trim())
  return new Date(`${datePart} ${clockPart}`).getTime()
}

export const moments: Moment[] = [...rawMoments].sort(
  (left, right) => toTimestamp(right.time) - toTimestamp(left.time),
)