/* Main author: Jussi Kukkonen */
import axios from "axios";

//const baseUrl = "/api/teams";
const baseUrl = 'http://localhost:3002/api/teams'

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const removeAll = () => {
  const request = axios.delete(baseUrl)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

// eslint-disable-next-line
export default { getAll, create, removeAll, update };
