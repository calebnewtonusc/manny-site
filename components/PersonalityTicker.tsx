/* PersonalityTicker — static component, no client hooks needed */

const row1Items = [
  'Football',
  'Track & Field',
  'Poetry',
  'Thrifting',
  'Cinema',
  'USC Trojans',
  'Defensive End',
  'Sprinter',
  'Student Government',
  'Los Angeles',
]

const row2Items = [
  'Movement',
  'Open Air',
  'Written Words',
  'Films',
  'Unposted Moments',
  'Dual Athlete',
  'Taper Hall',
  'Campus Life',
  'Found Objects',
  'Before the Feed',
]

function TickerRow({
  items,
  direction,
}: {
  items: string[]
  direction: 'left' | 'right'
}) {
  const doubled = [...items, ...items]
  const animClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  return (
    /* ticker-row applies mask-image fade from globals.css */
    <div className="ticker-row group">
      <div
        className={`flex ${animClass} group-hover:[animation-play-state:paused] will-change-transform`}
      >
        {doubled.map((item, idx) => (
          <span
            key={`${item}-${idx % items.length}-${idx < items.length ? 'a' : 'b'}`}
            className="whitespace-nowrap px-5 text-[11px] tracking-[0.28em] uppercase"
            style={{ color: 'rgba(255,255,255,0.26)' }}
          >
            {item}
            <span
              className="mx-5"
              style={{ color: 'rgba(201,164,106,0.3)' }}
              aria-hidden="true"
            >
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function PersonalityTicker() {
  return (
    <div
      className="py-10 border-y border-white/[0.05] overflow-hidden space-y-3"
      aria-label="Interests and identity"
      role="marquee"
    >
      <TickerRow items={row1Items} direction="left" />
      <TickerRow items={row2Items} direction="right" />
    </div>
  )
}
