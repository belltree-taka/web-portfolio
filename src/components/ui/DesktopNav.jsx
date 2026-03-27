const DesktopNav = ({linkClickHandler}) => {
    return (
        <nav className="absolute top-16 inset-x-0 w-full max-w-6xl mx-auto z-10">
            <ul className="flex justify-around">
                <li><a className="text-h3 text-sky-950 after:content-[''] after:block after:w-0 after:h-1 after:bg-sky-400 after:mt-1 after:transition-all after:delay-150 after:duration-300 hover:after:w-4/5" href="#about" onClick={(e) => linkClickHandler(e, "#about")}>About</a></li>
                <li><a className="text-h3 text-sky-950 after:content-[''] after:block after:w-0 after:h-1 after:bg-sky-400 after:mt-1 after:transition-all after:delay-150 after:duration-300 hover:after:w-4/5" href="#projects" onClick={(e) => linkClickHandler(e, "#projects")}>Projects</a></li>
                <li><a className="text-h3 text-sky-950 after:content-[''] after:block after:w-0 after:h-1 after:bg-sky-400 after:mt-1 after:transition-all after:delay-150 after:duration-300 hover:after:w-4/5" href="#skills" onClick={(e) => linkClickHandler(e, "#skills")}>Skills</a></li>
                <li><a className="text-h3 text-sky-950 after:content-[''] after:block after:w-0 after:h-1 after:bg-sky-400 after:mt-1 after:transition-all after:delay-150 after:duration-300 hover:after:w-4/5" href="#skills" onClick={(e) => linkClickHandler(e, "#beyond-the-screen")}>Beyond The Screen</a></li>
                <li><a className="text-h3 text-sky-950 after:content-[''] after:block after:w-0 after:h-1 after:bg-sky-400 after:mt-1 after:transition-all after:delay-150 after:duration-300 hover:after:w-4/5" href="#contact" onClick={(e) => linkClickHandler(e, "#contact")}>Contact</a></li>
            </ul>
        </nav>
    )
}

export default DesktopNav