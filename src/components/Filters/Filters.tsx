import { useState } from "react";
import Pagination from "../Pagination/Pagination";
import imageCloseButton from "../../assets/free-icon-close-button.png";
import "./Filters.scss";
import MovieList from "../MovieList/MovieList";
import Select from "./Select";
import {
  optiionsYears,
  optionsGenres,
} from "../../data/selectOptions/selectOptions";
const Filters = () => {
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set());

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
            />
            <Select
              label={"Год релиза:"}
              htmlFor={"year"}
              id={"year"}
              options={optiionsYears}
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
