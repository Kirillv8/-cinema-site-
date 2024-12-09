import Pagination from '../Pagination/Pagination';
import imageCloseButton from '../../assets/free-icon-close-button.png';
import './Filters.scss';
const Filters = () => {
  return (
    <>
      <section>
        <div className="section-container">
          <div>
            <h2>Фильтры</h2>
          </div>
          <div>
            <button>
              <img src={imageCloseButton} alt="close-button" />
            </button>
          </div>
          <div>
            <label htmlFor="films">Сортировать по:</label>
            <select name="films" id="films">
              <option>Комедии</option>
              <option>Боевики</option>
              <option>Драмы</option>
            </select>
          </div>
          <Pagination />
        </div>
      </section>
    </>
  );
};

export default Filters;
