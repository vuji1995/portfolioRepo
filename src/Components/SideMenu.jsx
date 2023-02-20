import { useContext, useState, useEffect } from "react";
import Context from "../Context/Context";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const {
    showSideMenu,
    setShowSideMenu,
    showProjectPage,
    showAboutPage,
    showContactPage,
    showHomePage,
    goToSocialMedia,
  } = useContext(Context);

  const [MenuWidth, setMenuWidth] = useState(
    window.innerWidth <= 920 ? "45vw" : "36vw"
  );

  useEffect(() => {
    function handleWindowResize() {
      setMenuWidth(window.innerWidth <= 920 ? "50vw" : "36vw");
    }
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      {showSideMenu === true ? (
        <div className="sideMenuDiv">
          <motion.div
            className="sideMenu"
            initial={{ width: 0, borderRadius: "60%" }}
            animate={{ width: `${MenuWidth}`, borderRadius: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <div className="sideMenuContainer">
              <motion.p
                className="navigationP"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
              >
                NAVIGATION
              </motion.p>
              <motion.div
                className="pUnderline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
              ></motion.div>
              <motion.div
                className="sideMenuLinkContainer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 50,
                  staggerChildren: 0.1,
                }}
              >
                <span className="sideMenuLink" onClick={showHomePage}>
                  <div className="dot"></div>
                  Home
                </span>

                <span className="sideMenuLink" onClick={showProjectPage}>
                  <div className="dot"></div>
                  Projects
                </span>

                <span className="sideMenuLink" onClick={showAboutPage}>
                  <div className="dot"></div>
                  About
                </span>

                <span className="sideMenuLink" onClick={showContactPage}>
                  <div className="dot"></div>
                  Contact
                </span>
              </motion.div>
              <div className="social side">
                <motion.p
                  className="navigationP"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
                >
                  SOCIALS
                </motion.p>
                <div className="narrow">
                  <motion.p
                    className="socialP"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
                    onClick={goToSocialMedia}
                  >
                    Facebook
                  </motion.p>
                  <motion.p
                    className="socialP"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
                    onClick={goToSocialMedia}
                  >
                    Instagram
                  </motion.p>
                  <motion.p
                    className="socialP"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
                    onClick={goToSocialMedia}
                  >
                    Twitter
                  </motion.p>
                </div>
              </div>
            </div>
            <button
              className="sideMenuButton"
              onClick={() => {
                setShowSideMenu(!showSideMenu);
              }}
            >
              <div
                className={`buttonLines ${
                  showSideMenu === true ? "rotateLines" : ""
                }`}
              ></div>
              <div
                className={`buttonLines ${
                  showSideMenu === true ? "rotateLines" : ""
                }`}
              ></div>
            </button>
          </motion.div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SideMenu;
