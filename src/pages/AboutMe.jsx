import Context from "../Context/Context";
import { useContext } from "react";

const AboutMe = () => {
  const { aboutOpened, contactOpened, setContactOpened } = useContext(Context);

  return (
    <>
      {aboutOpened ? (
        <div className="componentDiv">
          <div className="aboutContainer">
            <div className="email">about me</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AboutMe;
