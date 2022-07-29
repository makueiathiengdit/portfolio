const storeData = (key, data) => {
  console.log(`Storing: ${key}`);
  let d = JSON.stringify(data);
  console.log(d);
  localStorage.setItem(key, JSON.stringify(data));
};

const fetchData = (key) => {
  console.log(`Fetching: ${key}`);
  return JSON.parse(localStorage.getItem(key));
};

const deleteData = (key) => {
  console.log(`Deleting: ${key}`);
  localStorage.removeItem(key);
};
export { storeData, fetchData, deleteData };
