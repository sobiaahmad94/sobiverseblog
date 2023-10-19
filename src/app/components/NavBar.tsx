"use client";

import React, { useState } from "react";
import Link from "next/link";

// components
import DarkModeToggler from "./DarkModeToggler";

// images and icons
import { HiOutlineMenuAlt2, HiX } from "react-icons/hi";
import Image from "next/image";
import sobiverseLogo from "src/images/sobiverse-blog-logo.png";

const NavBar = () => {
    // mobile menu state
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

// toggle menu func
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // responsive mobile tailwind styles
    const mobileUIStyles = "md:hidden font-bold hover:shadow-cyan text-center uppercase py-4";

    const liHoverStyles = "hover:text-cyan-600 hover:rotate-2";

    return (
        <div className="sticky z-10 bg-transparent shadow-sm shadow-cyan-600 blur-bottom drop-shadow">
            {/* if isMobileMenuOpen then it'll show the two lines, other wise (else) it'll show the X */}
            <div className="flex justify-between items-center px-6">
                <div className="flex items-center">
                    <Image src={sobiverseLogo} alt="Sobiverse Logo" className="w-32 h-32 pt-8" />
                </div>
                <div className="flex items-center space-x-4 ml-auto">
                    <nav className="hidden md:flex text-xs md:space-x-1 font-bold uppercase">
                        <ul className="flex space-x-12">
                            <li className={liHoverStyles}>
                                <Link href="/">Home</Link>
                            </li>
                            <li className={liHoverStyles}>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li className={liHoverStyles}>
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li className={liHoverStyles}>
                                <Link href="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <DarkModeToggler />
                    <nav className="px-6 md:hidden cursor-pointer" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (
                            <HiX size={24} />
                        ) : (
                            <HiOutlineMenuAlt2 size={24} />
                        )}
                    </nav>
                </div>
            </div>

            {isMobileMenuOpen && (
                <ul className={`${mobileUIStyles} ${isMobileMenuOpen ? "text-xl" : "text-xs"}`}>
                    <li className="hover:text-cyan-600">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-cyan-600">
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li className="hover:text-cyan-600">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default NavBar;