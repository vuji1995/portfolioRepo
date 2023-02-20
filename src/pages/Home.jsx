import IntroOverlay from "../Components/IntroOverlay";
import Banner from "../Components/Banner";
import Projects from "../Components/Projects";
import gsap from "gsap";
import Context from "../Context/Context";
import Header2 from "../Components/Header2";
import NavigationMenu from "../Components/NavigationMenu";
import SideMenu from "../Components/SideMenu";
import TransitionPage from "../Components/TransitionPage";
import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";

const tl = gsap.timeline();

const homeAnimation = (removeTopAndBootom) => {
  const overlayTop = document.querySelector(".overlay-top");
  const overlayBottom = document.querySelector(".overlay-bottom");

  if (!overlayTop || !overlayBottom) return;

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

  const [showWarning, setShowWarning] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowWarning(false);
    }, 5000);
  }, []);

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
      <Header2 />
      <NavigationMenu />
      <SideMenu />
      <TransitionPage />
    </div>
  );
};

export default Home;
