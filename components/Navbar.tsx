'use client'

import * as React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/images/ab-logo.png';
import { Button } from './ui/button';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { socials } from '@/utils/socials';
import Social from './Social';

function Navbar() {
    const { theme, setTheme } = useTheme();

    // Function to toggle between light and dark theme
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className="p-6 fixed top-0 right-0 left-0 z-50 flex justify-between items-center bg-transparent">
            {/* Social Icons Container */}
            <div className='flex items-center gap-4 p-4 bg-background backdrop-blur-md rounded-lg shadow-md opacity-80 transition-opacity duration-300 hover:opacity-100'>
                {socials.map((social) => (
                    <Social key={social.name} social={social} />
                ))}
            </div>
            
            {/* Theme Toggle and Logo */}
            <div className='flex gap-6 items-center'>
                <Button variant='outline' size='icon' onClick={toggleTheme}>
                    {theme === 'light' ? (
                        <MdDarkMode className="text-xl" />
                    ) : (
                        <MdLightMode className="text-xl" />
                    )}
                </Button>
                <Link href='/'>
                    <Image 
                        src={Logo}
                        alt="Logo"
                        className="h-12 w-12 object-contain"
                    />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
