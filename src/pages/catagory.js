import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/Card";

export const Catagory = () => {
    const [products, setProducts] = useState([]);
    const { catagory } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com/products/category/${catagory}`);
      setProducts(await response.json());
    }
    fetchData();
  }, [catagory]);

  return (
    <div className="grid gap-x-16 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] mx-12">
        {products.map(product => <Card product={product} key={product.id}/>)}
    </div>
  );
};