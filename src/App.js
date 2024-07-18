import "./App.css";
import routes from "./routes.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((data, index) => {
            return <Route path={data.path} element={data.component} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
