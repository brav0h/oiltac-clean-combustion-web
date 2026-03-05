import { useState, useEffect } from "react";

export type ScrollDirection = "up" | "down";

export function useScrollDirection(): { scrollDirection: ScrollDirection; atTop: boolean } {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      // Threshold prevents jitter on small movements
      if (Math.abs(scrollY - lastScrollY) < 5) return;
      setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      setLastScrollY(scrollY > 0 ? scrollY : 0);
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [lastScrollY]);

  return { scrollDirection, atTop: lastScrollY < 10 };
}
