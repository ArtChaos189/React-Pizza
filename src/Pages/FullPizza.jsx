import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

import { Skeleton } from "../components";

export const FullPizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = React.useState();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get("https://626d16545267c14d5677d9c2.mockapi.io/items/" + id);
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы!");
      }
    }

    fetchPizza();
  }, [id]);

  if (!pizza) {
    return <Skeleton />;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};
