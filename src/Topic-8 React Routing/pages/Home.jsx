import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import axios from "axios";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://api.theindianhome.in/api/product/list",
        );
        console.log("data:", data);
        setProducts(data?.products);
      } catch (error) {
        console.log(error.response);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="max-w-300 h-auto p-10 flex items-center justify-center flex-row flex-wrap gap-10 mx-auto ">
      {products.slice(0, 8).map((product) => (
        <Link key={product._id} to={`/products/${product._id}`}>
          <Card {...product} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
