const Skill = () => {

  const eightEmptyDivs = Array.from({ length: 8 }, (_, i) => (
    <div key={i}></div>
  ));

  return (
    <section id="skills" className="section-y-spacing bg-sky-950 text-sky-100">
      <div className="px-4 md:flex md:flex-col md:items-center">
        <h2 className="text-h2 uppercase border-l-4 border-l-sky-400 ps-3">Skills</h2>
        <p className="py-6 max-w-prose md:text-center mb-4 md:mb-8 lg:mb-12">A collection of the tools and technologies I use to build and refine web interfaces — continuously expanding as I learn, experiment, and improve.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch px-8 max-w-6xl mx-auto">
        <div className="hover-3d">
          <div className="card border-2 border-sky-500">
            <div className="card-body">
              <h2 className="text-h3 text-sky-500">Front-end Development</h2>
              <p className="mb-4 text-body">Front-end development across both legacy and modern approaches, from SCSS with BEM to CSS Grid and container queries, with a focus on building structured and maintainable interfaces. This portfolio is built with React, following a component-based development approach to support scalability and consistency.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline border-sky-500">HTML</div>
                <div className="badge badge-outline border-sky-500">CSS / SCSS</div>
                <div className="badge badge-outline border-sky-500">JavaScript</div>
                <div className="badge badge-outline border-sky-500">React</div>
                <div className="badge badge-outline border-sky-500">Next.js</div>
                <div className="badge badge-outline border-sky-500">jQuery</div>
              </div>
            </div>
          </div>
          {eightEmptyDivs}
        </div>
        <div className="hover-3d">
          <div className="card border-2 border-sky-500">
            <div className="card-body">
              <h2 className="text-h3 text-amber-500">UI & Styling</h2>
              <p className="mb-4 text-body">Skilled in working with modern UI frameworks to build consistent and efficient interfaces without relying solely on custom CSS. Frequently using Tailwind CSS and Material UI, especially in React-based projects, to streamline development and maintain design consistency.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline border-sky-500">Tailwind CSS</div>
                <div className="badge badge-outline border-sky-500">Bootstrap</div>
                <div className="badge badge-outline border-sky-500">Material UI</div>
                <div className="badge badge-outline border-sky-500">DaisyUI</div>
              </div>
            </div>
          </div>
          {eightEmptyDivs}
        </div>
        <div className="hover-3d">
          <div className="card border-2 border-sky-500">
            <div className="card-body">
              <h2 className="text-h3 text-teal-500">CMS & E-commerce</h2>
              <p className="mb-4 text-body">Experienced in WordPress development across Classic, Hybrid, and Full Site Editing approaches, including working with plugins such as WooCommerce and Advanced Custom Fields. Also experienced in Shopify development through client projects, customizing themes using the Theme Editor and Liquid.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline border-sky-500">WordPress</div>
                <div className="badge badge-outline border-sky-500">WooCommerce</div>
                <div className="badge badge-outline border-sky-500">Shopify</div>
                <div className="badge badge-outline border-sky-500">Joomla</div>
              </div>
            </div>
          </div>
          {eightEmptyDivs}
        </div>
        <div className="hover-3d">
          <div className="card border-2 border-sky-500">
            <div className="card-body">
              <h2 className="text-h3 text-indigo-500">Back-End & Database</h2>
              <p className="mb-4 text-body">Back-end and database development involving CRUD application development with PHP and MySQL, and integrating front-end applications with Node.js (Express) back-end servers through REST APIs.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline border-sky-500">PHP</div>
                <div className="badge badge-outline border-sky-500">MySQL</div>
                <div className="badge badge-outline border-sky-500">Node.js</div>
              </div>
            </div>
          </div>
          {eightEmptyDivs}
        </div>
        <div className="hover-3d">
          <div className="card border-2 border-sky-500">
            <div className="card-body">
              <h2 className="text-h3 text-fuchsia-500">Tools & Workflow</h2>
              <p className="mb-4 text-body">Strong understanding of SEO, including keyword research and content optimization, with proven results in improving search rankings. Experienced in using tools such as Google Search Console and Google Analytics, as well as collaborating in team environments using Git for version control.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline border-sky-500">Git</div>
                <div className="badge badge-outline border-sky-500">npm</div>
                <div className="badge badge-outline border-sky-500">Docker</div>
                <div className="badge badge-outline border-sky-500">CLI</div>
                <div className="badge badge-outline border-sky-500">SEO</div>
              </div>
            </div>
          </div>
          {eightEmptyDivs}
        </div>
        <div className="hover-3d">
          <div className="card border-2 border-sky-500">
            <div className="card-body">
              <h2 className="text-h3 text-pink-500">Design & Creative</h2>
              <p className="mb-4 text-body">Approaching design based on principles rather than intuition, applying structured systems such as color schemes, typography, and grid-based spacing to create visually consistent and well-balanced user interfaces.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline border-sky-500">Figma</div>
                <div className="badge badge-outline border-sky-500">Photoshop</div>
                <div className="badge badge-outline border-sky-500">Illustrator</div>
                <div className="badge badge-outline border-sky-500">Canva</div>
              </div>
            </div>
          </div>
          {eightEmptyDivs}
        </div>
      </div>
    </section>
  )

  
}

export default Skill