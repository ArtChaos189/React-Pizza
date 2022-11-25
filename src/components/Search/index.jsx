import React from "react";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App";

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <svg className={styles.icon} fill="#000000" viewBox="0 0 50 50" width="50px" height="50px">
        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
      </svg>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы...."
      />
      {searchValue && (
        <svg
          onClick={() => setSearchValue("")}
          className={styles.clearIcon}
          fill="#000000"
          viewBox="0 0 50 50"
          width="50px"
          height="50px"
        >
          <path
            fill="none"
            stroke="#000000"
            stroke-miterlimit="10"
            stroke-width="4"
            d="M7.741 7.741L42.359 42.359M42.258 7.742L7.618 42.382"
          />
        </svg>
      )}
    </div>
  );
};

export default Search;
