import Home from "../../pages/Home";
import Login from "../../pages/LoginRegistration/Login";
import Registration from "../../pages/LoginRegistration/Registration";

export const center = {
  center: {
    lat: 56.95004099438355,
    lng: 24.101515292458963,
  },
  zoom: 11,
};

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

export const LOCAL_STORAGE = {
  THEME: "theme",
};

export const PUBLIC_ROUTES = {
  Home: { exact: true, path: "/", component: <Home /> },
  LoginPage: { exact: true, path: "/login", component: <Login /> },
  RegistrationPage: {
    exact: true,
    path: "/registration",
    component: <Registration isRegistration />,
  },
};
