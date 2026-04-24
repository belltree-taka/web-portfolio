import portraitLg from '../../assets/images/portrait-lg.avif'
import portraitMd from '../../assets/images/portrait-md.avif'
import portraitSm from '../../assets/images/portrait-sm.avif'

const About = () => {
  return <>
    <section id="about" className="section-y-spacing bg-sky-950 relative">
      <div className="relative mb-8">
        <div className="max-w-6xl mx-auto lg:relative">
          <picture className="w-full flex justify-end">
            <source
              media="(min-width: 1024px)"
              srcSet={portraitLg}
              type="image/avif"
            />
            <img
              className="min-h-96 object-cover rounded-l-2xl min-[1152px]:rounded-2xl w-2/3 lg:w-3/5"
              src={portraitMd}
              srcSet={`${portraitSm} 640w, ${portraitMd} 768w`}
              alt="Takaharu Suzuki Portrait Photo"
            />
          </picture>
          <div className="border-l-4 border-l-sky-400 text-sky-100 ps-3 absolute left-4 top-1/2 md:left-12 md:top-2/5 lg:left-20 lg:top-1/8">
            <p className="font-bold text-2xl md:text-3xl mb-4 uppercase">Hello I'm</p>
            <p className="font-bold uppercase text-sky-400 md:text-xl">Front-End Developer</p>
            <h2 className="text-impact uppercase">
              <span className="block break-all">Takaharu</span>
              <span className="block">Suzuki</span>
            </h2> 
          </div>
        </div>
      </div>
      <div className="pr-4 max-w-6xl mx-auto md:-mb-24 md:h-138 lg:h-68">
        <div className="bg-sky-100 text-sky-950 px-4 py-6 rounded-r-2xl max-w-prose md:relative md:-top-34 lg:max-w-xl lg:-top-110 lg:left-20 lg:rounded-2xl">
          <p className="mb-4">I am a front-end developer based in Edmonton, Alberta. I've been drawn to geometric art since I was young. Even in the middle of everyday chaos, I've always found beauty in structure and order.</p>
          <p className="mb-4">Through studying design and UX principles at NAIT, I came to understand that web design is built on that same foundation. What I once thought was just talent or intuition is actually supported by clear principles. Learning design theory, especially CRAP (Contrast, Repetition, Alignment, Proximity), helped me understand how visual communication really works.</p>
          <p className="mb-4">I see programming in a similar way. It follows rules and logic, but when everything fits together, it becomes something creative. That connection between design and structure is what makes web development so interesting to me.</p>
          <p className="mb-4">Outside of coding, I sometimes notice patterns in unexpected places. My cat, Misty, has an “M” shape on her forehead. It is just a natural marking, but I like to think of it as a small piece of intentional design.</p>
          <p className="mb-4">And yes, I love cats so much that I actually overcame my cat allergy!</p>
          <p className="mb-8">I enjoy building things where structure and creativity exist together. Let's connect and build something that works as beautifully as it looks.</p>
          <svg className="w-36 ml-auto" viewBox="0 0 1433.05 356.52">
            <title>Takaharu's Signature</title>
            <path fill="none" stroke="#000" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" d="M.02,104.08c85.05-4.02,169.62-18.07,251.39-41.79,39.81-11.54,79.79-25.81,112.21-51.63-35.9-2.62-65.79,25.98-88.97,53.54-67.41,80.16-122.66,170.53-163.29,267.07,55.03-67.41,125.2-122.39,203.82-159.69-30.93,17.11-61.23,36.59-84.39,63.29-23.17,26.7-38.67,61.62-35.79,96.85,57.08-35.05,100.78-91.35,120.59-155.34-24.16,34.19-42.32,72.62-53.39,112.99-1.64,5.97-2.9,13.06,1.12,17.77,6.73,7.88,19.39,1.16,27.1-5.76,63.81-57.37,123.68-119.11,179.06-184.65,21.26-25.16,42.65-52.63,47.23-85.25,1.69-12.02-5.57-29.2-16.87-24.76-4.61,1.81-7.07,6.72-9.11,11.23-50.43,111.24-97.26,224.12-140.4,338.39,29.38-70.44,77.05-133.17,137.04-180.35,8.82-6.94,21.32-13.67,30.43-7.12,11.27,8.11,4.22,25.77-3.67,37.2-9.41,13.64-21.21,28.66-37.77,29.39s-29.15-25.62-14-32.34c-9.23,23.31-18.45,46.62-27.68,69.94-2.02,5.11-4.08,10.58-3.02,15.97,3.33,16.83,28.32,14.26,43.72,6.7,59.23-29.08,113.11-69.03,158.15-117.25-56.04,24.86-99.89,75.74-116.19,134.85,31.89-4.1,56.57-30,73.67-57.22s29.83-57.68,52.05-80.92c-23.6,34.76-40.76,73.87-50.37,114.76-1.92,8.17-2.52,18.8,4.84,22.84,4.26,2.34,9.54,1.28,14.19-.12,33.47-10.11,60.48-34.51,85.47-58.97,63.52-62.15,122.06-129.39,174.87-200.86,11.29-15.28,22.56-36.12,11.99-51.9-69.93,113.89-136.88,229.62-200.76,347.02,33.56-60.96,84.05-112.48,144.32-147.27-18.43,30.6-32.94,63.56-43.07,97.82-1.92,6.5-3.64,13.75-.66,19.84,7.13,14.6,29.2,7.3,42.59-1.89,60.73-41.71,121.45-83.42,182.17-125.14-30.13,14.65-59.49,32.18-82.18,56.83s-38.21,57.31-36.68,90.78c60.47-31.9,107.92-87.66,129.74-152.45-16.55,40.47-33.42,83.29-27.53,126.6.85,6.22,2.61,13.07,7.94,16.4,8.86,5.54,19.87-2.29,27.18-9.76,42.28-43.14,79.62-91.11,111.06-142.69-5.35-7.08-18.35.93-16.79,9.67,1.56,8.74,11.92,13.41,20.74,12.38s16.57-6.02,24.51-10c7.94-3.97,17.23-7.04,25.57-3.99-24.34,32.59-41.86,70.26-51.1,109.87-2.58,11.06-3.03,25.55,7.1,30.69,8.94,4.53,19.36-1.88,27.09-8.26,47.96-39.6,86.9-90.08,113.02-146.53-17.51,33.89-28.47,71.16-32.08,109.14-.54,5.65-.83,11.71,2.02,16.63,8.79,15.16,31.99,3.7,44.1-8.97,37.41-39.15,71.68-81.3,102.37-125.91-9.93,64.18-.09,131.28,27.87,189.89"
            />
          </svg>
        </div>
      </div>
    </section>
  </>
}

export default About