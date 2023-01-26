import { useEffect, useState, useContext } from "react";
import Context from "../Context/Context";
import ProjectImage1 from "../assets/advocate.png";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  const { projectsPageOpened } = useContext(Context);

  return (
    <>
      {projectsPageOpened ? (
        <div className="componentDiv">
          <div className="projectsPageContainer">
            <div className="singleProject">
              <div className="projectImageBox">
                <img src={ProjectImage1} alt="" />
              </div>
              <div className="projectName">AVVR</div>
              <div className="greyLine"></div>
              <div className="projectInfo">
                <p className="projectDetails">Branding & Website</p>
                <span className="projectDate">2022</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProjectsPage;
