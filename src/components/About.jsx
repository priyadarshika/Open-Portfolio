import React from "react";
import { data } from "../constant/data";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-[#0a192f] text-gray-300 pb-8"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-1 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <div className="flex justify-center">
                            <p className="text-3xl inline border-b-4 border-gray-400">
                                Experience
                            </p>
                        </div>
                    </div>
                    <div></div>
                </div>

                <div className="container">
                    <div className="flex flex-col md:grid grid-cols-9 mx-4 p-2 lg:px-16 md:px-16 text-blue-50">
                        {data.experience.map((position, i) => {
                            if (i % 2 === 0) {
                                return (
                                    <div className="flex flex-row-reverse md:contents w-full">
                                        <div className="bg-gray-200 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md text-black">
                                            <h3 className="font-semibold text-lg mb-1">
                                                {position.name}
                                            </h3>
                                            <p className="leading-tight text-sm text-justify">
                                                {position.description}
                                            </p>
                                        </div>
                                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                            <div className="h-full w-6 flex items-center justify-center">
                                                <div className="h-full w-1 bg-gray-600 pointer-events-none rounded-t-lg"></div>
                                            </div>
                                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow"></div>
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="flex md:contents w-full">
                                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                            <div className="h-full w-6 flex items-center justify-center">
                                                <div className="h-full w-1 bg-gray-600 pointer-events-none"></div>
                                            </div>
                                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow"></div>
                                        </div>
                                        <div className="bg-white col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md text-black">
                                            <h3 className="font-semibold text-lg mb-1">
                                                {position.name}
                                            </h3>
                                            <p className="leading-tight text-justify">
                                                {position.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
