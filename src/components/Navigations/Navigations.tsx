import * as React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

interface PropId {
  filmId: number;
}
const Navigations = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>Главная</Link>
        <Link to={"*"}>Страница не найдена</Link>
        <Link to={"/authorization"}>Авторизация</Link>
        <Link to={"/registration"}>Регистрация</Link>
        <Link to={"/sort-movies"}>Фильмы</Link>
      </nav>
    </>
  );
};

export default Navigations;
