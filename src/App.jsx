import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Category from "./components/Category/Category";
import Cover from "./components/Cover/Cover";
import Footer from "./components/Footer/Footer";
import NavMovile from "./components/NavMovile/NavMovile";
import Navbar from "./components/Navbar/Navbar";
import { Promo } from "./components/Promo/Promo";
import Catalog from "./components/catalog/catalog";

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
