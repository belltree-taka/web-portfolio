import MobileNavCloseBtn from "./MobileNavCloseBtn"
import { useState } from 'react'

const MobileNav = ({setIsMobileNavOpen, mobileNavClickHandler}) => {
    const [isClosing, setIsClosing] = useState(false);

    const mobileNavLinkHandler = (e, targetId) => {
    e.preventDefault();
    
    setIsClosing(true);

    setTimeout(() => {
        setIsClosing(false);
        setIsMobileNavOpen(false);
        document.body.style.position = 'static';
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, 300);
    };
    
    return (
        <div className={`fixed overscroll-contain bg-sky-950/95 inset-0 z-10 flex flex-col justify-center items-center transition-all duration-300 ${isClosing ? "opacity-0 " : "opacity-100"}`}>
            <MobileNavCloseBtn mobileNavClickHandler={mobileNavClickHandler}/>
            <nav className="-translate-y-6">
                <ul className="flex flex-col justify-center items-center gap-6">
                <li><a className="text-mobile-nav after:content-[''] after:block after:w-0 after:h-1 after:bg-sky-400 after:mt-1 after:transition-all after:delay-150 after:duration-300 hover:after:w-4/5" href="#about" onClick={(e) => mobileNavLinkHandler(e, "#about")}>About</a></li>
                <li><a className="text-mobile-nav after:content-[''] after:block after:w-0 after:h-1 after:bg-sky-400 after:mt-1 after:transition-all after:delay-150 after:duration-300 hover:after:w-4/5" href="#projects" onClick={(e) => mobileNavLinkHandler(e, "#projects")}>Projects</a></li>
                <li><a className="text-mobile-nav after:content-[''] after:block after:w-0 after:h-1 after:bg-sky-400 after:mt-1 after:transition-all after:delay-150 after:duration-300 hover:after:w-4/5" href="#skills" onClick={(e) => mobileNavLinkHandler(e, "#skills")}>Skills</a></li>
                <li><a className="text-mobile-nav after:content-[''] after:block after:w-0 after:h-1 after:bg-sky-400 after:mt-1 after:transition-all after:delay-150 after:duration-300 hover:after:w-4/5" href="#contact" onClick={(e) => mobileNavLinkHandler(e, "#contact")}>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileNav