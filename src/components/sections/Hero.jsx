import React from 'react'
import Header from '../layout/Header'

const Hero = () => {
  return (
    <>
      <Header/>
      <section className="w-screen min-h-svh header-gradient-bg relative">
        <h1 className="text-6xl md:text-7xl text-center font-heading text-sky-950 px-6 absolute left-1/2 top-1/2 -translate-1/2">
            <p className="text-animation mb-4">TAKAHARU SUZUKI</p>
            <p className="md:text-3xl">PORTFOLIO</p>
        </h1>
      </section>
    </>
  )
}

export default Hero