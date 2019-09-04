import axios from 'axios'

const instance = axios.create();

instance.defaults.baseURL = 'https://identitytoolkit.googleapis.com/v1';
// instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;