import {  useRef, useEffect } from "react";

const FormSuccess = () => {
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#22c55e" className="size-40">
                <title>Form Submission Success Icon</title>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <div className="text-center text-sky-100">
                <p>All set! Your message is on its way.</p>
                <p>I'll be in touch with you shortly.</p>
            </div>
        </div>
    )
}

export default FormSuccess