import axios from 'axios';

const PRODUCT_API_SIGNUP_URL="https://8080-faecbdadabccecefbedabceddbcaceeacdfbd.examlyiopb.examly.io/signup";

class SignupService{

  
    addUser(details)
    {
        return axios.post(PRODUCT_API_SIGNUP_URL,details);
    }
}

export default new SignupService()