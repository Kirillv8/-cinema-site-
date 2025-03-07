import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import imageCloseButton from "../../assets/free-icon-close-button.png";
import "./Filters.scss";
import MovieList from "../MovieList/MovieList";
import Select from "./Select";
import { optionAll } from "../../data/selectOptions/selectOptions";
import { ChangeEvent } from "react";

const Filters = () => {
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set());
  const [optionsSelect, setOptionsSelect] = useState(optionAll);

  const optionsGenres = optionAll.slice(0, 4);
  console.log(optionsGenres);

  const optionsYears = optionAll.slice(4, 8);
  console.log(optionsYears);

  const curentValueGenres = optionsGenres.slice(3, 4);
  console.log(curentValueGenres);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedOption = optionAll.find((option) => {
      return option.value === selectedValue;
    });
    if (selectedOption) {
      setOptionsSelect([selectedOption]);
    }
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
