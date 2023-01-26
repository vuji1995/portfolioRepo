import { useContext } from "react";
import Context from "../Context/Context";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";
import * as React from "react";
import { useState } from "react";

const Contact = () => {
  const { contactOpened } = useContext(Context);
  const [fieldValue, setFieldValue] = useState({
    name: "",
    message: "",
    email: "",
    organization: "",
  });

  const inputsValue = (e) => {
    setFieldValue((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const goToSocialMedia = (e) => {
    let socialMedia = e.target.textContent;
    socialMedia = socialMedia.toLowerCase();
    window.open(`https://www.${socialMedia}.com`);
  };

  const copyContactDetails = (e) => {
    let copiedText = e.target.textContent;
    navigator.clipboard.writeText(copiedText);
  };

  const sendMessage = () => {
    let error = false;

    const isEmailValid = (email) => {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(email);
    };

    if (fieldValue.name.length < 1) {
      console.log(`Unesite ime!`);
      error = true;
    }

    if (fieldValue.message.length < 4) {
      console.log(`Unesite poruku!`);
      error = true;
    }

    if (!isEmailValid(fieldValue.email)) {
      console.log(`Unesite ispravan email!`);
      error = true;
    }

    if (!error) {
      console.log(`Mail je poslan!`);
    }
  };

  return (
    <>
      {contactOpened ? (
        <div className="componentDiv">
          <div className="contactMeCont">
            <div className="contactFormKurcina">
              <motion.div className="contactMeFormLeft">
                <div className="contactFormLeftHeading">
                  Let's start a <br />
                  project together
                </div>
                <div className="contactField firstChild">
                  <div className="fieldWrapper">
                    <div className="contactFieldTop">
                      <span className="fieldNumber">01</span>
                    </div>
                    <div className="contactFieldButtom">
                      <p
                        className={
                          fieldValue.name.length > 0
                            ? "fieldQuestionWhite"
                            : "fieldQuestion"
                        }
                      >
                        What is your name?
                      </p>
                      <input
                        type="text"
                        className="contactInput"
                        placeholder="John Doe"
                        name="name"
                        value={fieldValue.name}
                        onChange={inputsValue}
                      />
                    </div>
                  </div>
                </div>
                <div className="contactField">
                  <div className="fieldWrapper">
                    <div className="contactFieldTop">
                      <span className="fieldNumber">02</span>
                    </div>
                    <div className="contactFieldButtom">
                      <p
                        className={
                          fieldValue.email.length > 0
                            ? "fieldQuestionWhite"
                            : "fieldQuestion"
                        }
                      >
                        What is your email?
                      </p>
                      <input
                        type="text"
                        className="contactInput"
                        placeholder="john@doe.com"
                        name="email"
                        value={fieldValue.email}
                        onChange={inputsValue}
                      />
                    </div>
                  </div>
                </div>
                <div className="contactField">
                  <div className="fieldWrapper">
                    <div className="contactFieldTop">
                      <span className="fieldNumber">03</span>
                    </div>
                    <div className="contactFieldButtom">
                      <p
                        className={
                          fieldValue.organization.length > 0
                            ? "fieldQuestionWhite"
                            : "fieldQuestion"
                        }
                      >
                        What's the name of your organization?
                      </p>
                      <input
                        type="text"
                        className="contactInput"
                        placeholder="john & doe"
                        name="organization"
                        value={fieldValue.organization}
                        onChange={inputsValue}
                      />
                    </div>
                  </div>
                </div>
                <div className="contactField">
                  <div className="fieldWrapper">
                    <div className="contactFieldTop">
                      <span className="fieldNumber">04</span>
                    </div>
                    <div className="contactFieldButtom">
                      <p
                        className={
                          fieldValue.message.length > 0
                            ? "fieldQuestionWhite"
                            : "fieldQuestion"
                        }
                      >
                        Your message
                      </p>
                      <input
                        type="text"
                        className="contactInput"
                        placeholder="Hello Antonio, can you help me with...?"
                        name="message"
                        value={fieldValue.message}
                        onChange={inputsValue}
                      />

                      <motion.button
                        className="sendMessageContact"
                        onClick={sendMessage}
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        Send it
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div className="contactMeInfoRight">
                <div className="contactDetails">
                  <h2 className="smallContactHeading">CONTACT DETAILS</h2>
                  <motion.p
                    className="contactDetailsP"
                    whileHover={{ scale: 1.3, originX: 0, cursor: "pointer" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={copyContactDetails}
                  >
                    antonio@gmail.com
                  </motion.p>
                  <motion.p
                    className="contactDetailsP"
                    whileHover={{ scale: 1.3, originX: 0, cursor: "pointer" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={copyContactDetails}
                  >
                    +385 95 7207 7121
                  </motion.p>
                  <motion.p
                    className="contactDetailsP"
                    whileHover={{ scale: 1.3, originX: 0, cursor: "pointer" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={copyContactDetails}
                  >
                    Split, Croatia
                  </motion.p>
                </div>
                <div className="social">
                  <h2 className="smallContactHeading">SOCIALS</h2>
                  <motion.p
                    className="socialP"
                    onClick={goToSocialMedia}
                    whileHover={{ scale: 1.3, originX: 0, cursor: "pointer" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Instagram
                  </motion.p>
                  <motion.p
                    className="socialP"
                    onClick={goToSocialMedia}
                    whileHover={{ scale: 1.3, originX: 0, cursor: "pointer" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Facebook
                  </motion.p>
                  <motion.p
                    className="socialP"
                    onClick={goToSocialMedia}
                    whileHover={{ scale: 1.3, originX: 0, cursor: "pointer" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Twitter
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Contact;
