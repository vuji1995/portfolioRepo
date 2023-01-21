import { useContext, useState } from "react";
import Context from "../Context/Context";
import { motion } from "framer-motion";
import Header2 from "./Header2";

const NavigationMenu = () => {
  const { openMenu, setOpenMenu } = useContext(Context);
  console.log(`Navigation openMenu: ${openMenu}`);

  return (
    <>
      {openMenu ? (
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: openMenu ? 0 : -50 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className="navigation"
        ></motion.div>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavigationMenu;
