import Context from "../Context/Context";
import { useContext } from "react";
import { ReactComponent as ArrowUp } from "../assets/arrow-up.svg";
import { motion, useAnimation } from "framer-motion";

const Header2 = () => {
  const { openMenu, setOpenMenu } = useContext(Context);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 4.5, type: "spring", stiffness: 50 }}
      className={`headerContainer ${openMenu ? "fixed" : ""}`}
    >
      <div className="header90posto">
        <div className="logo">AV31.</div>
        {openMenu !== true ? (
          <div className="nav" onClick={() => setOpenMenu(!openMenu)}>
            <ArrowUp className="arrowDownHover" />
          </div>
        ) : (
          <div className="nav" onClick={() => setOpenMenu(!openMenu)}>
            <ArrowUp className="arrowUpHover" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Header2;
