import React, { useEffect, useRef, useState } from "react";

export const useHeaderScroll = (containerRef) => {
  const [headerBg, setHeaderBg] = useState("transparent");
  const headerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const listenScrollEvent = (e) => {
        if (container.scrollTop > 100) {
          setHeaderBg("rgb(0,0,0,0.8)");
        } else {
          setHeaderBg("transparent");
        }
      };

      container.addEventListener("scroll", listenScrollEvent);

      return () => {
        container.removeEventListener("scroll", listenScrollEvent);
      };
    }
  }, [headerRef, containerRef]);

  return [headerBg, headerRef];
};
