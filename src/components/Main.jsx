import React from "react";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Work from "./Work";
import Footer from "./Footer";
export default function Main() {
    return (
        <div>
            <div>
                <Navbar />
                <Home />
                <About />
                <Skills />
                <Work />
                <Footer />
            </div>
        </div>
    );
}
