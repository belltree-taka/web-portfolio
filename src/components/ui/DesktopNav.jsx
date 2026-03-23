import React from 'react'

const DesktopNav = () => {
    return (
        <nav className="absolute top-16 inset-x-0 w-full max-w-6xl mx-auto z-10">
            <ul className="flex justify-around">
                <li><a className="text-h3 text-sky-950" href="#about">About</a></li>
                <li><a className="text-h3 text-sky-950" href="#projects">Projects</a></li>
                <li><a className="text-h3 text-sky-950" href="#skills">Skills</a></li>
                <li><a className="text-h3 text-sky-950" href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default DesktopNav