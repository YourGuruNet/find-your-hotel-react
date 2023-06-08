import { MarginBottom } from "../../app/assets/theme/GlobalCss";
import SimpleButton from "../../components/buttons/SimpleButton";
import Input from "../../components/Input/Input";
import { checkUser } from "../../modules/user/actions";
import {
  LoginSubtitle,
  LoginTile,
  LoginWrapper,
} from "./LoginRegistration.styles";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { map } from "lodash";
import { connect } from "react-redux";
import Layout from "../../components/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

const ChangePassword = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    password: "",
    repeatPassword: "",
  });
  const [key, setKey] = useState("");
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const { checkUser } = props;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const key = searchParams.get("key");
    if (!key) {
      navigate("/404");
    }

    setKey(key);
    checkUser({ secretKey: key }, checkUserCallBack);
  }, [location.search]);

  const inputFields = [
    {
      placeholder: "password",
      value: loginData.password,
      onChange: (e) => setLoginData({ ...loginData, password: e.target.value }),
    },
    {
      placeholder: "repeat password",
      value: loginData.password,
      onChange: (e) =>
        setLoginData({ ...loginData, repeatPassword: e.target.value }),
    },
  ];

  const checkUserCallBack = async (response) => {
    if (response.data.success) {
      setLoading(false);
      setUser(response.data.user);
    } else {
      toast.error("Link expired");
      navigate("/404");
    }
  };

  return (
    <Layout isLogin showVector={!loading}>
      {loading && <Loader />}
      {!loading && (
        <LoginWrapper>
          <LoginTile>Change password!</LoginTile>
          <LoginSubtitle>
            Hey {user.firstName}! Insert your new password below.
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
          <SimpleButton title="Save" />
        </LoginWrapper>
      )}
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUser: (model, callBack) => dispatch(checkUser(model, callBack)),
  };
};

export default connect(null, mapDispatchToProps)(ChangePassword);
