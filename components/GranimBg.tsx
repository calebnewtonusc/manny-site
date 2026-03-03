'use client';

import { useEffect, useRef } from 'react';

export default function GranimBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const granimRef = useRef<unknown>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    import('granim').then(({ default: Granim }) => {
      granimRef.current = new Granim({
        element: canvasRef.current!,
        direction: 'radial',
        isPausedWhenNotInView: true,
        states: {
          'default-state': {
            gradients: [
              ['#0f172a', '#1e293b'],
              ['#1e293b', '#334155'],
              ['#0f172a', '#1e293b'],
            ],
            transitionSpeed: 5000,
          },
        },
      });
    });

    return () => {
      if (granimRef.current && typeof (granimRef.current as { destroy?: () => void }).destroy === 'function') {
        (granimRef.current as { destroy: () => void }).destroy();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.6,
      }}
      aria-hidden="true"
    />
  );
}
