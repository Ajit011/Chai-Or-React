import "./Home.css";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

import products from "../data/products";

function Home() {
  return (
    <>
      <Navbar />

      <Banner />

      <Categories />

      <div className="products">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Home;