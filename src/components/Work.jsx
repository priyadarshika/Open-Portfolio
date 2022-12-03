import React from "react";
import { data } from "../constant/data";

const Work = () => {
    return (
        <div name="work" className="w-full md:h-screen text-white bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="py-8 pt-6 flex justify-center my-4">
                    <p className="text-3xl inline border-b-4 text-gray-300 border-gray-400">
                        Projects
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {data.work.map((project, i) => (
                        <div
                            style={{ backgroundImage: `url(${project.image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                            key={i}
                        >
                            <div className="opacity-0 group-hover:opacity-100 duration-1000 mx-4">
                                <span className="text-lg font-bold text-white tracking-wider poppins">
                                    {project.name}
                                </span>
                                <div className="flex justify-center items-center poppins text-sm">
                                    {project.description}
                                </div>
                                <div className="pt-8 text-center">
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="text-center hover:rounded-lg duration-500 px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                            Demo
                                        </button>
                                    </a>
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="text-center hover:rounded-lg duration-500 px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                    <p className="space"></p>
                    <p className="space"></p>
                </div>
            </div>
        </div>
    );
};

export default Work;
