import React from 'react'

const header = () => {
  return (
    <>
      <header
            // Testing TailwindCSS and daisyUI
            className="w-screen min-h-svh header-gradient-bg relative">
                <h1 className="text-6xl md:text-7xl text-center font-heading text-sky-950 px-6 absolute left-1/2 top-1/2 -translate-1/2">
                    <p className="text-animation mb-4">TAKAHARU SUZUKI</p>
                    <p className="text-base md:text-3xl text-animation">PORTFOLIO</p>
                </h1>
      </header>
    </>
  )
}

export default header