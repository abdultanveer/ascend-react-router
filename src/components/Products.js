import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <>
      <div>
        <input type="search" placeholder="search products" />
      </div>
      <nav>
        <Link to="/products/featured"> Featured products</Link>
        <Link to="/products/new"> New products</Link>
      </nav>
      <Outlet />
    </>
  );
}
