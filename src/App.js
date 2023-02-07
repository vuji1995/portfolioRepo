import { ContextProvider } from "./Context/Context";
import { ToastContainer } from "react-toastify";
import AboutMe from "../src/pages/AboutMe";
import Contact from "../src/pages/Contact";
import ProjectsPage from "../src/pages/ProjectPage";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className=".App">
      <ContextProvider>
        <AboutMe />
        <Home />
        <ProjectsPage />
        <Contact />
      </ContextProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
