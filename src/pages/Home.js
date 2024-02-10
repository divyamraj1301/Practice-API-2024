import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <>
      <Header />
      <ProductCard />
    </>
  );
}
