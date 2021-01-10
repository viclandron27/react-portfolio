import React from "react";
// import project from "../../../assets/movie-buff.png";

function Project() {
  const projects = [
      {
          title: "Movie Buff",
          image: "movie-buff.png",
          app: "https://blooming-river-38071.herokuapp.com/",
          github: "https://github.com/DCampos07/movie-buff"
      },
      {
        title: "Tech Blog",
        image: "tech-blog.png",
        app: "https://tech-blog123.herokuapp.com/",
        github: "https://github.com/viclandron27/tech-blog"
    },
    {
        title: "Note Taker",
        image: "note-taker.png",
        app:"https://protected-sierra-40157.herokuapp.com/",
        github: "https://protected-sierra-40157.herokuapp.com/"
    },
    {
        title: "Weather Dashboard",
        image: "weather-dashboard.png",
        app: "https://viclandron27.github.io/weather-dashboard/",
        github: "https://github.com/viclandron27/weather-dashboard"
    },
    {
        title: "Scheduler",
        image: "scheduler.png",
        app: "https://viclandron27.github.io/super-disco/",
        github: "https://github.com/viclandron27/super-disco"
    },
    {
        title: "Code Quiz",
        image: "coding-quiz.png",
        app: "https://viclandron27.github.io/code-quiz/",
        github: "https://github.com/viclandron27/code-quiz"
    },
  ];
  return (
    <div>
      <h1>Portolio</h1>
      <div className="portfolio">
      {projects.map(project => (
          <div className="projects">
              <a className="project-titles" href={`"${project.app}"`}>{project.title}</a>
              <img src={require(`../../../assets/projects/${project.image}`).default} 
                className="my-2"
                style={{ width: "100%" }}
                alt={`"${project.title}"`}>
            </img>
            <a className="project-titles" href={`"${project.github}"`}>
                Github Repository
            </a>
          </div>
      ))}
      </div>
        {/* <div className="projects">
            <a
            className="project-titles"
            href="https://blooming-river-38071.herokuapp.com/"
            >
            Movie Buff
            </a>

            <img
            src={project}
            className="my-2"
            style={{ width: "30%" }}
            alt="movie-buff"
            ></img>
            <a className="project-titles"href="https://github.com/DCampos07/movie-buff">Github Repository</a>
        </div> */}
    </div>
  );
}

export default Project;
