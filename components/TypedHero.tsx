'use client';

import { useEffect, useRef } from 'react';

export default function TypedHero() {
  const elRef = useRef<HTMLSpanElement>(null);
  const typedRef = useRef<import('typed.js').default | null>(null);

  useEffect(() => {
    if (!elRef.current) return;

    import('typed.js').then(({ default: Typed }) => {
      typedRef.current = new Typed(elRef.current!, {
        strings: [
          'Athlete.&nbsp; Poet.&nbsp; Trojan.',
          'Defensive End. Sprinter. Scholar.',
          'USC &bull; Los Angeles.',
          'On the field and on the page.',
        ],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 2200,
        startDelay: 1400,
        loop: true,
        smartBackspace: true,
        contentType: 'html',
      });
    });

    return () => {
      typedRef.current?.destroy();
    };
  }, []);

  return (
    <span
      ref={elRef}
      className="text-[11px] tracking-[0.35em] text-white/40 uppercase"
      aria-label="Athlete. Poet. Trojan."
    />
  );
}
