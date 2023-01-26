import { useContext, useEffect } from "react";
import Context from "../Context/Context";
import { motion, useAnimation } from "framer-motion";

const TransitionPage = () => {
  const { transitionPageOpened, setTranisitionPageOpened, transitionPageText } =
    useContext(Context);

  const controls = useAnimation();

  useEffect(() => {
    if (transitionPageOpened) {
      controls.start("enter");
      setTimeout(() => {
        controls.start("exit");
      }, 1000);
    }
  }, [transitionPageOpened, controls]);

  return (
    <>
      {transitionPageOpened ? (
        <div className="componentDiv">
          <motion.div
            className="transisitonPageContainer"
            animate={controls}
            variants={{
              enter: {
                y: 0,
                borderRadius: 0,
                transition: { duration: 0.5 },
              },
              exit: {
                y: "-100%",
                borderRadius: "20%",
                transition: { duration: 0.5 },
              },
            }}
            initial={{ y: "100%", borderRadius: 0 }}
            onAnimationComplete={() =>
              setTimeout(() => {
                setTranisitionPageOpened(false);
              }, 1000)
            }
          >
            <motion.h2
              className="transitionPageHeading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
              }}
            >
              {transitionPageText}
            </motion.h2>
          </motion.div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default TransitionPage;
