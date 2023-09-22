export const validate = (data) => {
  //obje diziye çevrildi & en az bir eleman null || "" kontrolü yapma
  const isValid = !Object.values(data).some((i) => i === null || i === "");

  return isValid;
};

// kullanıcıyı local storage'a ekleme
export const saveToLocale = (key, value) => {
  const str = JSON.stringify(value);
  localStorage.setItem(key, str);
};
