import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import React from "react";
import Profile from "./components/Profile";
import {AuthProvider} from "./components/auth";
import Login from "./components/Login";

const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* add two more pages */}

          <Route path="/" element={<Home />}></Route>
          <Route path="profile" element={<Profile />} />

          <Route
            path="/about"
            element={
              <React.Suspense fallback="loading...">
                <LazyAbout />
              </React.Suspense>
            }
          ></Route>
          <Route path="/order-summary" element={<OrderSummary />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
          <Route path="login" element={<Login />} />
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />}></Route>
          </Route>
          <Route path="/products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
