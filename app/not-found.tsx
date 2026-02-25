import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-6">
      <div className="text-center">
        <p
          className="text-[10px] tracking-[0.4em] uppercase mb-6"
          style={{ color: 'rgba(201,164,106,0.55)' }}
        >
          404
        </p>
        <h1 className="font-display font-bold text-white/80 text-4xl md:text-6xl tracking-tight mb-4">
          Wrong turn.
        </h1>
        <p className="text-white/30 text-sm mb-10">This page doesn&apos;t exist.</p>
        <Link
          href="/"
          className="text-[11px] tracking-[0.3em] uppercase text-white/40 hover:text-[#C9A46A] transition-colors duration-300"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}
