import  axios from 'axios';
import { setupInterceptorsTo } from './interceptors';

const baseInstance = axios.create({
     baseURL: process.env.baseApiUrl
});

export default setupInterceptorsTo(baseInstance);