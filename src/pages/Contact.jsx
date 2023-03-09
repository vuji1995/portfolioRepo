import { useContext } from "react";
import Context from "../Context/Context";
import SideMenuButton from "../Components/SideMenuButton";
import { motion } from "framer-motion";
import * as React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { contactOpened, setShowSideMenu, showSideMenu, goToSocialMedia } =
    useContext(Context);
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

  const copyContactDetails = (e) => {
    let copiedText = e.target.textContent;
    navigator.clipboard.writeText(copiedText);
    let copyTextDisplay = e.target.getAttribute(`name`);
    toast.success(`${copyTextDisplay} is copied!`);
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
      toast.error(`Enter your name!`);
      error = true;
    }

    if (fieldValue.message.length < 4) {
      console.log(`Unesite poruku!`);
      toast.error(`Enter your message!`);
      error = true;
    }

    if (!isEmailValid(fieldValue.email)) {
      toast.error(`Enter valid email adress!`);
      error = true;
    }

    if (!error) {
      toast.success(`Email has been sent!`);
      setTimeout(() => {
        setFieldValue({
          name: "",
          message: "",
          email: "",
          organization: "",
        });
      }, 2000);
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g1x78am",
        "template_vg0km1j",
        form.current,
        "JcaiKdWRsyxKOHrOQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {contactOpened ? (
        <div className="componentDiv">
          <div className="contactMeCont">
            <div className="contactFormContainer">
              <motion.div className="contactMeFormLeft">
                <div className="contactFormLeftHeading">
                  Let's start a <br />
                  project together
                </div>
                <form onSubmit={sendEmail} ref={form}>
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
                          type="email"
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
                          placeholder="Hello Antonio..."
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
                </form>
              </motion.div>

              <motion.div className="contactMeInfoRight">
                <div className="contactDetails">
                  <h2 className="smallContactHeading">CONTACT DETAILS</h2>
                  <motion.p
                    className="contactDetailsP"
                    whileHover={{ scale: 1.3, originX: 0, cursor: "pointer" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    name="Email address"
                    onClick={copyContactDetails}
                  >
                    antonio.vujicevic@gmail.com
                  </motion.p>
                  <motion.p
                    className="contactDetailsP"
                    whileHover={{ scale: 1.3, originX: 0, cursor: "pointer" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    name="Phone number"
                    onClick={copyContactDetails}
                  >
                    +385 95 7206 712
                  </motion.p>
                  <motion.p
                    className="contactDetailsP"
                    whileHover={{ scale: 1.3, originX: 0, cursor: "pointer" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    name="Location"
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
            <SideMenuButton />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Contact;
