"use client"
import { useEffect, useState } from 'react';

type PreloaderProps = {
  onAnimationEnd?: () => void; // optionnel
};

function Preloader({ onAnimationEnd }: PreloaderProps) {
  const [animateOut, setAnimateOut] = useState(false);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(false);
    }, 1000);

    const exitTimer = setTimeout(() => {
      setAnimateOut(true);
    }, 1100);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div
      className={`splash-screen ${animateOut ? 'splash-exit' : ''}`}
      onTransitionEnd={() => animateOut && onAnimationEnd?.()}
    >
      {showText && (
        <>
          <p className="text-[#070707] text-[2.5rem] font-bold ">
            HAJANIAINA Mamtiana
          </p>
        </>
      )}
    </div>
  );
}

export default Preloader;
