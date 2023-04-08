import React from "react";
import planetImage from "../assets/planet.png";
import { ArrowSvg } from "./ui/ArrowSvg";
import { CirclesSvg } from "./ui/CirclesSvg";

export const Content = () => {
    return (
        <div className="relative pt-[188px] flex justify-between min-h-[700px]">
            <div className="relative z-10">
                <p className="text-[120px] leading-[114px]">
                    Explore Your own planet <br />
                    In{" "}
                    <span
                        style={{ WebkitTextStroke: "0.5px #fff" }}
                        className="text-[#171719]"
                    >
                        our New
                    </span>{" "}
                    metaverse
                </p>

                <p className="text-base font-avenir w-[421px] leading-[19px] mt-[45px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
            </div>
            <div className="absolute left-[546px] top-3 flex justify-center items-center">
                <div className="absolute z-10 top-7 mr-10 rounded-full w-20 h-[30px] bg-white flex justify-center items-center">
                    <div className="flex items-center gap-2">
                        <span className="text-black h-5 shadow-2xl">
                            Q1 2022{" "}
                        </span>
                        <span
                            className="w-3 h-3 border-white border-[3px] bg-main-orange rounded-lg"
                            style={{
                                boxShadow:
                                    "-2px -2px 6px rgba(50, 50, 50, 0.25), 2px 2px 6px rgba(50, 50, 50, 0.25)",
                            }}
                        ></span>
                    </div>
                </div>
                <ArrowSvg />
                <div
                    style={{ direction: "rtl" }}
                    className="absolute flex items-center pt-[10px] text-[120px] z-20 leading-[114px] text-left -indent-4 text-main-orange h-[320px] w-[322px] rounded-[100%] whitespace-nowrap overflow-hidden"
                >
                    Explore Your own planet
                    <br />
                    In our New metaverse
                </div>
                <img src={planetImage} alt="" className="absolute z-10" />
                <CirclesSvg />
            </div>
            <div className="flex flex-col justify-start items-center ml-10">
                <h1 className="text-[32px]">Roadmap stats</h1>
                <div className="flex flex-col justify-center items-center gap-2 text-lg mt-[42px]">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <h1 className="text-main-orange text-[28px]">
                            12, 345
                        </h1>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <span className="w-[199px] border-t-[0.5px] h-0"></span>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <h1 className="text-main-orange text-[28px]">
                            12, 345
                        </h1>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <span className="w-[199px] border-t-[0.5px]"></span>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <h1 className="text-main-orange text-[28px]">
                            12, 345
                        </h1>
                        <p>Lorem ipsum dolor</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
