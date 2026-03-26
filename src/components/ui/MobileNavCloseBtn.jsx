const MobileNavCloseBtn = ({mobileNavClickHandler}) => {
    return (
        <button type="button" onClick={mobileNavClickHandler} aria-label="Close mobile navigation menu">
            <svg className="w-12 absolute top-8 right-4" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <title>Mobile Navigation Close Button</title>
                <path d="m8 8 32 32M8 40 40 8" stroke="#e0f2fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    )
}

export default MobileNavCloseBtn