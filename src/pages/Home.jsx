import IntroOverlay from "../Components/IntroOverlay";
import Banner from "../Components/Banner";
import Projects from "../Components/Projects";
import NavigationMenu from "../Components/NavigationMenu";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Context from "../Context/Context";
import ProjectsPage from "./ProjectPage";
import TransitionPage from "../Components/TransitionPage";
import gsap from "gsap";
import { useEffect, useState, useContext } from "react";

const tl = gsap.timeline();

const homeAnimation = (removeTopAndBootom) => {
  tl.to(".overlay-top", 1.6, {
    height: 0,
    ease: "expo.inOut",
    stagger: 0.4,
  }).to(".overlay-bottom", 1.6, {
    width: 0,
    ease: "expo.inOut",
    stagger: 0.4,
    onComplete: removeTopAndBootom,
  });
};

const Home = () => {
  //starting animation
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, [completeAnimation]);

  const { openMenu } = useContext(Context);

  return (
    <div
      className="content-container"
      style={{ overflow: "hidden", height: "100vh" }}
    >
      {animationComplete === false ? <IntroOverlay /> : ""}
      <div className={`content ${openMenu ? "push-down" : ""}`}>
        <Banner />
        <Projects />
      </div>
      <NavigationMenu />
      <Contact />
      <AboutMe />
      <TransitionPage />
      <ProjectsPage />
    </div>
  );
};

export default Home;
