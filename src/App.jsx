import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Cover from "./components/Cover/Cover";
import Carousel from "./components/Carousel/Carousel";
import Category from "./components/Category/Category";
import { Promo } from "./components/Promo/Promo";
import Catalog from "./components/catalog/catalog";
import Footer from "./components/Footer/Footer";
import NavMovile from "./components/NavMovile/NavMovile";

function App() {
  return (
    <>
      <Navbar />
      <Cover />
      <Carousel />
      <Category />
      <Promo />
      <Catalog/>
      <Footer/>
      <NavMovile/>
    </>
  );
}

export default App;
