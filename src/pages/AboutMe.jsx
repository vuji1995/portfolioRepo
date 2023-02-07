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
      if (oldNumber >= 4) {
        return 1;
      } else {
        return oldNumber + 1;
      }
    });
  };

  const previousSlider = () => {
    setSliderNumber((oldNumber) => {
      if (oldNumber <= 1) {
        return 4;
      } else {
        return oldNumber - 1;
      }
    });
  };

  const [slidersData, setSlidersData] = useState([
    {
      id: 1,
      h2: "I am Antonio, I am self thought junior frontend developer",
      image: ProgramingImg,
      p: `I build scalable websites from scratch that fit seamlessly  with design. My focus is on micro animations, transitions and  interaction. I enjoy creating complete websites from concept to implementation, thats what makes me stand out.     
       My great sense for design and my development skills enable me to create great projects.`,
      color: "#d8d3cd",
      imageId: 1,
    },
    {
      id: 2,
      h2: "Short biography, where, when",
      image: Mainz,
      imageId: 2,
      color: "#b1a994",
      p: "I was born in Germany, 31.01.1995. After finishing elementary school I went to Tehnical school in Split, where I enroll in the field of computer technician and mechanical engineering. After I finished middle school I entered University departmend of proffesional studies in Split. ",
      p2: "Through my whole life I always have love for the sport and fitness. My current favorite hobbies are playing football and going to gym.",
    },
    {
      id: 3,
      h2: "More about education",
      p: "When I enrolled in college I choose Electronics course. After 2 years I have choosed next course which was Telecomunications, because of my interest in networks, internet and network security.",
      p2: "On 4th and 5th year of my college I choosed next chapter which was Integrated communication technologies. In this time I have learned a lot of on practical cases in networking and cyber security. But in same time I started to get interested about coding, which soon will trigger my will for learning to code.",
      image: OSS,
      color: "#d8d3cd",
      imageId: 3,
    },
    {
      id: 4,
      h2: "What I am doing now",
      p: "Curently I am writing graduation thesis on the topic of Linux server installation with support for virtualization. Also I am working on new project which will be website for furniture company. In this project I will use new technologies like next.js and tailwind.",
      image: MERN,
      color: "#b1a994",
      imageId: 4,
      p2: "In future I would like to learn technologies like, MongoDB, Express.js and Node.js to become fullstack programmer. Also I would like to try work with AWS in future.",
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
                            <span>{sliderNumber}</span>/<span>4</span>
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
