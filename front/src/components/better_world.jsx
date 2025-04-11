import React from "react";
import earth from "../assets/earth1.png";


export const BetterWorld = () => {

    return(
        <>
            <section className="relative w-full bg-white px-8 md:px-20 py-16 h-[100vh]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 max-w-lg">
                        <h1 className="better-world-title md:text-5xl font-bold leading-tight mb-6">
                            <span className="text-[#0072BC]">CONSTRUYENDO UN </span>{" "}
                            <span className="text-black">MUNDO MEJOR</span>
                        </h1>
                        <p className="better-w-first-text text-black mb-8 text-justify">
                            Desde servicios de consultoría estratégica hasta tecnologías de vanguardia,
                            desarrollamos experiencias que transforman organizaciones, revolucionan
                            industrias y dan forma a una sociedad mejor para todos.
                        </p>
                        <div className="space-y-6">
                            <div>
                                <p className="metric-principal-txt font-bold text-[#0072BC]">50</p>
                                <p className="metric-sec-txt uppercase text-sm text-gray-500 tracking-wider">Países</p>
                            </div>
                            <div>
                                <p className="metric-principal-txt font-bold text-[#0072BC]">190.000+</p>
                                <p className="metric-sec-txt uppercase text-sm text-gray-500 tracking-wider">
                                    Empleados en todo el mundo
                                </p>
                            </div>
                            <div>
                                <p className="metric-principal-txt font-bold text-[#0072BC]">150</p>
                                <p className="metric-sec-txt uppercase text-sm text-gray-500 tracking-wider">
                                    Años de historia e innovación
                                </p>
                            </div>
                        </div>
                    </div>

                
                    <div className="absolute bottom-0 right-4">
                    <img
                        src={earth}
                        alt="Imagen del mundo"
                        className="max-w-[500px] h-auto object-contain"
                    />
                    </div>
                </div>
            </section>
        </>
    )
}