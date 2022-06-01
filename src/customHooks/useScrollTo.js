import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollTo = (reference) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (reference) {
      const element = document.querySelector(reference);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else window.scrollTo(0, 0);
  }, [pathname, reference]);

  return null;
};
