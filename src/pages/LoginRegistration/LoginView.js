import { MarginBottom } from "../../app/assets/theme/GlobalCss";
import SimpleButton from "../../components/buttons/SimpleButton";
import Input from "../../components/Input/Input";
import { login } from "../../modules/user/actions";
import {
  LogForgotPassword,
  LoginSubtitle,
  LoginTile,
  LoginWrapper,
} from "./LoginRegistration.styles";
import { useNavigate } from "react-router-dom";
import TextButton from "../../components/buttons/TextButton";
import React, { useState } from "react";
import { map } from "lodash";
import { connect } from "react-redux";

const LoginView = (props) => {
  const navigate = useNavigate();
  const { setForgotPassword } = props;
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const inputFields = [
    {
      placeholder: "email",
      value: loginData.email,
      onChange: (e) => setLoginData({ ...loginData, email: e.target.value }),
    },
    {
      placeholder: "password",
      value: loginData.password,
      onChange: (e) => setLoginData({ ...loginData, password: e.target.value }),
    },
  ];

  const loginCallBack = (url, user = null) => {
    navigate(url, { state: { user } });
  };

  return (
    <LoginWrapper>
      <LoginTile>Sign in</LoginTile>
      <LoginSubtitle>
        Sign in and start managing your your bookings!
      </LoginSubtitle>
      {map(inputFields, (item) => {
        return (
          <MarginBottom value={3} key={item.placeholder}>
            <Input
              value={item.value}
              placeholder={item.placeholder}
              onChange={item.onChange}
            />
          </MarginBottom>
        );
      })}
      <SimpleButton
        title="Login"
        onClick={() => login(loginData, loginCallBack)}
      />
      <TextButton
        child={
          <LogForgotPassword onClick={() => setForgotPassword(true)}>
            Forgot password?
          </LogForgotPassword>
        }
      />
      <TextButton
        child={
          <LogForgotPassword onClick={() => navigate("/registration")}>
            Create new account?
          </LogForgotPassword>
        }
      />
    </LoginWrapper>
  );
};

export default LoginView;
