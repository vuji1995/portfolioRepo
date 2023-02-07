import { useContext } from "react";
import Context from "../Context/Context";
import { motion } from "framer-motion";

const NavigationMenu = () => {
  const { openMenu, showProjectPage, showAboutPage, showContactPage } =
    useContext(Context);

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
