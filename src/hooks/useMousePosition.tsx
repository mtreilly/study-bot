import React, { useState } from "react";

type MousePositionObject = {
  x?: number;
  y?: number;
};

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePositionObject>({
    x: undefined,
    y: undefined,
  });

  React.useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};

export default useMousePosition;
