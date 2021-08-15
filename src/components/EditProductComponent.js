 import React, { Component } from 'react'
 import ProductService from '../services/ProductService';
 
 export default class EditProductComponent extends Component {

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

        this.changeProductName=this.changeProductName.bind(this);
        this.changeProductDescription=this.changeProductDescription.bind(this);
        this.changeProductPrice=this.changeProductPrice.bind(this);
        this.changeProductPrice=this.changeProductPrice.bind(this);
        this.changeProductId=this.changeProductId.bind(this);
        this.changeImageUrl=this.changeImageUrl.bind(this);
        this.editProduct=this.editProduct.bind(this);
    }

    componentDidMount(){
        ProductService.getProductById(this.state.id).then((res)=>{
            let pro=res.data;
            this.setState({
                            productId:pro.productId,
                            productName:pro.productName,
                            description:pro.description,
                            price:pro.price,
                            quantity:pro.quantity,
                            imageUrl:pro.imageUrl,
            });
        });
    }

    editProduct=(e)=>{
        e.preventDefault();

        let product={productId:this.state.productId, productName:this.state.productName,description:this.state.description,price:this.state.price,quantity:this.state.quantity,imageUrl:this.state.imageUrl};
        console.log('product => '+JSON.stringify(product));

        ProductService.editProduct(product,this.state.productId).then( res=>{

            this.props.history.push('/products');
        });
    
    }


    changeProductId=(event)=>{
        this.setState({productId:event.target.value});
    }

    changeProductName=(event)=>{
        this.setState({productName : event.target.value});
    }

    changeProductDescription=(event)=>{
        this.setState({description : event.target.value});
    }
    changeProductPrice=(event)=>{
        this.setState({price : event.target.value});
    }
    changeProductQuantity=(event)=>{
        this.setState({quantity : event.target.value});
    }
    changeImageUrl=(event)=>{
        this.setState({imageUrl : event.target.value});
    }
    
    
    

    cancel(){
        this.props.history.push('/products');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Edit Product</h3>
                            <div className="card-body">
                                <form>

                                

                                    <div className="form-group">
                                        <label>Product Name:</label>
                                        <input placeholder="Product Name" name="productName" className="form-control"
                                        value={this.state.productName} onChange={this.changeProductName}/>

                                    </div>
                                    <div className="form-group">
                                        <label>Product Description:</label>
                                        <input placeholder="Product Description" name="productPescription" className="form-control"
                                        value={this.state.description} onChange={this.changeProductDescription}/>

                                    </div>
                                    <div className="form-group">
                                        <label>Product Price:</label>
                                        <input placeholder="Product Price" name="price" className="form-control"
                                        value={this.state.price} onChange={this.changeProductPrice}/>

                                    </div>
                                    <div className="form-group">
                                        <label>Product Quantity:</label>
                                        <input placeholder="Product Quantity" name="quantity" className="form-control"
                                        value={this.state.quantity} onChange={this.changeProductQuantity}/>

                                    </div>

                                    <div className="form-group">
                                        <label>Product Image URL:</label>
                                        <input placeholder="Product ImageURL" name="imageUrl" className="form-control"
                                        value={this.state.imageUrl} onChange={this.changeProductQuantity}/>

                                    </div>
                              
                              
                                   

                                    <button className="btn btn-success" onClick={this.editProduct}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
                
            </div>
        )
    }
}