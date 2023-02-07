import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [contactOpened, setContactOpened] = useState(false);
  const [aboutOpened, setAboutOpened] = useState(false);
  const [transitionPageOpened, setTranisitionPageOpened] = useState(false);
  const [projectsOpened, setProjectsOpened] = useState(false);
  const [projectsPageOpened, setProjectsPageOpened] = useState(false);
  const [transitionPageText, setTransitionPageText] = useState("");
  const [navRotateClass, setNavRotateClass] = useState(false);
  const [removeHeader, setRemoveHeader] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showSideMenuButton, setShowSideMenuButton] = useState(true);

  const showContactPage = (e) => {
    setTransitionPageText(e.target.innerText);
    setTranisitionPageOpened(true);
    setOpenMenu(false);
    setTimeout(() => {
      setAboutOpened(false);
      setProjectsPageOpened(false);
      setContactOpened(true);
      setRemoveHeader(true);
      setShowSideMenu(false);
      setShowSideMenuButton(true);
    }, 1000);
  };

  const showAboutPage = (e) => {
    setTransitionPageText(e.target.innerText);
    setTranisitionPageOpened(true);
    setOpenMenu(false);
    setTimeout(() => {
      setNavRotateClass(false);
      setContactOpened(false);
      setProjectsPageOpened(false);
      setAboutOpened(true);
      setRemoveHeader(true);
      setShowSideMenu(false);
      setShowSideMenuButton(true);
    }, 1000);
  };

  const showProjectPage = (e) => {
    setTransitionPageText(e.target.innerText);
    setTranisitionPageOpened(true);
    setOpenMenu(false);
    setTimeout(() => {
      setNavRotateClass(false);
      setAboutOpened(false);
      setContactOpened(false);
      setProjectsPageOpened(true);
      setRemoveHeader(true);
      setShowSideMenu(false);
      setShowSideMenuButton(true);
    }, 1000);
  };

  const showHomePage = (e) => {
    setTransitionPageText(e.target.innerText);
    setTranisitionPageOpened(true);
    setOpenMenu(false);
    setTimeout(() => {
      setNavRotateClass(false);
      setAboutOpened(false);
      setContactOpened(false);
      setProjectsPageOpened(false);
      setRemoveHeader(false);
      setShowSideMenu(false);
      setShowSideMenuButton(false);
    }, 1000);
  };

  const goToSocialMedia = (e) => {
    let socialMedia = e.target.textContent;
    socialMedia = socialMedia.toLowerCase();
    window.open(`https://www.${socialMedia}.com`);
  };

  const [overlayTopRef, setOverlayTopRef] = useState(null);
  const [overlayBottomRef, setOverlayBottomRef] = useState(null);

  return (
    <Context.Provider
      value={{
        openMenu,
        setOpenMenu,
        contactOpened,
        setContactOpened,
        aboutOpened,
        setAboutOpened,
        projectsOpened,
        setProjectsOpened,
        transitionPageOpened,
        setTranisitionPageOpened,
        projectsPageOpened,
        setProjectsPageOpened,
        transitionPageText,
        setTransitionPageText,
        navRotateClass,
        setNavRotateClass,
        removeHeader,
        setRemoveHeader,
        showSideMenu,
        setShowSideMenu,
        showSideMenuButton,
        setShowSideMenuButton,
        showProjectPage,
        showAboutPage,
        showContactPage,
        showHomePage,
        goToSocialMedia,
        overlayTopRef,
        setOverlayTopRef,
        overlayBottomRef,
        setOverlayBottomRef,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
