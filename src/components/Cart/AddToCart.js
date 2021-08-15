import React, { Component } from 'react'
import CartService from "../../services/CartService" 
import ProductService from '../../services/ProductService';


export default class AddToCart extends Component {

    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.productId,
                productId:'',
                productName: '',
                description: '',
                price: '',
                quantity: '',
                imageUrl: ''  
        }
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then((res)=>{
            let pro=res.data;
            this.setState({
                productId:pro.productId,
                            productName:pro.productName,
                            description:pro.description,
                            price:pro.price,
                            quantity:'1',
                            imageUrl:pro.imageUrl,
            })

            let product={productId:this.state.productId, productName:this.state.productName,description:this.state.description,price:this.state.price,quantity:this.state.quantity,imageUrl:this.state.imageUrl};
            console.log('prodcut =>'+JSON.stringify(product));
           CartService.addItemCart(product,localStorage.getItem('userid')).then(res=>{
               this.props.history.push('/cart/id');
           })
        })
    }

    render() {
        return (
            <div>
                <h1>USER CART ADDED</h1>
            </div>
        )
    }
}
