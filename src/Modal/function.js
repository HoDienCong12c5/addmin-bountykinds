export const saveDataLocal = (key, data) => {
  // eslint-disable-next-line no-undef
  localStorage.setItem(key, JSON.stringify(data));
};

export const getDataLocal = (key) =>
  // eslint-disable-next-line no-undef
  JSON.parse(localStorage.getItem(key));
export const removeDataLocal = (key) => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem(key);
};
