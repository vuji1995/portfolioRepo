import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      subtitle: "Curology",
      title: "A costum formula",
      img: "curology-min",
    },
    {
      id: 2,
      subtitle: "Curology",
      title: "A costum formula",
      img: "yourspace-min",
    },
    {
      id: 3,
      subtitle: "Curology",
      title: "A costum formula",
      img: "lumin-min",
    },
  ];

  return (
    <div className="componentDiv projects">
      <div className="projectContainer">
        {projects.map((project) => (
          <div className="case" key={project.id}>
            <div className="case-image">
              <img src={require(`../assets/${project.img}.png`)} />
            </div>
            <div className="overlay"></div>
            <div className="caseDetails">
              <span>{project.subtitle}</span>
              <h2>{project.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
