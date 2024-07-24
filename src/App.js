import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes.js";
import { AnimatePresence } from "framer-motion";
import VerificationBG from "./components/common/VerificationBG/VerificationBG.jsx";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatePresence mode={"wait"}>
          <Routes>
            {routes.map((data, index) => {
              return <Route key={index} path={data.path} element={data.component} />;
            })}
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
    // <VerificationBG></VerificationBG>
  );
}

export default App;
