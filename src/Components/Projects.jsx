import { motion } from "framer-motion";
import Barbershop from "../assets/ritualBarbershopImage.png";
import FeedbackApp from "../assets/feebackApp.png";
import Project2 from "../assets/project2.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      subtitle: "Web app for reserving barbershop appointments",
      title: "Ritual Barbershop",
      img: Barbershop,
      color: "#7e7e7e",
    },
    {
      id: 2,
      subtitle: "Figma design for furniture company",
      title: "DSM trade",
      color: "#7e7e7e",
      img: Project2,
    },
    {
      id: 3,
      subtitle: "Feedback App",
      title: "Simple feedback app on JSON server",
      color: "#7e7e7e",
      img: FeedbackApp,
    },
  ];

  return (
    <div className="componentDiv projects">
      <div className="projectContainer">
        {projects.map((project) => (
          <div
            className="case"
            key={project.id}
            style={{ backgroundColor: project.color }}
          >
            <div className="case-image">
              <img className="scale-img" src={project.img} />
            </div>
            <div className="overlay"></div>
            <div className="caseDetails">
              <h2>{project.title}</h2>
              <span>{project.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
