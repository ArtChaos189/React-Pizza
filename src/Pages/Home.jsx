import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { Categories, Sort, PizzaBlock, Skeleton, Pagination } from "../components";

import { setCategoryId, setCurrentPage } from "../redux/slice/filterSlice";
import { setItems } from "../redux/slice/pizzasSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, currentPage, sort, searchValue } = useSelector((state) => state.filter);
  const { items } = useSelector((state) => state.pizzas);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const axiosPizzas = async () => {
      setIsLoading(true);
      const category = categoryId > 0 ? `category=${categoryId}` : "";
      const order = sort.sortProperty.includes("-") ? "asc" : "desc";
      const sortBy = sort.sortProperty.replace("-", "");

      try {
        const { data } = await axios.get(
          `https://637c882872f3ce38eaa4fa33.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}`
        );
        dispatch(setItems(data));
      } catch (error) {
        alert("Ошибка при получении пицц");
        dispatch(setItems([]));
      } finally {
        setIsLoading(false);
      }
      window.scrollTo(0, 0);
    };

    axiosPizzas();
  }, [categoryId, sort, searchValue, currentPage, dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickCategory={(i) => dispatch(setCategoryId(i))} value={categoryId} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj) => (
                <Link key={obj.id} to={`/pizza/${obj.id}`}>
                  <PizzaBlock {...obj} />
                </Link>
              ))}
      </div>
      <Pagination onChangePage={(number) => dispatch(setCurrentPage(number))} />
    </div>
  );
};

export default Home;
