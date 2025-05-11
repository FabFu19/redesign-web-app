import React, { useRef } from "react";
import { ANewEra } from "../components/a_new_era.jsx";
import { BetterWorld } from "../components/better_world.jsx";
import { WeTransform } from "../components/we_transform.jsx";
import { News } from "../components/news.jsx";
import { DigitalLovers } from "../components/digital_lovers.jsx";
import { WorldScrollEffect } from "../components/world_scroll.jsx";
import { WorldSection } from "../components/only-world.jsx";

export const Home = () => {
  const aNewEraRef = useRef(null);
  const betterWorldRef = useRef(null);
  const weTransformRef = useRef(null);
  const newsRef = useRef(null);
  const digitalLoversRef = useRef(null);
  const onlyWorldRef = useRef(null);

  return (
    <main className="relative overflow-y-hidden">
      <WorldScrollEffect
        newEraRef={aNewEraRef}
        betterWorldRef={betterWorldRef}
        weTransformRef={weTransformRef}
        newsRef={newsRef}
        digitalLoveRef={digitalLoversRef}
        onlyWorldRef={onlyWorldRef}
      />

      <section ref={aNewEraRef} className="relative min-h-screen" id="a-new-era">
        <ANewEra />
      </section>

      <section ref={betterWorldRef} className="relative min-h-screen">
        <BetterWorld />
      </section>

      <section ref={weTransformRef} className="relative min-h-screen">
        <WeTransform />
      </section>

      <section ref={newsRef} className="relative min-h-screen">
        <News />
      </section>

      <section ref={digitalLoversRef} className="relative min-h-screen">
        <DigitalLovers />
      </section>

      <section ref={onlyWorldRef} className="relative h-[460px] bg-black">
        <WorldSection />
      </section>
    </main>
  );
};