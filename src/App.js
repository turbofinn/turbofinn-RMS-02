import './App.css';
import Home from './components/pages/Home/Home';
import WelcomePage from './components/pages/welcomePage/WelcomePage';
import VerificationPage from './components/pages/Verification/VerificationPage';
import AddToMeal from './components/pages/addToMeal/AddToMeal';
import Categories from './components/pages/categories/Categories';
import AddTocard from './components/pages/addToCard/AddToCard';
import MenuMobile from "./components/pages/Menu/MenuPage";
import MenuPage from "./components/pages/Menu/MenuPage";
import NavBar from './components/common/NavBar/NavBar';
import PaymentGateway from './components/pages/paymentGateway/PaymentGateway';


function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     {/* <WelcomePage/> */}
     {/* <VerificationPage/> */}
     {/* <AddToMeal></AddToMeal> */}
     {/* <Categories></Categories> */}
     <PaymentGateway></PaymentGateway>
     {/* <AddTocard/> */}
     {/* <MenuPage/> */}
      {/* <NavBar/> */}
    </div>
  );
}

export default App;
