import { map } from "lodash";
import React, { useState } from "react";
import { connect } from "react-redux";
import { MarginBottom } from "../../app/assets/theme/GlobalCss";
import SimpleButton from "../../components/buttons/SimpleButton";
import Input from "../../components/Input/Input";
import Layout from "../../components/Layout";
import { getLoginToken } from "../../modules/user/actions";
import {
  LoginSubtitle,
  LoginTile,
  LoginWrapper,
} from "./LoginRegistration.styles";

const Login = (props) => {
  const { login } = props;
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

  return (
    <Layout isLogin showVector>
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
        <SimpleButton title="Login" onClick={() => login(loginData)} />
      </LoginWrapper>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (loginData) => dispatch(getLoginToken(loginData)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
