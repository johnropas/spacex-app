
import { useLocation } from 'react-router-dom';
import _ from 'lodash';


// @ts-ignore
export const objectToQueryString = (obj: any) => _.reduce(obj, (result, value, key) => {
  return (!_.isNull(value) && !_.isUndefined(value)) ? (result += key + '=' + value + '&') : result;
}, '').slice(0, -1);

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

