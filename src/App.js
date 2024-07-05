import './App.css';
import Home from './components/pages/Home/Home';
import WelcomePage from './components/pages/welcomePage/WelcomePage';
import VerificationPage from './components/pages/Verification/VerificationPage';
import AddToMeal from './components/pages/addToMeal/AddToMeal';
import Categories from './components/pages/categories/Categories';
import AddTocard from './components/pages/addToCard/AddToCard';

function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     {/* <WelcomePage/> */}
     {/* <VerificationPage/> */}
     {/* <AddToMeal></AddToMeal> */}
     {/* <Categories></Categories> */}
     <AddTocard/>

    </div>
  );
}

export default App;
