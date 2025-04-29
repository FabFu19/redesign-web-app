import React from "react";
import '../styles/home.css';

export const ANewEra = () => {
    return (
        <>
            <div className="home-text w-full h-screen flex flex-col justify-center items-center z-2">
                <h1 className="home-principal-title text-white z-10">A NEW ERA BEGINS</h1>
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
                <p className="home-text-scroll text-white">Scroll to explore</p>
                </div>
            </div>
        </>
        
    )
}