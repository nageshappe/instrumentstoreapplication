import axios from 'axios';

const PRODUCT_API_BASE_URL="https://8080-faecbdadabccecefbedabceddbcaceeacdfbd.examlyiopb.examly.io/home";
const PRODUCT_GETID_BASE_URL="https://8080-faecbdadabccecefbedabceddbcaceeacdfbd.examlyiopb.examly.io/product";
const PRODUCT_ADD_BASE_URL="https://8080-faecbdadabccecefbedabceddbcaceeacdfbd.examlyiopb.examly.io/admin/addProduct";
const PRODUCT_GET_BASE_URL="https://8080-faecbdadabccecefbedabceddbcaceeacdfbd.examlyiopb.examly.io/admin/productEdit";
const PRODUCT_DELETE_BASE_URL="https://8080-faecbdadabccecefbedabceddbcaceeacdfbd.examlyiopb.examly.io/admin/delete";


class ProductService{

    getProducts(){

        return axios.get(PRODUCT_API_BASE_URL);
    }

    createProduct(product){
        return axios.post(PRODUCT_ADD_BASE_URL,product);
    }

    getProductById(productId)
    {
        return axios.get(PRODUCT_GETID_BASE_URL+'/'+productId);
    }

    editProduct(product,productId){
        return axios.post(PRODUCT_GET_BASE_URL+'/'+productId,product);
    }

    deleteProduct(productName)
    {
        return axios.post(PRODUCT_DELETE_BASE_URL+'/'+productName);
    }


}

export default new ProductService()