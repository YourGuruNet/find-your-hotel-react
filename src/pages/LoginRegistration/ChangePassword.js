import { MarginBottom } from "../../app/assets/theme/GlobalCss";
import SimpleButton from "../../components/buttons/SimpleButton";
import Input from "../../components/Input/Input";
import { changePassword } from "../../modules/user/actions";
import {
  LoginSubtitle,
  LoginTile,
  LoginTileSuccess,
  LoginWrapper,
} from "./LoginRegistration.styles";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { map } from "lodash";
import { connect } from "react-redux";
import Layout from "../../components/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

const ChangePassword = (props) => {
  const location = useLocation();

  const user = location.state?.user;
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    password: "",
    repeatPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);

  const inputFields = [
    {
      placeholder: "password",
      value: loginData.password,
      onChange: (e) => setLoginData({ ...loginData, password: e.target.value }),
    },
    {
      placeholder: "repeat password",
      value: loginData.repeatPassword,
      onChange: (e) =>
        setLoginData({ ...loginData, repeatPassword: e.target.value }),
    },
  ];

  const changePasswordCallBack = (response) => {
    if (response.data.success) {
      setPasswordChanged(true);
    } else {
      toast.error(response.data.message);
    }
    setLoading(false);
  };

  const handleChangePassword = () => {
    setLoading(true);
    if (loginData.password !== loginData.repeatPassword) {
      toast.error("Passwords don't mach!");
      setLoading(false);
    } else {
      changePassword(user, loginData, changePasswordCallBack);
    }
  };

  return (
    <Layout isLogin showVector={!loading}>
      {passwordChanged && (
        <LoginWrapper>
          <LoginTileSuccess>Password changed successfully!</LoginTileSuccess>
          <SimpleButton title="Go to login" onClick={() => navigate("/")} />
        </LoginWrapper>
      )}
      {loading && <Loader />}
      {!loading && !passwordChanged && (
        <LoginWrapper>
          <LoginTile>Change password!</LoginTile>
          <LoginSubtitle>Hey! Insert your new password below.</LoginSubtitle>
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
          <SimpleButton title="Save" onClick={() => handleChangePassword()} />
        </LoginWrapper>
      )}
    </Layout>
  );
};

export default ChangePassword;
