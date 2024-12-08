const Filters = () => {
  return (
    <>
      <section>
        <div className="section-container">
          <div>
            <h2>Фильтры</h2>
          </div>
          <div>
            <a href="./assets/free-icon-close-button.png">
              <button>Закрыть</button>
            </a>
          </div>
          <div>
            <label htmlFor="films">Сортировать по</label>
            <select name="films" id="films">
              <option>комедии</option>
              <option>боеквик\</option>
              <option>драма</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filters;
