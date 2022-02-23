import axios from "axios";
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization : 'Client-ID r8KxMS_1-asdL60M6Pz-vCeQr5r23ILdq9jYLwvlNHk'
    }
 }
); 