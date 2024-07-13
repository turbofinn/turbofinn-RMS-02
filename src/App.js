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
import PaymentMethod from './components/pages/paymentMethod/PaymentMethod';
import OrderHistory from './components/pages/orderHistory/OrderHistory';


function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     {/* <WelcomePage/> */}
     {/* <VerificationPage/> */}
     {/* <AddToMeal></AddToMeal> */}
     {/* <Categories></Categories> */}
     {/* <PaymentMethod></PaymentMethod> */}
     {/* <AddTocard/> */}
     {/* <MenuPage/> */}
     <OrderHistory></OrderHistory>
      {/* <NavBar/> */}
    </div>
  );
}

export default App;
