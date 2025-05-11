import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import worldImg from "../assets/world.png";

export const WorldScrollEffect = ({
  aNewEraRef,
  betterWorldRef,
  weTransformRef,
  newsRef,
  digitalLoveRef,
  onlyWorldRef,
}) => {
  const { scrollY } = useScroll();
  const [positions, setPositions] = useState({
    aNewEraTop: 0,
    betterWorldTop: 0,
    weTransformTop: 0,
    newsTop: 0,
    digitalLoveTop: 0,
    onlyWorldTop: 0,
  });

  useEffect(() => {
    const updatePositions = () => {
      setPositions({
        aNewEraTop: aNewEraRef?.current?.offsetTop || 0,
        betterWorldTop: betterWorldRef?.current?.offsetTop || 0,
        weTransformTop: weTransformRef?.current?.offsetTop || 0,
        newsTop: newsRef?.current?.offsetTop || 0,
        digitalLoveTop: digitalLoveRef?.current?.offsetTop || 0,
        onlyWorldTop: onlyWorldRef?.current?.offsetTop || 0,
      });
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, [aNewEraRef, betterWorldRef, weTransformRef, newsRef, digitalLoveRef, onlyWorldRef]);

  const {
    aNewEraTop,
    betterWorldTop,
    weTransformTop,
    newsTop,
    digitalLoveTop,
    onlyWorldTop,
  } = positions;

  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 1440;

  const size = useTransform(
    scrollY,
    [
      aNewEraTop,
      betterWorldTop,
      weTransformTop,
      newsTop,
      digitalLoveTop,
      onlyWorldTop,
    ],
    ["100vw", "50vw", "28vw", "28vw", "95vw", "80vw"]
  );

  const top = useTransform(
    scrollY,
    [
      aNewEraTop,
      betterWorldTop,
      weTransformTop,
      weTransformTop + screenHeight / 2,
      newsTop,
      digitalLoveTop,
      onlyWorldTop,
    ],
    ["0vh", "30vh", "20vh", "60vh", "80vh", "-150vh","50vh",] 
  );

  const left = useTransform(
    scrollY,
    [
      aNewEraTop,
      betterWorldTop,
      weTransformTop,
      newsTop - screenHeight / 3,
      newsTop,
      digitalLoveTop,
      onlyWorldTop,
    ],
    ["0vw", "45vw", "90vw", "70vw", "-35vw", "14vw", "10vw"]
  );

  const rotation = useTransform(
    scrollY,
    [
      aNewEraTop,
      betterWorldTop,
      weTransformTop,
      newsTop,
      digitalLoveTop,
      onlyWorldTop,
    ],
    ["0deg", "-45deg", "20deg", "30deg", "-160deg", "-3.9075deg"]
  );

  const borderRadius = useTransform(
    scrollY,
    [aNewEraTop, betterWorldTop],
    ["0%", "100%"]
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
        borderRadius,
        transform: "translate(-50%, 0)",
      }}
    />
  );
};
