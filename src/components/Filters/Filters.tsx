import { useState, useContext } from "react";
import Pagination from "../Pagination/Pagination";
import imageCloseButton from "../../assets/free-icon-close-button.png";
import "./Filters.scss";
import MovieList from "../MovieList/MovieList";
import Select from "./Select";
import { ChangeEvent } from "react";
import { ContextOptionGenres } from "../../context/ContextForFlters/ContextForFilters";
import { ContextOptionsYears } from "../../context/ContextForFlters/ContextForFilters";
import { useChangeDispatch } from "../../context/ContextForFlters/ContextForFilters";

const Filters = () => {
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set());
  const optionsGenres = useContext(ContextOptionGenres);
  const optionsYears = useContext(ContextOptionsYears);
  const dispatch = useChangeDispatch();

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
