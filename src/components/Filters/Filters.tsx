import Pagination from "../Pagination/Pagination";
import imageCloseButton from "../../assets/free-icon-close-button.png";
import "./Filters.scss";
import MovieList from "../MovieList/MovieList";
const Filters = () => {
  return (
    <>
      <section>
        <div className="section-container">
          <div className="container-h2">
            <h2>Фильтры</h2>
          </div>
          <div>
            <button>
              <img src={imageCloseButton} alt="close-button" />
            </button>
          </div>
          <div className="container-select">
            <label htmlFor="films">Сортировать по:</label>
            <select name="films" id="films">
              <option>Комедии</option>
              <option>Боевики</option>
              <option>Драмы</option>
            </select>
          </div>
          <div>
            <MovieList/>
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
