import { useEffect } from "react";
import { ContextProvider } from "./Context/Context";
//pages
import Home from "./pages/Home";

function App() {
  useEffect(() => {}, []);
  return (
    <ContextProvider>
      <div className=".App">
        <Home />
      </div>
    </ContextProvider>
  );
}

export default App;
