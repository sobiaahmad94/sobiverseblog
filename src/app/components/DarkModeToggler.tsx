"use client";

import React, { useState, useEffect } from "react";

// icons
import { MdDarkMode } from "react-icons/md";
import { BsBrightnessHighFill } from "react-icons/bs";

const DarkModeToggler = () => {
    const [darkMode, setDarkMode] = useState(true);
    // if it's set to true it will be set to dark mode by default 

    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };

    useEffect(() => {
        // updating the data-theme attribute on the root el
        if (darkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="flex items-center ml-6 pr-10">
            {/* <label htmlFor="dark-mode-toggle">
                Dark Mode
            </label> */}
            <button id="dark-mode-toggle" className="ml-2 pr-10 hover:text-cyan-600 hover:rotate-2" 
            onClick={toggleDarkMode}
            > {darkMode ? <BsBrightnessHighFill size={18} /> : <MdDarkMode size={18} />}
            </button>
        </div>
    );
};

export default DarkModeToggler;