import { motion } from "framer-motion";

const Timeline = () => {
  const states = {
    hidden: {
      x: -500,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.2,
        bounce: 0.3,
      },
    },
  };

  const statesRight = {
    hidden: {
      x: 500,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.2,
        bounce: 0.3,
      },
    },
  };

  return (
    <div className="componentDiv">
      <div className="timelineContainer">
        <div className="timelineItem margintop">
          <motion.div
            className="timelineLeft"
            initial="hidden"
            whileInView="show"
            variants={states}
          >
            <p className="timelineDate">January 1995</p>
          </motion.div>
          <div className="timelineCenter"></div>
          <motion.div
            className="timelineRight"
            initial="hidden"
            whileInView="show"
            variants={statesRight}
          >
            <p className="timelineContent">Born in Germany, Mainz</p>
          </motion.div>
        </div>
        <div className="timelineItem margintop">
          <motion.div
            className="timelineLeft"
            initial="hidden"
            whileInView="show"
            variants={states}
          >
            <p className="timelineDate">May 2014</p>
          </motion.div>
          <div className="timelineCenter"></div>
          <motion.div
            className="timelineRight"
            initial="hidden"
            whileInView="show"
            variants={statesRight}
          >
            <p className="timelineContent">
              Finished middle school in Tehnička škola Split, Computer
              technician for mechanical engineering
            </p>
          </motion.div>
        </div>
        <div className="timelineItem margintop">
          <motion.div
            className="timelineLeft"
            initial="hidden"
            whileInView="show"
            variants={states}
          >
            <p className="timelineDate">November 2016</p>
          </motion.div>
          <div className="timelineCenter"></div>
          <motion.div
            className="timelineRight"
            initial="hidden"
            whileInView="show"
            variants={statesRight}
          >
            <p className="timelineContent">
              Started studying Electronics in University department of
              proffesional studies in Split
            </p>
          </motion.div>
        </div>
        <div className="timelineItem margintop">
          <motion.div
            className="timelineLeft"
            initial="hidden"
            whileInView="show"
            variants={states}
          >
            <p className="timelineDate">Summer 2022</p>
          </motion.div>
          <div className="timelineCenter"></div>
          <motion.div
            className="timelineRight"
            initial="hidden"
            whileInView="show"
            variants={statesRight}
          >
            <p className="timelineContent">Started learning HTML, CSS & JS</p>
          </motion.div>
        </div>
        <div className="timelineItem margintop">
          <motion.div
            className="timelineLeft"
            initial="hidden"
            whileInView="show"
            variants={states}
          >
            <p className="timelineDate">Jannuary 2023</p>
          </motion.div>
          <div className="timelineCenter"></div>
          <motion.div
            className="timelineRight"
            initial="hidden"
            whileInView="show"
            variants={statesRight}
          >
            <p className="timelineContent">
              Currently working on React Barbershop project
            </p>
          </motion.div>
        </div>
        <div className="timelineItem margintop">
          <motion.div
            className="timelineLeft"
            initial="hidden"
            whileInView="show"
            variants={states}
          >
            <p className="timelineDate">February 2023</p>
          </motion.div>
          <div className="timelineCenter"></div>
          <motion.div
            className="timelineRight"
            initial="hidden"
            whileInView="show"
            variants={statesRight}
          >
            <p className="timelineContent">
              I will finish studying and become mag.ing. Electronics
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
