import { map } from "lodash";
import React from "react";
import LoginVector from "../../app/assets/svg/Vector";
import { MarginBottom } from "../../app/assets/theme/GlobalCss";
import SimpleButton from "../../components/buttons/SimpleButton";
import Input from "../../components/Input/Input";
import Layout from "../../components/Layout";
import { LoginSubtitle, LoginTile, LoginWrapper } from "./Login.styles";

const Login = () => {
  const inputFields = [{ placeholder: "email" }, { placeholder: "password" }];
  return (
    <Layout isLogin showVector>
      <LoginWrapper>
        <LoginTile>Sign in</LoginTile>
        <LoginSubtitle>
          Sign in and start managing your your bookings!
        </LoginSubtitle>
        {map(inputFields, (item) => {
          return (
            <MarginBottom value={3}>
              <Input placeholder={item.placeholder} />
            </MarginBottom>
          );
        })}
        <SimpleButton title="Login" />
      </LoginWrapper>
    </Layout>
  );
};

export default Login;
