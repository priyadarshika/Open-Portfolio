import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Salutation from "./Home/Salutation";
import { data } from "../constant/data.js";

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#09162a]">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-gray-300 poppins text-xl poppins">
                    Hey! I am
                </p>
                <h1
                    className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"
                    style={{ fontWeight: "500" }}
                >
                    {data.name}
                </h1>
                <h2
                    className="text-2xl sm:text-4xl text-[#8892b0] "
                    style={{ fontWeight: "600" }}
                >
                    I'm a <Salutation />
                </h2>
                <p className="text-[#b1b9cf] py-4 max-w-[700px]">
                    {data.tagline}
                </p>
                <div>
                    <a
                        href={data.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="text-white poppins group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-600 hover:border-gray-600">
                            Resume
                            <span className="group-hover:rotate-180 duration-300 ml-2">
                                <HiArrowNarrowRight className="ml-3 " />
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
