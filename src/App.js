import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from "./routes.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((data, index)=>{
            return(
              <Route path={data.path} element={data.component} />
            )
          })}
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
