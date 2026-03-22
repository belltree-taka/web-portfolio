
const MobileNavToggleBtn = ({mobileNavClickHandler}) => {
    return (
        <button type="button" className="w-12 absolute top-8 left-4 z-10" onClick={mobileNavClickHandler} aria-label="Open mobile navigation menu">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <title>Mobile Navigation Toggle Button</title>
            <path d="M0 4a4 4 0 0 1 4-4h18.2v22.2H0zm0 21.8h22.2V48H4a4 4 0 0 1-4-4zM25.8 0H44a4 4 0 0 1 4 4v18.2H25.8zm0 25.8H48V44a4 4 0 0 1-4 4H25.8z" fill="#082f49"/>
            </svg>
        </button>
    )
}

export default MobileNavToggleBtn