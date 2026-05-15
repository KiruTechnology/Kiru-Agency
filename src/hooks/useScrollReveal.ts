import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to all elements matching `selector`
 * inside the given root (defaults to document). When they enter the
 * viewport they get the "visible" class, which triggers CSS animations
 * defined in index.css.
 *
 * @param selector  CSS selector for elements to observe
 * @param options   IntersectionObserver options override
 */
export function useScrollReveal(
  selector: string = ".reveal, .reveal-tl, .reveal-stagger, .scale-on-scroll, .glow-on-scroll, .letter-spacing-animate, .slide-in-left, .slide-in-right, .blur-in",
  options: IntersectionObserverInit = { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observerRef.current?.unobserve(e.target);
        }
      });
    }, options);

    const els = document.querySelectorAll(selector);
    els.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [selector]);
}
