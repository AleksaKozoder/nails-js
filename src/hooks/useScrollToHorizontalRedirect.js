import {useEffect, useRef} from "react";

export default function useScrollToHorizontalRedirect({
                                                        ref,
                                                        horizontalSelector,
                                                      }) {
  const isLockedRef = useRef(false);
  const wasCenteredRef = useRef(false);

  useEffect(() => {
    if (window.innerWidth < 1025) return;

    const section = ref.current;
    if (!section) return;

    const horizontal = section.querySelector(horizontalSelector);
    if (!horizontal) return;

    const unlockAfterIdle = () => {
      if (!isLockedRef.current) return;

      // Ako smo na početku ili kraju horizontalnog scrolla, otključaj
      if (
        horizontal.scrollLeft === 0 ||
        horizontal.scrollLeft + horizontal.clientWidth >=
        horizontal.scrollWidth - 1
      ) {
        unlockScroll();
        return;
      }
    };

    const onWheel = (e) => {
      if (!isLockedRef.current) return;
      if (!horizontal) return;

      e.preventDefault();
      horizontal.scrollLeft += e.deltaY;

      unlockAfterIdle();
    };

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distance = Math.abs(elementCenter - viewportCenter);

      const isNowCentered = distance < 20;

      if (isNowCentered && !wasCenteredRef.current) {
        wasCenteredRef.current = true;
        lockScroll();
      } else if (!isNowCentered && wasCenteredRef.current) {
        wasCenteredRef.current = false;
        unlockScroll();
      }
    };

    const lockScroll = () => {
      isLockedRef.current = true;
      document.body.style.overflowY = "hidden";
      window.addEventListener("wheel", onWheel, {passive: false});
    };

    const unlockScroll = () => {
      isLockedRef.current = false;
      document.body.style.overflowY = "";
      window.removeEventListener("wheel", onWheel);
    };

    window.addEventListener("scroll", onScroll, {passive: true});

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      unlockScroll();
    };
  }, [ref, horizontalSelector]);
}

// import {useRef} from "react";

//   const ref = useRef(null);

// useScrollToHorizontalRedirect({
//     ref,
//     horizontalSelector: "#listToScroll", // list ID
//   });

// ref={ref} // on slider holder (section, container...)