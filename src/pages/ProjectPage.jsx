import { useState, useContext } from "react";
import Context from "../Context/Context";
import Barbershop from "../assets/ritualBarbershopImage.png";
import FeedbackApp from "../assets/feebackApp.png";
import ProjectImage3 from "../assets/project3.png";
import SideMenuButton from "../Components/SideMenuButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ProjectsPage = () => {
  const { projectsPageOpened, setShowSideMenu, showSideMenu } =
    useContext(Context);
  const [projectNumber, setProjectNumber] = useState(1);
  const [projectData, setProjectData] = useState([
    {
      name: "Barbershop App",
      info: "Barbershop application for reserving appointments",
      year: 2023,
      image: Barbershop,
      projectNumber: 1,
      technology: "React",
    },
    {
      name: "AVVR",
      info: "Branding & Website",
      year: 2022,
      image: ProjectImage3,
      projectNumber: 2,
      technology: "react",
    },
    {
      name: "Feedback App",
      info: "Simple review app with JSON server",
      year: 2022,
      image: FeedbackApp,
      projectNumber: 3,
      technology: "React",
    },
  ]);

  const nextProject = () => {
    setProjectNumber((prevState) => {
      if (prevState >= 3) {
        return 1;
      } else {
        return prevState + 1;
      }
    });
  };

  const previousProject = () => {
    setProjectNumber((prevState) => {
      if (prevState <= 1) {
        return 3;
      } else {
        return prevState - 1;
      }
    });
  };

  return (
    <>
      {projectsPageOpened ? (
        <div className="componentDiv">
          <div className="projectsPageContainer">
            {projectData
              .filter((project) => project.projectNumber === projectNumber)
              .map((project) => (
                <div className="projectDisplay">
                  <div className="previousProject">
                    <ArrowBackIcon
                      className="previousProjectButton"
                      onClick={previousProject}
                    />
                  </div>
                  <div className="singleProject">
                    <div className="projectImageBox">
                      <img src={project.image} alt="" />
                    </div>
                    <div className="projectName">
                      <p>{project.name}</p>
                      <p className="technology">{project.technology}</p>
                    </div>
                    <div className="greyLine"></div>
                    <div className="projectInfo">
                      <p className="projectDetails">{project.info}</p>
                      <span className="projectDate">{project.year}</span>
                    </div>
                  </div>
                  <div className="nextProject" onClick={nextProject}>
                    <ArrowForwardIcon className="nextProjectButton" />
                  </div>
                </div>
              ))}
            <SideMenuButton />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProjectsPage;
