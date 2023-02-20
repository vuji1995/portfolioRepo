import Barbershop from "../assets/ritualBarbershopImage.png";
import FeedbackApp from "../assets/feedbackApp2.png";
import FormApp from "../assets/5-step-from.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      subtitle:
        "A React and Firebase-powered barbershop web app for a modern grooming experience",
      title: "Ritual Barbershop",
      img: Barbershop,
      color: "#7e7e7e",
      page: `https://frizerski-salon-esl4.vercel.app`,
    },
    {
      id: 2,
      subtitle: "5 step form verification made with Tailwind CSS",
      title: "Form verification",
      color: "#7e7e7e",
      img: FormApp,
      page: `https://5-step-form.vercel.app/`,
    },
    {
      id: 3,
      subtitle: "Simple feedback app on JSON server",
      title: "Feedback App",
      color: "#7e7e7e",
      img: FeedbackApp,
      page: `https://feedback-app-flame.vercel.app/`,
    },
  ];

  const openProjectsPage = (link) => {
    window.open(`${link}`, "_blank");
  };

  return (
    <div className="componentDiv projects">
      <div className="parentControlDiv">
        <div className="projectContainer">
          {projects.map((project) => (
            <div
              className="case"
              key={project.id}
              style={{ backgroundColor: project.color }}
              onClick={() => openProjectsPage(project.page)}
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
    </div>
  );
};

export default Projects;
