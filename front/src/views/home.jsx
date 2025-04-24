import React, { useRef } from "react";
import { WorldScrollEffect } from "../components/world_scroll.jsx";
import { BetterWorld } from "../components/better_world.jsx";
import { WeTransform } from "../components/we_transform.jsx";
import { ANewEra } from "../components/a_new_era.jsx";
import { News } from "../components/news.jsx";

export const Home = () => {
  const betterWorldRef = useRef(null);
  const weTransformRef = useRef(null);

  return (
    <>
        <WorldScrollEffect betterWorldRef={betterWorldRef} weTransformRef={weTransformRef} />       
        <section className="bg-auto bg-no-repeat bg-center w-full min-h-screen">
            <ANewEra />
        </section>

        

        <section ref={betterWorldRef} className="bg-white w-full min-h-screen relative">
            <BetterWorld />
        </section>

        <section ref={weTransformRef} className="bg-white w-full min-h-screen relative">
            <WeTransform />
        </section>
        <section>
            <News />
        </section>
    </>
  );
};