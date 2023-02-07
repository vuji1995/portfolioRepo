import Context from "../Context/Context";
import { useContext } from "react";

const SideMenuButton = () => {
  const { setShowSideMenu, showSideMenu } = useContext(Context);

  return (
    <>
      <button
        className="sideMenuButton"
        onClick={() => {
          setShowSideMenu(!showSideMenu);
        }}
      >
        <div
          className={`buttonLines ${
            showSideMenu === true ? "rotateLines" : ""
          }`}
        ></div>
        <div
          className={`buttonLines ${
            showSideMenu === true ? "rotateLines" : ""
          }`}
        ></div>
      </button>
    </>
  );
};

export default SideMenuButton;
