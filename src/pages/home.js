import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const Home = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      setProducts(await response.json());
    }
    fetchData();
  }, []);

  return (
    <div className="grid gap-x-16 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] mx-12">
        {products.map(product => <Card product={product} key={product.id}/>)}
    </div>
  );
};
