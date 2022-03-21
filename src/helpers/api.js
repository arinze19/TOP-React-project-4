import axios from 'axios';

const api = axios.create()

api.defaults.baseURL = 'http://localhost:5151/api/v1'

// 'https://react-project-4-api.herokuapp.com/api/v1';
api.defaults.timeout = 8000

export default api;
