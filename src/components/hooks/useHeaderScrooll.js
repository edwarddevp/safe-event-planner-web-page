import React, { useEffect, useRef, useState } from "react";

export const useHeaderScroll = (containerRef) => {
  const [headerBg, setHeaderBg] = useState("transparent");
  const headerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const listenScrollEvent = (e) => {
        if (containerRef.current.scrollTop > 100) {
          setHeaderBg("rgb(0,0,0,0.8)");
        } else {
          setHeaderBg("transparent");
        }
      };

      containerRef.current.addEventListener("scroll", listenScrollEvent);

      return () => {
        containerRef.current.removeEventListener("scroll", listenScrollEvent);
      };
    }
  }, [headerRef, containerRef]);

  return [headerBg, headerRef];
};
