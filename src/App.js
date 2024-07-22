import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes.js";
import { AnimatePresence } from "framer-motion";
import VerificationBG from "./components/common/VerificationBG/VerificationBG.jsx";
function App() {
  return (
    <div className="App">
      <AnimatePresence mode={"wait"}>
        <BrowserRouter>
          <Routes>
            {routes.map((data, index) => {
              return <Route path={data.path} element={data.component} />;
            })}
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
    // <VerificationBG></VerificationBG>
  );
}

export default App;
