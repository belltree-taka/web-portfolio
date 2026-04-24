import hobbyProject from '../../assets/images/hobby-project-image.avif'


const BeyondTheScreen = () => {
    return (
        <section id="beyond-the-screen" className="section-y-spacing bg-sky-900 text-sky-100">
            <div className="px-4 md:flex md:flex-col md:items-center">
                <h2 className="text-h2 uppercase border-l-4 border-l-sky-400 ps-3">Beyond The Screen</h2>
                <p className="py-6 max-w-prose md:text-center mb-4 md:mb-8 lg:mb-12">I like to explore how things actually run beyond what is visible on the screen. Driven by curiosity, I embrace the process of trying, getting stuck, and figuring things out along the way, often learning more from the challenges than from smooth progress.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch px-4 md:px-8 max-w-6xl mx-auto">
                <div className="lg:pt-18">
                    <span className="text-rotate font-bold text-2xl md:text-8xl lg:text-9xl mb-6">
                        <span>
                            <span>Try.</span>
                            <span>Get Stuck.</span>
                            <span>Make it work.</span>
                        </span>
                    </span>
                    <p className="max-w-prose pb-4">Being a front-end developer does not mean staying only in the front-end world. If something sparks my curiosity, I follow it and figure it out.</p>
                    <p className="max-w-prose pb-4">While many developers rely on platforms like GitHub or Vercel, I wanted to experience what it feels like to run a website on my own server. That curiosity led me to build a web server using a Raspberry Pi.</p>
                    <p className="max-w-prose pb-4">I upgraded the device with an SSD using a HAT kit and configured Cloudflare as a reverse proxy to securely expose my site without traditional port forwarding. There were many moments where I got stuck for hours, but through trial and error, I managed to get everything working.</p>
                    <p className="max-w-prose pb-4">Along the way, I became comfortable using the Linux command line, which also improved my workflow on macOS. Interestingly, this portfolio itself is built with React and runs 24/7 on my Raspberry Pi.</p>
                </div>
                
                <div className="rounded-2xl">
                    <img className="w-full rounded-2xl object-contain" src={hobbyProject} alt="Image of Raspberry Pi" />
                </div>
            </div>
            </section>
    )
}

export default BeyondTheScreen