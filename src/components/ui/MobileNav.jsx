import MobileNavCloseBtn from "./MobileNavCloseBtn"

const MobileNav = ({mobileNavClickHandler}) => {
    return (
        <div className="fixed inset-0 bg-sky-950 z-10 flex flex-col justify-center items-center">
            <MobileNavCloseBtn mobileNavClickHandler={mobileNavClickHandler}/>
            <nav className="-translate-y-6">
                <ul className="flex flex-col justify-center items-center gap-6">
                <li><a className="text-mobile-nav" href="#about">About</a></li>
                <li><a className="text-mobile-nav" href="#projects">Projects</a></li>
                <li><a className="text-mobile-nav" href="#skills">Skills</a></li>
                <li><a className="text-mobile-nav" href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileNav