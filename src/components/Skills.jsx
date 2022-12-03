import React from "react";
import { data } from "../constant/data";

const Skills = () => {
    return (
        <div
            name="skills"
            className="w-full h-screen bg-[#09162a] text-gray-300"
        >
            <p className="space"></p>
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="flex justify-center my-8">
                    <p className="text-3xl inline border-b-4 border-gray-400">
                        Skills
                    </p>
                </div>

                <div className="w-full grid grid-cols-3 sm:grid-cols-6 gap-4 text-center items-center py-8 px-4">
                    {data.skills.map((skill, i) => (
                        <div className="hover:scale-110 duration-500" key={i}>
                            <img
                                className="w-20 mx-auto"
                                src={skill.image}
                                alt={skill.name}
                            />
                            <p className="my-4 poppins font-bold">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
