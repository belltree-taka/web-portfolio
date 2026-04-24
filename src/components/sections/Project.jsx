import projects from "../../data/projects"
import { useState } from "react"

const Project = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  
  return (
    <section id="projects" className="section-y-spacing bg-sky-900 text-sky-100">
      <div className="px-4 md:flex md:flex-col md:items-center">
        <h2 className="text-h2 uppercase border-l-4 border-l-sky-400 ps-3">Projects</h2>
        <p className="py-6 max-w-prose md:text-center mb-4 md:mb-8 lg:mb-12">Selected work that reflects my approach to building digital experiences, where design and functionality work seamlessly together.
Select a project card to explore further and see details appear below.</p>
      </div>

      <div className="px-4 mb-8 md:mb-12 lg:mb-16">
        <div className="carousel carousel-center w-full max-w-6xl mx-auto space-x-4 p-8 flex bg-sky-700 rounded-2xl">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`carousel-item cursor-pointer transition ${activeProject.id === project.id ? "scale-105" : ""}`}
              onClick={() => setActiveProject(project)}
            >
              <img
              src={project.thumb}
              alt={`Thumbnail image of ${project.title}`}
              className="rounded-2xl" />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-4 lg:pr-4">
        <section className="bg-sky-100 text-sky-950 px-4 py-6 md:px-8 md:py-12 max-w-6xl rounded-l-2xl ml-auto lg:mx-auto lg:rounded-2xl">
          <h3 className="text-4xl font-bold mb-8 break-all">{activeProject.title}</h3>
          <section className="mb-8">
              <h3 className="inline-block text-h3 mb-6 after:content-[''] after:block after:w-4/5 after:h-1 after:bg-sky-400 after:mt-1">
                Project Overview
              </h3>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                
                {activeProject.mediaType === 'video' ? (
                  <video
                    className="w-full object-contain rounded-2xl lg:order-2"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={activeProject.screenshot} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    className="w-full object-contain rounded-2xl lg:order-2"
                    src={activeProject.screenshot}
                    alt={`Image sample of ${activeProject.title}`}
                  />
                )}

                <div>
                  {activeProject.overview.map((paragraph, i) => (
                    <p key={i} className="mb-4 max-w-prose">{paragraph}</p>
                  ))}
                </div>

              </div>
            </section>

          <div className="grid md:grid-cols-2 md:gap-8">
            <div>
              {activeProject.liveUrl ? 
              <section className="mb-8">
                <h3 className="inline-block text-h3 mb-6 after:content-[''] after:block after:w-4/5 after:h-1 after:bg-sky-400 after:mt-1">Live Site</h3>
                {activeProject.liveUrl && (
                    <a href={activeProject.liveUrl} target="_blank" className="text-sky-500 block">
                      {activeProject.liveUrl}
                    </a>
                )}
              </section> : ''
              }
              
              <section className="mb-8">
                <h3 className="inline-block text-h3 mb-6 after:content-[''] after:block after:w-4/5 after:h-1 after:bg-sky-400 after:mt-1">Tech Stack</h3>
                <ul>
                  {activeProject.techStack.map((tech, i) => (
                    <li key={i}>- {tech}</li>
                  ))}
                </ul>
              </section>
            </div>

            <section>
              <h3 className="inline-block text-h3 mb-6 after:content-[''] after:block after:w-4/5 after:h-1 after:bg-sky-400 after:mt-1">Insights</h3>
              <ul>
                {activeProject.insights.map((insight, i) => (
                  <li key={i} className="mb-2 max-w-prose">- {insight}</li>
                ))}
              </ul>
            </section>
          </div>

        </section>
      </div>
    </section>
  )
}

export default Project