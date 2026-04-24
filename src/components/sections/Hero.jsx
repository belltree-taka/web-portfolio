import ScrollDownArrow from '../ui/ScrollDownArrow'

const Hero = () => {

  return (
      <section className="w-screen min-h-dvh header-gradient-bg flex justify-center items-center relative">
        <div className="flex flex-col justify-center items-center fade-in">
          <svg className="w-20 md:w-28 mb-6" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322.6 269.4">
            <title>Takaharu Suzuki Logo</title>
            <path d="M0 5v30.5a5 5 0 0 0 3.5 4.8l51.9 17.1a5 5 0 0 1 3.5 4.8v158.6a5 5 0 0 0 2.9 4.6L86.4 237a5 5 0 0 0 7.3-4.6v-155a5 5 0 0 1 6.6-4.8l57.5 18.6a5 5 0 0 1 3.5 4.8v81a5 5 0 0 0 7 4.8l110-41.1a5 5 0 0 1 6.8 4.8v28.7c0 2-1.3 4-3.2 4.7l-117 46.4a5 5 0 0 0-3.2 4.8v34.3a5 5 0 0 0 7.1 4.6l150.9-67.9a5 5 0 0 0 3-4.6V92a5 5 0 0 0-6.7-4.9l-107.5 34.4a5 5 0 0 1-6.6-4.8v-33a5 5 0 0 1 3.5-5L319.2 42a5 5 0 0 0 3.5-4.9V7a5 5 0 0 0-6.7-5L163 51a5 5 0 0 1-3.2 0L6.7.2A5 5 0 0 0 0 5" fill="#062f49"/>
          </svg>
          <h1 className="text-sky-950 text-center">
            <span className="block text-h1 uppercase">Takaharu Suzuki</span>
            <span className="block text-sm mb-8">Front-end Developer</span>
            <span className="block text-base mb-24">Portfolio</span>
          </h1>
        </div>
        <ScrollDownArrow />
      </section>
  )
}

export default Hero