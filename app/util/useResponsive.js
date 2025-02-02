import { useEffect, useState } from "react";

const useResponsive = () => {
  const [screenType, setScreenType] = useState({
    desktop: true,
    tablet: false,
    mobile: false,
  });

  const handleResize = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 768) {
        setScreenType({ desktop: false, tablet: false, mobile: true });
      } else if (window.innerWidth <= 1024) {
        setScreenType({ desktop: false, tablet: true, mobile: false });
      } else {
        setScreenType({ desktop: true, tablet: false, mobile: false });
      }
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenType;
};

export default useResponsive;
