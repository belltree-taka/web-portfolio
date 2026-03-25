const Skill = () => {

  const eightEmptyDivs = Array.from({ length: 8 }, (_, i) => (
    <div key={i}></div>
  ));

  return (
    <section id="skills" className="section-y-spacing bg-sky-950 text-sky-100">
      <div className="px-4 md:flex md:flex-col md:items-center">
        <h2 className="text-h2 uppercase border-l-4 border-l-sky-400 ps-3">Skills</h2>
        <p className="py-6 max-w-prose md:text-center mb-4 md:mb-8 lg:mb-12">The tools and technologies I use to solve complex problems and create meaningful, user-focused web experiences, with an emphasis on usability, performance, and thoughtful implementation.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch px-8 max-w-6xl mx-auto">
        <div className="hover-3d">
          <div className="card border-2 border-blue-500">
            <div className="card-body">
              <h2 className="text-h3 text-blue-500">Front-End Development</h2>
              <p className="mb-4">Experienced in both legacy and modern front-end development, from SCSS with BEM methodology and classic layout techniques to modern approaches such as CSS Grid and container queries. This portfolio itself is built using React, reflecting a component-based development approach.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline border-blue-500">HTML</div>
                <div className="badge badge-outline border-blue-500">CSS / SCSS</div>
                <div className="badge badge-outline border-blue-500">JavaScript</div>
                <div className="badge badge-outline border-blue-500">React</div>
                <div className="badge badge-outline border-blue-500">Next.js</div>
                <div className="badge badge-outline border-blue-500">jQuery</div>
              </div>
            </div>
          </div>
          {eightEmptyDivs}
        </div>
        <div className="hover-3d">
          <div className="card border-2 border-purple-500">
            <div className="card-body">
              <h2 className="text-h3 text-purple-500">UI & Styling</h2>
              <p className="mb-4">Skilled in working with modern UI frameworks to build consistent and efficient interfaces without relying solely on custom CSS. Frequently using Tailwind CSS and Material UI, especially in React-based projects, to streamline development and maintain design consistency.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline border-purple-500">Tailwind CSS</div>
                <div className="badge badge-outline border-purple-500">Bootstrap</div>
                <div className="badge badge-outline border-purple-500">Material UI</div>
                <div className="badge badge-outline border-purple-500">DaisyUI</div>
              </div>
            </div>
          </div>
          {eightEmptyDivs}
        </div>
        <div className="hover-3d">
          <div className="card border-2 border-green-500">
            <div className="card-body">
              <h2 className="text-h3 text-green-500">CMS & E-commerce</h2>
              <p className="mb-4">Experienced in WordPress development across Classic, Hybrid, and Full Site Editing approaches, including working with plugins such as WooCommerce and Advanced Custom Fields. Also experienced in Shopify development through client projects, customizing themes using the Theme Editor and Liquid.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline border-green-500">WordPress</div>
                <div className="badge badge-outline border-green-500">WooCommerce</div>
                <div className="badge badge-outline border-green-500">Shopify</div>
                <div className="badge badge-outline border-green-500">Joomla</div>
              </div>
            </div>
          </div>
          {eightEmptyDivs}
        </div>
        <div className="hover-3d">
          <div className="card border-2 border-red-500">
            <div className="card-body">
              <h2 className="text-h3 text-red-500">Backend & Database</h2>
              <p className="mb-4">Experience in building CRUD applications using PHP and MySQL, along with a solid understanding of full-stack architecture by connecting front-end applications with Node.js (Express) back-end servers through REST APIs.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline border-red-500">PHP</div>
                <div className="badge badge-outline border-red-500">MySQL</div>
                <div className="badge badge-outline border-red-500">Node.js</div>
              </div>
            </div>
          </div>
          {eightEmptyDivs}
        </div>
        <div className="hover-3d">
          <div className="card border-2 border-yellow-500">
            <div className="card-body">
              <h2 className="text-h3 text-yellow-500">Tools & Workflow</h2>
              <p className="mb-4">Strong understanding of SEO, including keyword research and content optimization, with proven results in improving search rankings. Experienced in using tools such as Google Search Console and Google Analytics, as well as collaborating in team environments using Git for version control.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline border-yellow-500">Git</div>
                <div className="badge badge-outline border-yellow-500">npm</div>
                <div className="badge badge-outline border-yellow-500">Docker</div>
                <div className="badge badge-outline border-yellow-500">CLI</div>
                <div className="badge badge-outline border-yellow-500">SEO</div>
              </div>
            </div>
          </div>
          {eightEmptyDivs}
        </div>
        <div className="hover-3d">
          <div className="card border-2 border-pink-500">
            <div className="card-body">
              <h2 className="text-h3 text-pink-500">Design & Creative</h2>
              <p className="mb-4">Approaching design based on principles rather than intuition, applying structured systems such as color schemes, typography, and grid-based spacing to create visually consistent and well-balanced user interfaces.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline border-pink-500">Figma</div>
                <div className="badge badge-outline border-pink-500">Photoshop</div>
                <div className="badge badge-outline border-pink-500">Illustrator</div>
                <div className="badge badge-outline border-pink-500">Canva</div>
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