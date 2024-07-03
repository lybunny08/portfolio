import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import SplitText from 'split-text';

function Name() {
  useEffect(() => {
    // Initialize SplitText
    const split = new SplitText('.char', { type: 'chars' });

    // GSAP Animation
    gsap.from(split.chars, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.05,
      ease: 'power4.out'
    });
  }, []);

  return (
    <div style={{ textAlign: 'center' }} className="items-center text-[140px] mb-4">
      <h1 style={{ "--word-total": 2, "--char-total": 14, perspective: '300px' }}>
        <span className="font-sec">
          <span className="word" data-word="Mamitiana" style={{ "--word-index": 0 }}>
            <span className="char" data-char="M" style={{ "--char-index": 0 }}>M</span>
            <span className="char" data-char="a" style={{ "--char-index": 1 }}>a</span>
            <span className="char" data-char="m" style={{ "--char-index": 2 }}>m</span>
            <span className="char" data-char="i" style={{ "--char-index": 3 }}>i</span>
            <span className="char" data-char="t" style={{ "--char-index": 4 }}>t</span>
            <span className="char" data-char="i" style={{ "--char-index": 5 }}>i</span>
            <span className="char" data-char="a" style={{ "--char-index": 6 }}>a</span>
            <span className="char" data-char="n" style={{ "--char-index": 7 }}>n</span>
            <span className="char" data-char="a" style={{ "--char-index": 8 }}>a</span>
          </span>
        </span>
        <span className="pl-4">
          <span className="word" data-word="Lydien" style={{ "--word-index": 1 }}>
            <span className="char" data-char="L" style={{ "--char-index": 9 }}>L</span>
            <span className="char" data-char="y" style={{ "--char-index": 10 }}>y</span>
            <span className="char" data-char="d" style={{ "--char-index": 11 }}>d</span>
            <span className="char" data-char="i" style={{ "--char-index": 12 }}>i</span>
            <span className="char" data-char="e" style={{ "--char-index": 13 }}>e</span>
            <span className="char" data-char="n" style={{ "--char-index": 14 }}>n</span>
          </span>
        </span>
      </h1>
    </div>
  );
}

export default Name;
