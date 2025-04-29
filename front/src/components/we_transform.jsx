import React from "react";

export const WeTransform = () => {
  return (
    <div className="relative flex flex-col justify-center items-center text-center h-full w-full px-6 md:px-20 py-16">
      <div className="z-10 max-w-3xl">
        <h1 className="we-transform-title text-3xl md:text-5xl leading-tight mb-6">
          <span className="text-[#0072BC]">WE TRANSFORM</span>{" "}
          <span className="text-black">COMPANIES, </span>
          <span className="text-black">ANTICIPATING THE FUTURE</span>
        </h1>
        <p className="text-black mb-8">
          We are a multinational company specializing in technology consulting services based in Tokyo, 
          which continues to add territories in which to continue innovating through emerging technologies, 
          with the aim of developing innovative projects that contribute to improving people's lives.
        </p>
        <iframe
          className="rounded-xl shadow-xl w-full max-w-2xl aspect-video ms-auto me-auto"
          src="https://www.youtube.com/embed/IWs74RjRxgI"
          title="nttdata-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
