import { useEffect, useState, useContext } from "react";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import Header2 from "./Header2";
import Context from "../Context/Context";
import LoadingDots from "../Components/LoadingDots";
import CV from "../assets/CV.pdf";

const Banner = () => {
  //context data
  const { openMenu, setOpenMenu } = useContext(Context);

  return (
    <div className="componentDiv">
      <div className="bannerContainer">
        <Header2 />
        <div className="bannerText">
          <div className="bannerMessage">
            <p>Hello, I am Antonio</p>
            <p>
              {`junior frontend developer`}
              <LoadingDots />
            </p>
          </div>
          <div className="bannerMoreAboutUs">
            <p>Download CV</p>
            <a href={CV} download="CV.pdf" className="aDownloadCV">
              <ArrowRight className="arrowRightHover" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
