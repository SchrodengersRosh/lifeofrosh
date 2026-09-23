import { segments } from '@/content/show'
import { Segment } from '@/components/show/Segment'
import { CueObserver } from '@/components/show/CueObserver'

export default function HomePage() {
  return (
    <>
      <CueObserver />
      {segments.map((seg) => (
        <Segment key={seg.id} segment={seg} isOpen={seg.id === 'open'} />
      ))}
    </>
  )
}
