import React from "react";
import forbsImg from "../assets/forbes100.jpg";

export const News = () => {
    return(
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[400px_auto] gap-8 py-16 h-full">
            <div className="flex flex-col text-[#00000]">
                <h2 className="sm:mt-0 md:mt-[50px] mb-6 uppercase news-bigtxt-styles">
                    <span className="text-[#0072BC]">Forbes</span> names NTT DATA among{" "}
                    <span className="text-[#0072BC]">the 100 Best Companies </span> to Work For in Spain</h2>
                <div className="flex flex-col justify-center bg-[#0072BC] text-white rounded-full items-center w-[273px] h-[44px] hover:bg-[#0b649f] hover:cursor-pointer">
                    <p className="text-center txt-button">Read news</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex space-x-4 overflow-x-auto mb-[36px]">
                    <div className="relative w-[450px] flex-shrink-0 h-[513px] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer">
                        <img src={forbsImg} alt="Noticia 1" className="w-full h-full object-cover" />
                        <p className="absolute w-full bottom-0 h-[450px] content-end text-white text-sm p-4 bg-gradient-to-b from-transparent to-[#0B3855] date-news-styles">
                            THU., MAY 30 2024
                        </p>
                    </div>
                    <div className="relative w-[160px] h-[513px] flex-shrink-0 rounded-2xl overflow-hidden bg-gray-100 cursor-pointer">
                        <img src="https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o" alt="Noticia 2" className="w-full h-full object-cover" />
                        <p className="absolute inset-0 flex items-end bg-gradient-to-b from-transparent to-[#0B3855] p-4 date-news-styles">
                            <span className="text-white [writing-mode:vertical-rl] rotate-180">TUE., MAY 28 2024</span>
                        </p>
                    </div>
                    <div className="relative w-[160px] h-[513px] flex-shrink-0 rounded-2xl overflow-hidden bg-gray-100 cursor-pointer">
                        <img src="https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o" alt="Noticia 3" className="w-full h-full object-cover" />
                        <p className="absolute inset-0 flex items-end bg-gradient-to-b from-transparent to-[#0B3855] p-4 date-news-styles">
                            <span className="text-white [writing-mode:vertical-rl] rotate-180">MON., MAY 27 2024</span>
                        </p>
                    </div>
                </div>
                <div className="flex justify-center flex-row bg-transparent text-[#0072BC] border border-[#0072BC] rounded-full items-center w-[273px] h-[44px] ms-auto hover:bg-[#0072BC] hover:text-white cursor-pointer">
                    <p className="text-center txt-button">View all</p>
                </div>
            </div>
        </div>
    )

}
