import { MarginBottom } from "../../app/assets/theme/GlobalCss";
import SimpleButton from "../../components/buttons/SimpleButton";
import Input from "../../components/Input/Input";
import { generatePasswordLink } from "../../modules/user/actions";
import {
  LogForgotPassword,
  LoginSubtitle,
  LoginTile,
  LoginWrapper,
} from "./LoginRegistration.styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TextButton from "../../components/buttons/TextButton";
import React, { useState } from "react";
import { map } from "lodash";
import { connect } from "react-redux";

const ForgotPasswordView = (props) => {
  const { setForgotPassword, generatePasswordLink } = props;
  const [loginData, setLoginData] = useState({ email: "" });
  const inputFields = [
    {
      placeholder: "email",
      value: loginData.email,
      onChange: (e) => setLoginData({ ...loginData, email: e.target.value }),
    },
  ];

  const resetCallBack = async (response) => {
    if (response.data.success) {
    } else {
      toast.error("Reseating failed");
    }
  };
  return (
    <LoginWrapper>
      <LoginTile>Forgot password?</LoginTile>
      <LoginSubtitle>
        Enter your email and we send a password reset link to it!
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
        title="Send"
        onClick={() => generatePasswordLink(loginData, resetCallBack)}
      />{" "}
      <TextButton
        child={
          <LogForgotPassword onClick={() => setForgotPassword(false)}>
            Back to login
          </LogForgotPassword>
        }
      />
    </LoginWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    generatePasswordLink: (loginData, callBack) =>
      dispatch(generatePasswordLink(loginData, callBack)),
  };
};

export default connect(null, mapDispatchToProps)(ForgotPasswordView);
