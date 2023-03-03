import { useState, useContext } from "react";
import Context from "../Context/Context";
import Barbershop from "../assets/ritualBarbershopImage.png";
import FeedbackApp from "../assets/feedbackApp2.png";
import FormApp from "../assets/5-step-from.png";
import SideMenuButton from "../Components/SideMenuButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectsPage = () => {
  const { projectsPageOpened, setShowSideMenu, showSideMenu } =
    useContext(Context);
  const [projectNumber, setProjectNumber] = useState(1);
  const [projectData, setProjectData] = useState([
    {
      name: "Ritual Barbershop ",
      info: "The Ritual Barbershop app is a user-friendly platform that allows customers to book appointments with their preferred barber at a selected time and date. With a sleek and intuitive interface, the app streamlines the booking process, saving time and effort. The app uses Firebase as its backend, ensuring secure storage and fast retrieval of data. Whether you're a busy professional or simply looking for a convenient and efficient way to book your next barber appointment, the Barbershop App is the solution you've been looking for.",
      color: `#ab0008`,
      image: Barbershop,
      projectNumber: 1,
      page: `https://frizerski-salon-esl4.vercel.app`,
      githubLink: `https://github.com/vuji1995/frizerski-salon`,
    },
    {
      name: "Form verification",
      info: "In this project, I have developed a user-friendly 5 step form verification process that emphasizes the use of Tailwind CSS framework. The focus on using Tailwind ensures a visually appealing and consistent design throughout the form, making it easy for users to navigate and complete each step. The form verification process is efficient, with clear and concise instructions for each step, ensuring that users provide accurate information. Overall, the project showcases my skills in designing user-friendly forms and my proficiency in using Tailwind CSS, making it a valuable addition to portfolio.",
      color: `#483eff`,
      image: FormApp,
      projectNumber: 2,
      page: `https://5-step-form.vercel.app/`,
      githubLink: `https://github.com/vuji1995/5-Step-Form`,
    },
    {
      name: "Feedback App",
      info: "The Feedback App is a platform designed to gather and share customer opinions and experiences. Users can easily add their own review, including a rating and comment, and view other reviews as well. With the ability to edit their review, users have complete control over their feedback. The app's user-friendly interface and seamless functionality make it easy for customers to share their thoughts and opinions, while providing valuable insights for businesses. Whether you're looking to improve your customer experience or gather feedback for your next project, the Feedback App is the solution you need. This app requires starting json server!",
      color: `#202142`,
      image: FeedbackApp,
      projectNumber: 3,
      page: `https://feedback-app-flame.vercel.app/`,
      githubLink: `https://github.com/vuji1995/feedbackApp`,
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

  const openGithubLink = (link) => {
    window.open(`${link}`, "_blank");
  };

  const visitPage = (link) => {
    window.open(`${link}`, "_blank");
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
                      <div className="projectLinks">
                        <button
                          className="visitPage"
                          style={{
                            color: project.color,
                            border: `1px solid ${project.color}`,
                          }}
                          onClick={() => visitPage(project.page)}
                        >
                          Visit page
                        </button>
                        <GitHubIcon
                          style={{ color: project.color }}
                          className="githubProject"
                          onClick={() => openGithubLink(project.githubLink)}
                        />
                      </div>
                    </div>
                    <div className="greyLine"></div>
                    <div className="projectInfo">
                      <p className="projectDetails">{project.info}</p>
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
