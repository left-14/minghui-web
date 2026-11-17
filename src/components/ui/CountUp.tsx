'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

// 伺服器端沒有 useLayoutEffect，改用 useEffect 避免警告
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * 數字進入視窗時從 0 跳到目標值，只觸發一次。
 * value 照原本的寫法傳字串（例如 '10,000'），有千分位逗號就保留逗號。
 * 伺服器輸出的是最終數字，沒有 JavaScript 或開啟「減少動態效果」時直接顯示最終數字。
 * 用隱形的最終數字撐住寬度，跳動時後面的單位不會左右移動。
 */
export function CountUp({ value, duration = 1.6 }: { value: string; duration?: number }) {
  const target = Number(value.replace(/,/g, ''));
  const useComma = value.includes(',');
  const format = (n: number) => (useComma ? Math.round(n).toLocaleString('en-US') : String(Math.round(n)));

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const shouldReduce = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const ready = useRef(false);

  // 畫面更新前先歸零，避免先閃一下最終數字
  useIsoLayoutEffect(() => {
    if (shouldReduce || !Number.isFinite(target)) {
      setDisplay(value);
      ready.current = false;
      return;
    }
    setDisplay(format(0));
    ready.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldReduce]);

  useEffect(() => {
    if (!inView || !ready.current) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (n) => setDisplay(format(n)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="relative inline-block tabular-nums">
      <span className="invisible" aria-hidden="true">{value}</span>
      <span className="absolute inset-0" aria-hidden="true">{display}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
