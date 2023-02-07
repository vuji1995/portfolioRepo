import Context from "../Context/Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const Header2 = () => {
  const {
    openMenu,
    setOpenMenu,
    navRotateClass,
    setNavRotateClass,
    removeHeader,
  } = useContext(Context);

  const [animateHeaderOnce, setAnimateHeaderOnce] = useState(true);

  const animateOnce = () => {
    setAnimateHeaderOnce(false);
  };

  return (
    <>
      {removeHeader !== true ? (
        <motion.div
          initial={animateHeaderOnce ? { y: -100 } : undefined}
          animate={{ y: 0 }}
          transition={{
            delay: 4.5,
            type: "spring",
            stiffness: 50,
            duration: 2,
          }}
          onAnimationComplete={animateOnce}
          className={`headerContainer ${openMenu ? "fixed" : ""}`}
        >
          <div className="header90posto">
            <div className="logo">AV31.</div>
            {openMenu !== true ? (
              <div
                className="nav"
                onClick={() => {
                  setOpenMenu(!openMenu);
                  setNavRotateClass(!navRotateClass);
                }}
              >
                <div className="navLine"></div>
                <div className="navLine"></div>
              </div>
            ) : (
              <div
                className={`nav`}
                onClick={() => {
                  setOpenMenu(!openMenu);
                  setNavRotateClass(!navRotateClass);
                }}
              >
                <div
                  className={`navLine ${
                    navRotateClass === true && openMenu === true
                      ? "rotateLinesNav"
                      : ""
                  }`}
                ></div>
                <div
                  className={`navLine ${
                    navRotateClass === true && openMenu === true
                      ? "rotateLinesNav"
                      : ""
                  }`}
                ></div>
              </div>
            )}
          </div>
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header2;
