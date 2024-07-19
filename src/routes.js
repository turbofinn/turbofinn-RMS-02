import Welcome from "./components/pages/welcomePage/WelcomePage.jsx";
import Verification from "./components/pages/Verification/VerificationPage.jsx";
import Categories from "./components/pages/categories/Categories.jsx";
import MenuPage from "./components/pages/Menu/MenuPage.jsx";
import AddToMeal from "./components/pages/addToMeal/AddToMeal";
import Profile from "./components/pages/profile/profileSetting.jsx";
import OrderHistory from "./components/pages/orderHistory/OrderHistory.jsx";
import AddTocard from "./components/pages/addToCard/AddToCard.jsx";
import PaymentMethod from "./components/pages/paymentMethod/PaymentMethod.jsx";
import OrderStatus from "./components/pages/orderStatus/OrderStatus.jsx";
import BillPage from "./components/pages/billingPage/BillingPage.jsx";
import FeedbackPage from "./components/pages/feedback/feedback.jsx";
const routes = [
  {
    name: "welcome",
    path: "/",
    component: <Welcome />,
  },
  {
    name: "verification",
    path: "/login",
    component: <Verification />,
  },
  {
    name: "category",
    path: "/category",
    component: <Categories />,
  },
  {
    name: "menu",
    path: "/menu",
    component: <MenuPage />,
  },
  {
    name: "product details",
    path: "/productdetails",
    component: <AddToMeal />,
  },
  {
    name: "Your Meal CART",
    path: "/yourmealcart",
    component: <AddTocard />,
  },
  {
    name: "profile",
    path: "/profile",
    component: <Profile />,
  },
  {
    name: "Order History",
    path: "/history",
    component: <OrderHistory />,
  },
  {
    name: "Payment Method",
    path: "/paymentmethod",
    component: <PaymentMethod />,
  },
  {
    name: "Order Status",
    path: "/orderstatus",
    component: <OrderStatus />,
  },
  {
    name: "Billing Page",
    path: "/billing",
    component: <BillPage />,
  },
  {
    name: "Feedback Page",
    path: "/feedback",
    component: <FeedbackPage />,
  },
];

export default routes;
