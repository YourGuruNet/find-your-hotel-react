import { apiCallWrapperPost, collectionList } from "../../app/api/api";
import { toast } from "react-toastify";
import userpool from "../../aws/userpool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

export const userActions = {
  SET_LAYOUT_THEME: "SET_LAYOUT_THEME",
  SET_ERROR: "SET_ERROR",
  SET_TOKEN: "SET_TOKEN",
  SET_NEW_ACCOUNT: "SET_NEW_ACCOUNT",
  CHECK_USER: "CHECK_USER",
  CHANGE_PASSWORD: "CHANGE_PASSWORD",
};

export const setLayoutTheme = (theme) => {
  return function (dispatch) {
    dispatch({
      type: userActions.SET_LAYOUT_THEME,
      payload: theme,
    });
  };
};

export const login = (model, callBack) => {
  return new Promise((resolve, reject) => {
    const user = new CognitoUser({
      Username: model.email,
      Pool: userpool,
    });

    const authDetails = new AuthenticationDetails({
      Username: model.email,
      Password: model.password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        callBack("/");
        resolve(result);
      },
      newPasswordRequired: (userAttributes) => {
        callBack("/change-password", authDetails);

        toast.warning("You need to create new password");
        resolve({ user, userAttributes });
      },
      onFailure: (err) => {
        toast.error("Login failed!");
        reject(err);
      },
    });
  });
};

export const generatePasswordLink = (model, callBack) => {
  return apiCallWrapperPost(
    userActions.SET_CHANGE_PASSWORD_LINK,
    collectionList.setNewPasswordLink,
    model,
    callBack
  );
};

export const setNewAccount = (model, callBack) => {
  return apiCallWrapperPost(
    userActions.SET_NEW_ACCOUNT,
    collectionList.addUser,
    model,
    callBack
  );
};

export const checkUser = (model, callBack) => {
  return apiCallWrapperPost(
    userActions.CHECK_USER,
    collectionList.checkUser,
    model,
    callBack
  );
};

export const changePassword = (auth, model, callBack) => {
  return new Promise((resolve, reject) => {
    const user = new CognitoUser({
      Username: auth.username,
      Pool: userpool,
    });

    const authDetails = new AuthenticationDetails({
      Username: auth.username,
      Password: auth.password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        callBack("/");
        resolve(result);
      },
      newPasswordRequired: (userAttributes, requiredAttributes) => {
        const writableAttributes = {};
        requiredAttributes.forEach((attr) => {
          if (userAttributes[attr] !== undefined) {
            writableAttributes[attr] = userAttributes[attr];
          }
        });
        user.completeNewPasswordChallenge(model.password, writableAttributes, {
          onSuccess: (result) => {
            callBack("/");
            resolve(result);
          },
          onFailure: (err) => {
            toast.error("Password change failed: " + err.message);
            reject(err);
          },
        });
      },
      onFailure: (err) => {
        toast.error("Login failed: " + err.message);
        reject(err);
      },
    });
  });
};
