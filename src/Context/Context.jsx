import { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Context.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
