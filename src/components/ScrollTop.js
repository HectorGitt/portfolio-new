import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * New page: start at the top. A link with a hash (/engineering#solidify)
 * lands on that element instead, once the page has rendered it.
 */
const ScrollTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const frame = requestAnimationFrame(() => {
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ block: "start" });
        else window.scroll({ top: 0, left: 0 });
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scroll({ top: 0, left: 0 });
  }, [pathname, hash]);
  return null;
};
export default ScrollTop;
