import Welcome from "./components/pages/welcomePage/WelcomePage.jsx";
import Verification from "./components/pages/Verification/VerificationPage.jsx";
import Categories from "./components/pages/categories/Categories.jsx";
import MenuPage from "./components/pages/Menu/MenuPage.jsx";
import Profile from "./components/pages/profile/profileSetting.jsx";
import OrderHistory from "./components/pages/orderHistory/OrderHistory.jsx";

const routes = [
    {
        name:"welcome",
        path:"/",
        component:<Welcome/>,
    },
    {
        name:"verification",
        path:"/login",
        component:<Verification/>,
    },
    {
        name:"category",
        path:"/category",
        component:<Categories/>,
    },
    {
        name:"menu",
        path:"/menu",
        component:<MenuPage/>,
    },
    {
        name:"profile",
        path:"/profile",
        component:<Profile/>,
    },
    {
        name:"Order History",
        path:"/history",
        component:<OrderHistory/>,
    },
]


export default routes;