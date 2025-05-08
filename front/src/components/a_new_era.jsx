import React from "react";
import '../styles/home.css';

export const ANewEra = () => {
    return (
        <>
            <div className="home-text w-full min-h-screen flex flex-col justify-center items-center z-10">
                <h1 className="home-principal-title text-white z-10 mt-auto mb-auto">A NEW ERA BEGINS</h1>
                <div className="flex w-full justify-center mb-8 z-10">
                    <p className="home-text-scroll text-white">Scroll to explore</p>
                </div>
            </div>
        </>
        
    )
}
