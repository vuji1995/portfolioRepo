import { useContext, useState, useEffect } from "react";
import Context from "../Context/Context";
import { motion } from "framer-motion";

const NavigationMenu = () => {
  const {
    openMenu,
    setOpenMenu,
    contactOpened,
    setContactOpened,
    aboutOpened,
    setAboutOpened,
    transitionPageOpened,
    setTranisitionPageOpened,
    projectsPageOpened,
    setProjectsPageOpened,
    setTransitionPageText,
    transitionPageText,
  } = useContext(Context);

  console.log(transitionPageText);

  const showContactPage = (e) => {
    setTransitionPageText(e.target.innerText);
    setTranisitionPageOpened(true);
    setOpenMenu(false);
    setTimeout(() => {
      setAboutOpened(false);
      setProjectsPageOpened(false);
      setContactOpened(true);
    }, 1000);
  };

  const showAboutPage = (e) => {
    setTransitionPageText(e.target.innerText);
    setTranisitionPageOpened(true);
    setOpenMenu(false);
    setTimeout(() => {
      setContactOpened(false);
      setProjectsPageOpened(false);
      setAboutOpened(true);
    }, 1000);
  };

  const showProjectPage = (e) => {
    setTransitionPageText(e.target.innerText);
    setTranisitionPageOpened(true);
    setOpenMenu(false);
    setTimeout(() => {
      setAboutOpened(false);
      setContactOpened(false);
      setProjectsPageOpened(true);
    }, 1000);
  };

  return (
    <>
      {openMenu ? (
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: openMenu ? 0 : -50 }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 140,
          }}
          className="navigation"
        >
          <div className="navigationMenuContainer">
            <ul className="menuUl">
              <p
                className="liMenu underline-text aboutButton"
                onClick={showAboutPage}
              >
                About me
              </p>
              <p
                className="liMenu underline-text contactButton"
                onClick={showContactPage}
              >
                Contact
              </p>
              <p
                className="liMenu underline-text projectsButton"
                onClick={showProjectPage}
              >
                Projects
              </p>
            </ul>
          </div>
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavigationMenu;
