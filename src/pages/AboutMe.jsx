import Context from "../Context/Context";
import SideMenuButton from "../Components/SideMenuButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProgramingImg from "../assets/programing.jpg";
import Mainz from "../assets/mainzPicture.jpg";
import OSS from "../assets/oss.jpg";
import MERN from "../assets/MERN.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LoadingDots from "../Components/LoadingDots";
import { useContext, useState } from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const { aboutOpened } = useContext(Context);

  const [sliderNumber, setSliderNumber] = useState(1);

  const nextSlider = () => {
    setSliderNumber((oldNumber) => {
      if (oldNumber >= 3) {
        return 1;
      } else {
        return oldNumber + 1;
      }
    });
  };

  const previousSlider = () => {
    setSliderNumber((oldNumber) => {
      if (oldNumber <= 1) {
        return 3;
      } else {
        return oldNumber - 1;
      }
    });
  };

  const [slidersData, setSlidersData] = useState([
    {
      id: 1,
      h2: "I am Antonio, I am junior frontend developer",
      image: ProgramingImg,
      p: `I build scalable websites from scratch that fit seamlessly  with design. My focus is on micro animations, transitions and  interaction. I enjoy creating complete websites from concept to implementation, thats what makes me stand out.     
       My great sense for design and my development skills enable me to create great projects.`,
      color: "#d8d3cd",
      imageId: 1,
    },
    {
      id: 2,
      h2: "Education",
      p: "I initially enrolled in college as an Electronics major. However, after two years, I chose Telecommunications as my major in college due to my interest in networks, the internet, and network security. ",
      p2: "During my fourth and fifth year of college, I expanded my studies to Integrated Communication Technologies. During this time, I gained hands-on experience with networking and cybersecurity through practical case studies. Additionally, I developed a newfound interest in coding, which ultimately led me to pursue further studies in this field.",
      image: OSS,
      color: "#d8d3cd",
      imageId: 3,
    },
    {
      id: 3,
      h2: "What I am doing now",
      p: "Presently, I am completing my graduation thesis on the topic of installing a Linux server with virtualization support. In addition, I am also engaged in learning new programming languages and exploring various software development technologies to enhance my skills and broaden my knowledge in the field of computer science. ",
      image: MERN,
      color: "#b1a994",
      imageId: 4,
      p2: "My aim is to expand my skills by learning technologies such as MongoDB, Express.js, and Node.js, with the goal of becoming a full-stack programmer.",
    },
  ]);

  return (
    <>
      {aboutOpened ? (
        <div className="componentDiv">
          <div className="aboutContainer">
            {slidersData
              .filter((slider) => slider.id === sliderNumber)
              .map((slide) => (
                <div className="aboutMeTimeLine">
                  <div
                    className="aboutImage"
                    style={{ backgroundColor: slide.color }}
                  >
                    <motion.img
                      src={slide.image}
                      alt="image"
                      key={slide.imageId}
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 50,
                        duration: 1,
                      }}
                    />
                  </div>
                  <motion.div
                    className="sliders"
                    key={slide.id}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                      duration: 1,
                    }}
                  >
                    <h2 className="aboutMeheading">
                      {slide.h2}
                      <LoadingDots />
                    </h2>
                    <p className="aboutMeText">{slide.p}</p>
                    <p className="aboutMeText marginTop">{slide.p2}</p>
                    <div className="aboutSocials">
                      <div className="socialsContainer">
                        <div className="twitterIcon iconsBackground">
                          <TwitterIcon />
                        </div>
                        <div className="facebookIcon iconsBackground">
                          <FacebookIcon />
                        </div>
                        <div className="githubIcon iconsBackground">
                          <GitHubIcon />
                        </div>
                        <div className="instagram iconsBackground">
                          <InstagramIcon />
                        </div>
                      </div>
                    </div>
                    <div className="arrowsRightLeftContainer">
                      <div className="arrowsLeftRight">
                        <div className="backIcon" onClick={previousSlider}>
                          <ArrowBackIcon />
                        </div>
                        <div className="slidesNumbers">
                          <p>
                            <span>{sliderNumber}</span>/<span>3</span>
                          </p>
                        </div>
                        <div className="forwardIcon" onClick={nextSlider}>
                          <ArrowForwardIcon />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}

            <SideMenuButton />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AboutMe;
