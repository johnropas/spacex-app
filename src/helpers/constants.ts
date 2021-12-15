const API_PORT = 8080;
const BASE_URL = `https://api.spacexdata.com:${API_PORT}/v3`;

const API_ENDPOINTS = {
  LAUNCH: `${BASE_URL}/launches`,
};

const APP_ROUTES = {
  HOME: '/',
};

const CONSTANTS = {
  API_ENDPOINTS,
  APP_ROUTES,
};

export default CONSTANTS;
