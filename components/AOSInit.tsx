'use client';

import { useEffect } from 'react';

export default function AOSInit() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({
        duration: 700,
        once: true,
        easing: 'ease-out-cubic',
        offset: 60,
      });
    });
  }, []);

  return null;
}
