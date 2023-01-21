import { useEffect, useState, useContext } from "react";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";
import Header2 from "./Header2";
import Context from "../Context/Context";

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
            <p>junior fronted developer.</p>
          </div>
          <div className="bannerMoreAboutUs">
            <p>More about me</p>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
