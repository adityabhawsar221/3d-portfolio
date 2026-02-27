import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHover, setIsHover] = useState(false);
  const [visible, setVisible] = useState(false);

  // Use spring for smooth trailing
  const x = useSpring(pos.x, { stiffness: 500, damping: 30 });
  const y = useSpring(pos.y, { stiffness: 500, damping: 30 });

  useEffect(() => {
    // Don't render on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onOver = (e) => {
      const el = e.target;
      setIsHover(
        el.tagName === "A" ||
        el.tagName === "BUTTON" ||
        el.closest("a") !== null ||
        el.closest("button") !== null
      );
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 pointer-events-none hidden md:block"
        style={{
          x: x,
          y: y,
          width: isHover ? 44 : 32,
          height: isHover ? 44 : 32,
          borderColor: isHover ? "#646cff" : "rgba(255,255,255,0.5)",
          backgroundColor: isHover ? "rgba(100,108,255,0.1)" : "transparent",
          translateX: isHover ? "-22px" : "-16px",
          translateY: isHover ? "-22px" : "-16px",
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
          zIndex: 9999,
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full pointer-events-none hidden md:block"
        style={{
          transform: `translate(${pos.x - 3}px, ${pos.y - 3}px)`,
          backgroundColor: isHover ? "#646cff" : "#00f3ff",
          zIndex: 10000,
          transition: "background-color 0.15s",
        }}
      />
    </>
  );
};

export default CustomCursor;
