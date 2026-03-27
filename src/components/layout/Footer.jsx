const Footer = ({linkClickHandler}) => {

  return (
    <footer className="bg-sky-900 flex flex-col gap-8 section-y-spacing">
      <a className="self-center" href="/" aria-label="Back to top page">
        <h2 className="flex gap-2">
          <svg className="min-w-16 w-16" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322.6 269.4">
            <title>Takaharu Suzuki Logo</title>
            <path d="M0 5v30.5a5 5 0 0 0 3.5 4.8l51.9 17.1a5 5 0 0 1 3.5 4.8v158.6a5 5 0 0 0 2.9 4.6L86.4 237a5 5 0 0 0 7.3-4.6v-155a5 5 0 0 1 6.6-4.8l57.5 18.6a5 5 0 0 1 3.5 4.8v81a5 5 0 0 0 7 4.8l110-41.1a5 5 0 0 1 6.8 4.8v28.7c0 2-1.3 4-3.2 4.7l-117 46.4a5 5 0 0 0-3.2 4.8v34.3a5 5 0 0 0 7.1 4.6l150.9-67.9a5 5 0 0 0 3-4.6V92a5 5 0 0 0-6.7-4.9l-107.5 34.4a5 5 0 0 1-6.6-4.8v-33a5 5 0 0 1 3.5-5L319.2 42a5 5 0 0 0 3.5-4.9V7a5 5 0 0 0-6.7-5L163 51a5 5 0 0 1-3.2 0L6.7.2A5 5 0 0 0 0 5" fill="#e0f2fe"/>
          </svg>
          <div>
            <p className="text-sky-100 text-footer-site-title whitespace-nowrap -mb-2">Takaharu Suzuki</p>
            <p className="text-body-bold text-sky-400">Front-end Developer</p>
          </div>
        </h2>
      </a>
      <div className="flex justify-center gap-4">
        <a href="https://github.com/belltree-taka" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile in a new tab">
          <svg className="w-12" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 27"><g clipPath="url(#a)"><mask id="b" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="27">
            <title>Github Icon</title>
            <path d="M28 0H0v27h28z" fill="#fff"/></mask><g mask="url(#b)"><path d="M11.84 19.515c-3.61-.431-6.153-2.988-6.153-6.299 0-1.346.493-2.8 1.313-3.768-.355-.889-.3-2.773.11-3.553 1.093-.135 2.57.43 3.445 1.211 1.039-.323 2.133-.485 3.472-.485 1.34 0 2.434.162 3.418.458.848-.754 2.352-1.319 3.446-1.184.382.726.437 2.61.082 3.526.875 1.023 1.34 2.395 1.34 3.795 0 3.31-2.543 5.814-6.207 6.272.93.592 1.558 1.884 1.558 3.364v2.8c0 .807.684 1.264 1.504.941C24.118 24.737 28 19.865 28 13.836 28 6.218 21.71 0 13.973 0 6.234 0 0 6.218 0 13.835c0 5.976 3.855 10.928 9.05 12.785.74.27 1.45-.215 1.45-.942v-2.153a3.6 3.6 0 0 1-1.313.27c-1.804 0-2.87-.97-3.636-2.773-.301-.727-.63-1.158-1.258-1.238-.328-.027-.438-.162-.438-.323 0-.323.547-.566 1.094-.566.793 0 1.477.485 2.188 1.48.547.781 1.12 1.131 1.804 1.131s1.121-.242 1.75-.861c.465-.458.82-.861 1.149-1.13" fill="#e0f2fe"/></g></g><defs><clipPath id="a">
            <path fill="#fff" d="M0 0h28v27H0z"/></clipPath></defs>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/takaharusuzuki" target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile in a new tab">
          <svg className="w-12" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
            <title>LinkedIn Icon</title>
            <path d="M14 0a14 14 0 1 1 0 28 14 14 0 0 1 0-28" fill="#0e76a8"/>
            <path d="M7.89 19.24h2.62V10.5H7.9zM18.1 10.2c-1.27 0-2.4.46-3.22 1.49v-1.22h-2.63v8.77h2.63V14.5c0-1 .92-1.98 2.07-1.98s1.43.97 1.43 1.95v4.77h2.63v-4.96c0-3.45-1.63-4.08-2.9-4.08M9.2 9.62A1.31 1.31 0 1 0 9.2 7a1.31 1.31 0 0 0 0 2.62" fill="#fff"/>
          </svg>
        </a>
      </div>
      <nav className="mx-auto">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <li><a className="text-sky-100" href="#about" onClick={(e) => linkClickHandler(e, "#about")}>About</a></li>
            <li><a className="text-sky-100" href="#projects" onClick={(e) => linkClickHandler(e, "#projects")}>Projects</a></li>
            <li><a className="text-sky-100" href="#skills" onClick={(e) => linkClickHandler(e, "#skills")}>Skills</a></li>
            <li><a className="text-sky-100" href="#skills" onClick={(e) => linkClickHandler(e, "#beyond-the-screen")}>Beyond The Screen</a></li>
            <li><a className="text-sky-100" href="#contact" onClick={(e) => linkClickHandler(e, "#contact")}>Contact</a></li>
        </ul>
      </nav>
      <p className="text-ui text-center">© {new Date().getFullYear()} Takaharu Suzuki. All rights reserved.</p>
    </footer>
  )
}

export default Footer  