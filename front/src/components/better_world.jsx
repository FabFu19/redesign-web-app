import React from "react";

export const BetterWorld = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-full px-8 md:px-20 py-16">
      <div className="flex-1 max-w-lg">
        <h1 className="better-world-title leading-tight mb-6">
          <span className="text-[#0072BC]">BUILDING A</span>{" "}
          <span className="text-black">BETTER WORLD</span>
        </h1>
        <p className="better-w-first-text text-black mb-8 text-justify">
          From strategic consulting services to cutting-edge technologies,
          we develop experiences that transform organizations, revolutionize industries and shape a better society for all.
        </p>
        <div className="space-y-6">
          <div>
            <p className="metric-principal-txt font-bold text-[#0072BC]">50</p>
            <p className="metric-sec-txt uppercase text-sm text-[#0072BC] tracking-wider">Countries</p>
          </div>
          <div>
            <p className="metric-principal-txt font-bold text-[#0072BC]">190.000+</p>
            <p className="metric-sec-txt uppercase text-sm text-[#0072BC] tracking-wider">Employees around the world</p>
          </div>
          <div>
            <p className="metric-principal-txt font-bold text-[#0072BC]">150</p>
            <p className="metric-sec-txt uppercase text-sm text-[#0072BC] tracking-wider">Years of history and innovation</p>
          </div>
        </div>
      </div>
    </div>
  );
};