import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import routes from "./routes.js";
import { AnimatePresence } from "framer-motion";
import Camera from "./components/common/Camera/Camera.jsx";
function App() {
  console.log(process.env.REACT_APP_BASE_URL);
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatePresence mode={"wait"}>
          <Routes>
            {routes.map((data, index) => {
              return <Route key={index} path={data.path} element={data.component} />;
            })}
               <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
    // <Camera></Camera>
  );
}

export default App;
