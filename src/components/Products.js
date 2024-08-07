import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <>
      <div>
        <input type="search" placeholder="search products" />
      </div>
      <nav>
        <Link to="featured"> Featured products</Link>
        <Link to="new"> New products</Link>
      </nav>
      <Outlet />
    </>
  );
}
