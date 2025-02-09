import './Header.scss';
const Header = () => {
  return (
    <>
      <header className="header-container">
        <div>
          <h2>Фильмы</h2>
        </div>
        <div>
          <button>Авторизоваться/Регистрироваться</button>
        </div>
      </header>
    </>
  );
};

export default Header;
