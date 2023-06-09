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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

const Registration = (props) => {
  const navigate = useNavigate();
  const { createAccount } = props;
  const [registrationData, setRegistrationData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    lastName: "",
    firstName: "",
  });
  const [loading, setLoading] = useState(false);

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

  const createAccountCallBack = (response) => {
    if (response.data.success) {
      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      toast.error(response.data.message);
    }
    setLoading(false);
  };

  const handleCreateAccount = () => {
    setLoading(true);
    if (registrationData.password !== registrationData.repeatPassword) {
      toast.error("Passwords don't mach!");
      setLoading(false);
    } else {
      createAccount(registrationData, createAccountCallBack);
    }
  };

  return (
    <Layout isLogin showVector>
      {loading && <Loader />}
      {!loading && (
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
          <SimpleButton title="Login" onClick={() => handleCreateAccount()} />
        </LoginWrapper>
      )}
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
