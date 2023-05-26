import { map } from "lodash";
import React, { useState } from "react";
import { connect } from "react-redux";
import { MarginBottom } from "../../app/assets/theme/GlobalCss";
import SimpleButton from "../../components/buttons/SimpleButton";
import Input from "../../components/Input/Input";
import Layout from "../../components/Layout";
import { setNewAccount } from "../../modules/user/actions";
import {
  LoginSubtitle,
  LoginTile,
  LoginWrapper,
} from "./LoginRegistration.styles";
import { Navigate } from "react-router-dom";

const Registration = (props) => {
  const { createAccount } = props;
  const [registrationData, setRegistrationData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    lastName: "",
    firstName: "",
  });
  const [isRegistrationSuccess, setRegistrationSuccess] = useState(false);
  const inputFields = [
    {
      placeholder: "First name",
      value: registrationData.firstName,
      onChange: (e) =>
        setRegistrationData({ ...registrationData, firstName: e.target.value }),
    },
    {
      placeholder: "Last name",
      value: registrationData.lastName,
      onChange: (e) =>
        setRegistrationData({ ...registrationData, lastName: e.target.value }),
    },
    {
      placeholder: "Email",
      value: registrationData.email,
      onChange: (e) =>
        setRegistrationData({ ...registrationData, email: e.target.value }),
    },
    {
      placeholder: "Password",
      value: registrationData.password,
      onChange: (e) =>
        setRegistrationData({ ...registrationData, password: e.target.value }),
    },
    {
      placeholder: "Repeat password",
      value: registrationData.repeatPassword,
      onChange: (e) =>
        setRegistrationData({
          ...registrationData,
          repeatPassword: e.target.value,
        }),
    },
  ];

  if (isRegistrationSuccess) {
    return <Navigate to="/Login" />;
  }

  return (
    <Layout isLogin showVector>
      <LoginWrapper>
        <LoginTile>Registration</LoginTile>
        <LoginSubtitle>
          Create account start managing your your bookings!
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
          onClick={() =>
            createAccount(registrationData, () => setRegistrationSuccess(true))
          }
        />
      </LoginWrapper>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: (registrationData, callBack) =>
      dispatch(setNewAccount(registrationData, callBack)),
  };
};

export default connect(null, mapDispatchToProps)(Registration);
