import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* add two more pages */}

        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/order-summary" element={<OrderSummary />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
        <Route path="/products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
