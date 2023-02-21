import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../components/Product";

export const ProductDetail = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
    };
    fetchData();
  }, [id]);
  return <Product product={product} />;
};
