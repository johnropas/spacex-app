import axios from 'axios';
import c from '../helpers/constants';
import { objectToQueryString } from '../helpers/functions';

export function getLaunches() {
  const obj = {
    test: 'test',
  };
  const queryString = objectToQueryString(obj);
  return (
    axios({
      url: `${c.API_ENDPOINTS.LAUNCH}?limit=50&${queryString}`,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => {
        return error.response?.data;
      })
  );
}
