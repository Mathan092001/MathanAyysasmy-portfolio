import React, { useEffect, useRef } from "react";

export default function SmoothScrollContainer({ children }) {
  const containerRef = useRef(null);
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const container = containerRef.current;

    const onWheel = (e) => {
      e.preventDefault(); // Stop instant jump
      targetScroll.current += e.deltaY * 1.2; // Slow-motion factor
      targetScroll.current = Math.max(
        0,
        Math.min(container.scrollHeight - container.clientHeight, targetScroll.current)
      );

      if (!isAnimating.current) animateScroll();
    };

    const animateScroll = () => {
      isAnimating.current = true;
      currentScroll.current += (targetScroll.current - currentScroll.current) * 0.1; // Smooth easing
      container.scrollTop = currentScroll.current;

      if (Math.abs(targetScroll.current - currentScroll.current) > 0.8) {
        requestAnimationFrame(animateScroll);
      } else {
        isAnimating.current = false;
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        overflow: "auto",
        scrollBehavior: "auto", // We control scrolling ourselves
      }}
    >
      {children}
    </div>
  );
}
