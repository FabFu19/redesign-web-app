import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useViewportScroll, useTransform } from "framer-motion";
import worldImg from "../assets/world.png"; 

export const WorldScrollEffect = ({ betterWorldRef, weTransformRef }) => {
  const { scrollY } = useViewportScroll();
  const [sections, setSections] = useState({
    betterWorldTop: 0,
    weTransformTop: 0,
  });

  useEffect(() => {
    const updatePositions = () => {
      if (betterWorldRef.current && weTransformRef.current) {
        setSections({
          betterWorldTop: betterWorldRef.current.offsetTop,
          weTransformTop: weTransformRef.current.offsetTop,
        });
      }
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, [betterWorldRef, weTransformRef]);

  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 1080;

  const startScroll = 0;
  const betterWorldStart = sections.betterWorldTop - screenHeight / 1.5;
  const weTransformStart = sections.weTransformTop - screenHeight / 1.5;
  const endScroll = sections.weTransformTop + screenHeight / 1.2;

  const size = useTransform(
    scrollY,
    [startScroll, betterWorldStart, weTransformStart, endScroll],
    ["100vw", "60.7757vw", "22vw", "22vw"]
  );


  const top = useTransform(
    scrollY,
    [startScroll, betterWorldStart, weTransformStart, endScroll],
    ["0vh", "calc(50vh - 1.3829vw)", "calc(50vh - 0)", "calc(50vh - 12vw)"]
  );

 
  const left = useTransform(
    scrollY,
    [startScroll, betterWorldStart, weTransformStart, endScroll],
    ["0vw", "32.1075vw", "91.8vw", "78vw"]
  );


  const rotation = useTransform(
    scrollY,
    [startScroll, betterWorldStart, weTransformStart, endScroll],
    ["0deg", "-60deg", "30deg", "30deg"]
  );

  const borderRadius = useTransform(
    scrollY,
    [startScroll, betterWorldStart],
    ["0%", "50%"]
  );

  return (
    <motion.img
      src={worldImg}
      alt="World"
      style={{
        position: "fixed",
        zIndex: 1,
        pointerEvents: "none",
        width: size,
        height: size,
        top,
        left,
        rotate: rotation,
        // opacity,
        borderRadius,
      }}
    />
  );
};