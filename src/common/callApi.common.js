import axios from 'axios';
import { BASE_URI } from '../constants/base_url';

export function callAPI(endPoint, method = 'GET', body) {
    return axios({
        method,
        url: `${BASE_URI}${endPoint}`,
        data: body
    })
}
