import { useEffect } from "react";

// Types
import { BackdropProps as Props } from "./Backdrop.types";

const Backdrop: React.FC<Props> = (props) => {
  const { opened, onClick, blockScroll } = props;

  useEffect(() => {
    const body = document.querySelector("body");

    if (!body) {
      return;
    }

    const restore = () => {
      // When the backdrop is hidden...
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      body.style.paddingRight = "0";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };

    if (!opened || !blockScroll) return;

    // When the backdrop is shown, we want a fixed body
    const scrollY = window.scrollY;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.bottom = "0px";
    body.style.right = "0px";
    body.style.left = "0px";
    body.style.paddingRight = "0.8rem";

    return restore;
  }, [opened, blockScroll]);

  if (!opened) return null;

  return <div className="Backdrop" onClick={onClick} />;
};

Backdrop.defaultProps = {};

export default Backdrop;
