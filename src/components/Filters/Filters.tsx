import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import imageCloseButton from "../../assets/free-icon-close-button.png";
import "./Filters.scss";
import MovieList from "../MovieList/MovieList";
import Select from "./Select";
import { optionAll } from "../../data/selectOptions/selectOptions";
import { ChangeEvent } from "react";
import { useReducer } from "react";

interface Action {
  type: "change";
  event: string | number;
}

interface Option {
  value: string | number;
  label: string;
}

const Filters = () => {
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set());
  const [optionsSelect, dispatch] = useReducer(yourReducer, optionAll);

  const optionsGenres = optionAll.slice(0, 4);

  const optionsYears = optionAll.slice(4, 8);

  const curentValueGenres = optionsGenres.slice(3, 4);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "change",
      event: e.target.value,
    });
  };

  const resetFilters = () => {
    setSelectedGenres(new Set());
  };

  return (
    <>
      <section>
        <div className="section-container">
          <div className="container-h2">
            <h2>Фильтры</h2>
          </div>
          <div>
            <button onClick={resetFilters}>Сбросить фильтры</button>
            <button>
              <img src={imageCloseButton} alt="close-button" />
            </button>
          </div>
          <div className="container-select">
            <Select
              label={"Сортировать по:"}
              htmlFor={"genres"}
              id={"genres"}
              options={optionsGenres}
              handleChange={handleChange}
            />
            <Select
              label={"Год релиза:"}
              htmlFor={"year"}
              id={"year"}
              options={optionsYears}
              handleChange={handleChange}
            />
          </div>

          <div>
            <MovieList
              selectedGenres={selectedGenres}
              setSelectedGenres={setSelectedGenres}
            />
          </div>
          <div className="pagination-container">
            <Pagination />
          </div>
        </div>
      </section>
    </>
  );
};

export default Filters;

const yourReducer = (optionAll: Option[], action: Action) => {
  switch (action.type) {
    case "change": {
      const selectedValue = action.event;
      const selectedOption = optionAll.find(
        (option) => option.value === selectedValue
      );
      return selectedOption ? [selectedOption] : optionAll;
    }
    default:
      return optionAll;
  }
};
