import axios from 'axios'; 

const Api = axios.create({
    baseURL: 'https://fakestoreapi.com/'
}); 

export default Api; 