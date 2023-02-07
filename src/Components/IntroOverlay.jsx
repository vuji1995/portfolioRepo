import { useContext } from "react";
import Context from "../Context/Context";

const IntroOverlay = () => {
  const {
    overlayBottomRef,
    overlayTopRef,
    setOverlayTopRef,
    setOverlayBottomRef,
  } = useContext(Context);

  return (
    <div className="componentDiv">
      <div className="intro-overlay">
        <div className="top">
          <div
            className="overlay-top hiddenAnimation"
            ref={setOverlayTopRef}
          ></div>
          <div
            className="overlay-top hiddenAnimation"
            ref={setOverlayTopRef}
          ></div>
          <div
            className="overlay-top hiddenAnimation"
            ref={setOverlayTopRef}
          ></div>
        </div>
        <div className="bottom">
          <div className="overlay-bottom" ref={setOverlayBottomRef}></div>
          <div className="overlay-bottom" ref={setOverlayBottomRef}></div>
          <div className="overlay-bottom" ref={setOverlayBottomRef}></div>
        </div>
      </div>
    </div>
  );
};

export default IntroOverlay;
