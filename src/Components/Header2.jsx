import Context from "../Context/Context";
import { useContext } from "react";
import { ReactComponent as ArrowUp } from "../assets/arrow-up.svg";

const Header2 = () => {
  const { openMenu, setOpenMenu } = useContext(Context);

  return (
    <div className={`headerContainer ${openMenu ? "fixed" : ""}`}>
      <div className="header90posto">
        <div className="logo">
          <a href="/">AV31.</a>
        </div>
        {openMenu !== true ? (
          <div className="nav" onClick={() => setOpenMenu(!openMenu)}>
            <span></span>
            <span></span>
          </div>
        ) : (
          <div className="nav" onClick={() => setOpenMenu(!openMenu)}>
            <ArrowUp />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header2;
