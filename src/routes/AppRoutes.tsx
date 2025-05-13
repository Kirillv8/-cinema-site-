import { Route, Routes } from "react-router-dom";
import AuthorizationPage from "../pages/AuthorizationPage";
import MainPage from "../pages/MainPage";
import RegistrationPage from "../pages/RegistrrationPage";
import SortMoviesPage from "../pages/SortMoviesPage";
import NotFound from "../pages/NotFound";
import CardComponentsPage from "../pages/CardComponentsPage";

const navigationRoutes = [
  { path: "/", element: <MainPage /> },
  { path: "*", element: <NotFound /> },
  { path: "/authorization", element: <AuthorizationPage /> },
  { path: "/registration", element: <RegistrationPage /> },
  { path: "/sort-movies", element: <SortMoviesPage /> },
  { path: "/movies/id", element: <CardComponentsPage /> },
];

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {navigationRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            ></Route>
          );
        })}
      </Routes>
    </>
  );
};

export default AppRoutes;
