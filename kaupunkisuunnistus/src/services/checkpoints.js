/* Main author: Jussi Kukkonen */
import axios from "axios";

// const baseUrl = "/api/locations" // Tarkista miten tää saatiin toimimaan
const baseUrl = 'http://localhost:3002/api/locations'

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data);
};

// eslint-disable-next-line
export default { getAll, update };
