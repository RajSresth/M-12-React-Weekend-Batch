import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import App from "./App.jsx";
import Signup from "./Topic-7 Form Handling/Signup.jsx";
import NotFound from "./Topic-8 React Routing/pages/NotFound.jsx";
import Home from "./Topic-8 React Routing/pages/Home.jsx";
import Shop from "./Topic-8 React Routing/pages/Shop.jsx";
import Profile from "./Topic-8 React Routing/pages/Profile.jsx";
import ProductPage from "./Topic-8 React Routing/pages/ProductPage.jsx";
import Order from "./Topic-8 React Routing/pages/Order.jsx";
import ErrorPage from "./Topic-8 React Routing/pages/ErrorPage.jsx";
import Login from "./Topic-8 React Routing/pages/Login.jsx";
import { AuthProvider } from "./Topic-8 React Routing/store/AuthContext.jsx";
import ProtectedRoute from "./Topic-8 React Routing/routes/ProtectedRoute.jsx";
import Cart from "./Topic-8 React Routing/pages/Cart.jsx";


import { Provider } from "react-redux";
import store from "./Topic-8 React Routing/redux/store.js"

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/order" element={<Order />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/cart" element={<Cart/>} />
            </Route>
          </Route>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>,
  </Provider>
);
