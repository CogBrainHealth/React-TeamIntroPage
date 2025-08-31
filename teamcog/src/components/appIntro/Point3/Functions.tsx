"use client";
import { useEffect, useState } from "react";
import Function1 from "./Function1";
import Function2 from "./Function2";
import Function3 from "./Function3";

export default function Functions() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: isMobile ? "flex" : "block",
        flexDirection: isMobile ? "column" : undefined,
        gap: isMobile ? "20px" : undefined,
        alignItems: isMobile ? "center" : undefined,
        width: "100%",
      }}
    >
      <Function1 />
      <Function2 />
      <Function3 />
    </div>
  );
}
