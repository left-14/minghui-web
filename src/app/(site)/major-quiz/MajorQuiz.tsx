'use client';

import { useEffect, useRef } from 'react';
import './major-quiz.css';

export default function MajorQuiz() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let cancelled = false;
    import('./quizEngine').then(({ mountQuiz }) => {
      if (!cancelled && ref.current) cleanup = mountQuiz(ref.current);
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
          <p className="note">測驗載入中⋯</p>
        </section>
      </div>
    </div>
  );
}
