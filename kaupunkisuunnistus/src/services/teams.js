/* Main author: Jussi Kukkonen */
import axios from "axios";

//const baseUrl = "/api/teams";
const baseUrl = 'http://localhost:3002/api/teams'

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

// eslint-disable-next-line
export default { getAll, update };
