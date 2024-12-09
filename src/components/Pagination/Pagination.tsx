import imageArrowLeft from '../../assets/free-icon-left.png';
import imageArrowRight from '../../assets/free-icon-right.png';
import './Pagination.scss';
const Pagination = () => {
  return (
    <>
      <div className="container-pagination">
        <div className="container-arrow-image-left">
          <button>
            <img
              className="arrow-image-left"
              src={imageArrowLeft}
              alt="Arrow-image-left"
            />
          </button>
        </div>
        <ul>
          <li>
            <button>1</button>
          </li>
          <li>
            <button>2</button>
          </li>
          <li>
            <button>3</button>
          </li>
          <li>
            <button>4</button>
          </li>
          <li>
            <button>5</button>
          </li>
        </ul>
        <div className="container-arrow-image-right">
          <button>
            <img
              className="arrow-image-right"
              src={imageArrowRight}
              alt="Arrow-image-right"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
