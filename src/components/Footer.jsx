import React from "react";
import { data } from "../constant/data";

export default function Footer() {
    return (
        <div className="bg-[#09162a] flex justify-center py-4 poppins text-white">
            Made with ❤️ by {data.name}
        </div>
    );
}
