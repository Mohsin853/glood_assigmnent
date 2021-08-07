import {variables} from './Variables'
import axios from 'axios';

const { API_URL}  =  variables;
const subscribe = (payload) => axios.post(`${API_URL}/subscriber`, payload);

export default {
    subscribe
}
