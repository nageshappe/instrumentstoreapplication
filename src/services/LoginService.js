import axios from 'axios';

const PRODUCT_API_LOGIN_URL="https://8080-faecbdadabccecefbedabceddbcaceeacdfbd.examlyiopb.examly.io/login";
const PRODUCT_API_USERID_URL="https://8080-faecbdadabccecefbedabceddbcaceeacdfbd.examlyiopb.examly.io//userid";

class LoginService{

  
    getUserId(email)
    {
        return axios.get(PRODUCT_API_USERID_URL+'/'+email);
    }


    checkUser(check)
    {
        return axios.post(PRODUCT_API_LOGIN_URL,check);
    }
}

export default new LoginService()