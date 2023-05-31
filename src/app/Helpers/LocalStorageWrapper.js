export const LocalStorageKeys = {
  TOKEN: "token",
};

const LocalStorageWrapper = {
  set: (key, value) => {
    localStorage.setItem(key, value);
  },
  get: (key) => {
    return localStorage.getItem(key);
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
};

export default LocalStorageWrapper;
