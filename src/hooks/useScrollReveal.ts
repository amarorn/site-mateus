import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal<T extends HTMLElement>(
  options: {
    y?: number;
    x?: number;
    opacity?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    ease?: string;
    start?: string;
    childSelector?: string;
  } = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 24,
      x = 0,
      opacity = 0,
      duration = 0.6,
      delay = 0,
      stagger = 0,
      ease = 'power2.out',
      start = 'top 85%',
      childSelector,
    } = options;

    const targets = childSelector ? el.querySelectorAll(childSelector) : el;

    const fromVars: gsap.TweenVars = {
      y: childSelector ? y : y,
      x: childSelector ? x : x,
      opacity,
    };

    const toVars: gsap.TweenVars = {
      y: 0,
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      stagger: childSelector ? stagger || 0.08 : 0,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
      },
    };

    gsap.fromTo(targets, fromVars, toVars);

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return ref;
}
