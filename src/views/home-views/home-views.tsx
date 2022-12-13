import React from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { Categories, SortPopup, PizzaBlock, Skeleton, Pagination } from "../../components/ui";

import { selectPizzas, setItems } from "../../redux/slice/pizzasSlice";
import { selectFilter, setCategoryId } from "../../redux/slice/filterSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, currentPage, sort, searchValue } = useSelector(selectFilter);
  const { items } = useSelector(selectPizzas);

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

  const onChangeCategory = React.useCallback(
    (id: number) => {
      dispatch(setCategoryId(id));
    },
    [dispatch]
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories onChangeCategory={onChangeCategory} />
        <SortPopup sort={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((obj: { name: string }) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj: any) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
