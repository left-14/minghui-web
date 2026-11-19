'use client';

import { useEffect, useRef } from 'react';
import '../major-quiz/major-quiz.css';
import './gsat-check.css';

export default function GsatCheck() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;
    import('./checkEngine').then(({ mountCheck }) => {
      if (!cancelled && ref.current) cleanup = mountCheck(ref.current);
    });
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div className="mq">
      <div className="wrap">
        <section ref={ref} aria-live="polite">
          <p className="note" style={{ padding: '48px 16px', textAlign: 'center' }}>落點快查載入中⋯</p>
        </section>
      </div>
    </div>
  );
}
