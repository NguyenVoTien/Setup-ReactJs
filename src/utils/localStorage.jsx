export const SetLocalStorage = (key) => {
  const Vehicle = [
    {
      name: 'Honda',
    },
    {
      name: 'Yamaha',
    },
  ];
  return localStorage.setItem(key, Vehicle);
};
export const GetLocalStorage = (key) => {
  return localStorage.getItem(key);
};
export const ClearLocalStorage = () => {
  localStorage.clear();
};
export const DeleteLocalStorage = (key) => {
  return localStorage.removeItem(key);
};
