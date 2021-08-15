import axios from 'axios';

const CART_BASE_URL="https://8080-faecbdadabccecefbedabceddbcaceeacdfbd.examlyiopb.examly.io/cart";
const CARTADD_BASE_URL="https://8080-faecbdadabccecefbedabceddbcaceeacdfbd.examlyiopb.examly.io/home";
const CARTDELETE_BASE_URL="https://8080-faecbdadabccecefbedabceddbcaceeacdfbd.examlyiopb.examly.io/delete";
const CARTORDER_BASE_URL="https://8080-faecbdadabccecefbedabceddbcaceeacdfbd.examlyiopb.examly.io/placeOrder";


class CartService{

    getCartItems(userid){

        return axios.get(CART_BASE_URL+'/'+userid);
    }

    addItemCart(product,userid){

        return axios.post(CARTADD_BASE_URL+'/'+userid,product);
    }
  
   deleteCartItem(userid,product)
   {
       return axios.post(CARTDELETE_BASE_URL+'/'+userid+'/'+product);
   }

   placeOrder(userid)
   {
       return axios.post(CARTORDER_BASE_URL+'/'+userid);
   }

   placeSingleOrder(userid,productname)
   {
       return axios.post(CARTORDER_BASE_URL+'/'+userid+'/'+productname);
   }
}

export default new CartService()