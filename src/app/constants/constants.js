import { useEffect } from "react";
import Home from "../../pages/Home";
import Login from "../../pages/LoginRegistration/Login";
import Registration from "../../pages/LoginRegistration/Registration";
import { useNavigate } from "react-router-dom";
import LocalStorageWrapper, {
  LocalStorageKeys,
} from "../Helpers/LocalStorageWrapper";
import ChangePassword from "../../pages/LoginRegistration/ChangePassword";
import Page404 from "../../pages/Page404";

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
  LoginPage: { exact: true, path: "/login", component: <Login /> },
  ChangePasswordPage: {
    exact: true,
    path: "/change-password",
    component: <ChangePassword />,
  },
  RegistrationPage: {
    exact: true,
    path: "/registration",
    component: <Registration isRegistration />,
  },
  page404: {
    exact: true,
    path: "/404",
    component: <Page404 isRegistration />,
  },
};

const PrivateRoute = ({ component: Component }) => {
  const token = LocalStorageWrapper.get(LocalStorageKeys.TOKEN);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return <Component />;
};

export const PRIVATE_ROUTES = {
  Home: {
    exact: true,
    path: "/",
    component: <PrivateRoute component={Home} />,
  },
};
