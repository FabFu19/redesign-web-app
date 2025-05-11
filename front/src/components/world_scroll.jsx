import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import worldImg from "../assets/world3.png";

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

 
  const top = useTransform(
    scrollY,
    [
      aNewEraTop,                 
      betterWorldTop - screenHeight / 2, 
      betterWorldTop,          
      weTransformTop,             
      weTransformTop + screenHeight / 2,
      newsTop,
      digitalLoveTop,
      onlyWorldTop,
    ],
    [
      "-120vh",  
      "-20vh",  
      "30vh",     
      "20vh",
      "60vh",
      "75vh",
      "-150vh",
      "50vh",
    ]
  );

  const left = useTransform(
    scrollY,
    [
      betterWorldTop,
      weTransformTop,
      newsTop - screenHeight / 3,
      newsTop,
      digitalLoveTop,
      onlyWorldTop,
    ],
    ["45vw", "90vw", "70vw", "-30vw", "14vw", "10vw"]
  );

  const size = useTransform(
    scrollY,
    [betterWorldTop, weTransformTop, newsTop, digitalLoveTop, onlyWorldTop],
    ["50vw", "28vw", "28vw", "95vw", "80vw"]
  );

  const rotation = useTransform(
    scrollY,
    [betterWorldTop, weTransformTop, newsTop, digitalLoveTop, onlyWorldTop],
    ["-45deg", "20deg", "30deg", "-160deg", "-3.9075deg"]
  );

  return (
    <motion.img
      src={worldImg}
      alt="Planet"
      style={{
        position: "fixed",
        zIndex: 1,
        pointerEvents: "none",
        width: size,
        height: size,
        top,
        left,
        rotate: rotation,
        borderRadius: "50%",
        objectFit: "cover",
        transform: "translate(-50%, 0)",
      }}
    />
  );
};
