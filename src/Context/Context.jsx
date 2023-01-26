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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
