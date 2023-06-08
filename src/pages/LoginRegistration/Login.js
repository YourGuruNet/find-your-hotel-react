import React, { useState } from "react";
import Layout from "../../components/Layout";
import LoginView from "./LoginView";
import ForgotPasswordView from "./ForgotPasswordView";

const Login = () => {
  const [isForgotPassword, setForgotPassword] = useState(false);
  return (
    <Layout isLogin showVector>
      {isForgotPassword ? (
        <ForgotPasswordView setForgotPassword={setForgotPassword} />
      ) : (
        <LoginView setForgotPassword={setForgotPassword} />
      )}
    </Layout>
  );
};

export default Login;
