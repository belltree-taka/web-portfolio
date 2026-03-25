import {  useRef, useEffect } from "react";

const FormError = () => {
    const ref = useRef(null);
    useEffect(() => {
    const el = ref.current
    if (!el) return

    const animation = el.animate(
        [{ opacity: 0, transform: 'translateY(10px)' },
        { opacity: 1, transform: 'translateY(0)' }],
        { duration: 300, fill: 'forwards', easing: 'ease-out' }
    )

    return () => animation.cancel()
    }, [])
    return (
        <div ref={ref} className="flex flex-col items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#f43f5e" className="size-40">
                <title>Form Submission Error Icon</title>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>

            <div className="text-center text-sky-100">
                <p>Oops! Something went wrong.</p>
                <p>Please try again or check your connection.</p>
            </div>
        </div>
    )
}

export default FormError