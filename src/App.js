import { BrowserRouter, Routes, Route } from "react-router-dom";        /* adding link name to in url  ~  npm install react-router-dom@^6.2.1 */

// -------------------------components--------------------------------
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

// User components:
import RoutesWithUserChatComponents from "./components/user/RoutesWithUserChatComponents";

// ----------------------publicly available pages----------------------
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetilsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterationPage from "./pages/RegisterationPage";

// ----------------------Protected Component----------------------
import ProtectedRouteComponents from "./components/ProtectedRouteComponents";

// ----------------------User after Login page----------------------
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserOrderPage from "./pages/user/UserOrderPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";

// ----------------------Admin after login page----------------------
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrdersDetailPage from "./pages/admin/AdminOrdersDetailPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";

function App() {
  return (
    <BrowserRouter>

      <HeaderComponent />

      <Routes>
        {/* with chat box */}
        <Route element={<RoutesWithUserChatComponents />}>
          {/* Public Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/ProductList" element={<ProductListPage />} />
          <Route path="/ProductDetails" element={<ProductDetailsPage />} />
          {/* <Route path="/ProductDetails/ :id" element={<ProductDetailsPage />} /> */}
          <Route path="/Register" element={<RegisterationPage />} />
        </Route>

        {/* User Pages */}
        <Route element={<ProtectedRouteComponents admin={false} />}>                 {/*makes these user details protected for login */}
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route path="/user/my-orders" element={<UserOrderPage />} />
          <Route path="/user/order-details" element={<UserOrderDetailsPage />} />
        </Route>

        {/* Admin Pages */}
        <Route element={<ProtectedRouteComponents admin={true} />}>                 {/*makes these user details protected for login */}
          <Route path="/admin/user" element={<AdminUsersPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/create-products" element={<AdminCreateProductPage />} />
          <Route path="/admin/edit-products" element={<AdminEditProductPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/orders-detail" element={<AdminOrdersDetailPage />} />
          <Route path="/admin/chat" element={<AdminChatsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />

        </Route>
        <Route path="*" element="Page not exist error 404" />           /*handling for wrong page url*/
      </Routes>

      <FooterComponent />

    </BrowserRouter>
  );
}

export default App;
