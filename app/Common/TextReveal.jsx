"use client"
import { useRef, useEffect, Children, cloneElement } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

function TextReveal({ children, animationOnScroll = true, delay = 0 }) {
  const containerRef = useRef(null);
  const elementRef = useRef([]);
  const splitTextRef = useRef([]);
  const lines = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    splitTextRef.current = [];
    elementRef.current = [];
    lines.current = [];

    let elements = [];
    if (containerRef.current.hasAttribute('data-copy-wrapper')) {
      elements = Array.from(containerRef.current.children);
    } else {
      elements = [containerRef.current];
    }

    elements.forEach((el) => {
      elementRef.current.push(el);

      const split = new SplitText(el, {
        type: 'lines',
        mask: 'lines',
        linesClass: 'line++',
      });

      splitTextRef.current.push(split);

      const computedStyle = window.getComputedStyle(el);
      const textIndent = computedStyle.textIndent;

      if (textIndent && textIndent !== '0px') {
        if (split.lines.length > 0) {
          split.lines[0].style.paddingLeft = textIndent;
        }
        el.style.textIndent = '0';
      }

      lines.current.push(...split.lines);
    });

    // gsap.set(lines.current, { y: '100%' });
    gsap.set(lines.current, { y: '100%' });

    const animationProps = {
      y: '0%',
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out',
      delay: delay,
    };

    if (animationOnScroll) {
      gsap.to(lines.current, {
        ...animationProps,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true,
        },
      });
    } else {
      gsap.to(lines.current, animationProps);
    }

    return () => {
      splitTextRef.current.forEach((split) => {
        if (split && split.revert) {
          split.revert();
        }
      });
    };
  }, [animationOnScroll, delay]);

  if (Children.count(children) === 1) {
    return cloneElement(children, {
      ref: containerRef,
    });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}

export default TextReveal;
