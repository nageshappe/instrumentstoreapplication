import React, { Component } from 'react'
import ProductService from '../../../services/ProductService';

export default class AddProduct extends Component {

    constructor(props){
        super(props)
            this.state={
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
     
        this.changeImageUrl=this.changeImageUrl.bind(this);
        this.saveProduct=this.saveProduct.bind(this);
    }

    saveProduct=(e)=>{
        e.preventDefault();

        let product={ productName:this.state.productName,description:this.state.description,price:this.state.price,quantity:this.state.quantity,imageUrl:this.state.imageUrl};
        console.log('product => '+JSON.stringify(product));
    
        ProductService.createProduct(product).then(res =>{
            this.props.history.push('./products');
        });
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
                <div data-testid="addInstrumentBody" className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Product</h3>
                            <div className="card-body">
                                <form>

                             

                                    <div className="form-group">
                                        <label>Product Name:</label>
                                        <input placeholder="Product Name" name="productName" className="form-control"
                                        data-testid="instrumentName" value={this.state.productName} onChange={this.changeProductName}/>

                                    </div>
                                    <div className="form-group">
                                        <label>Product Description:</label>
                                        <input placeholder="Product Description" name="productPescription" className="form-control"
                                        data-testid="instrumentDescription" value={this.state.description} onChange={this.changeProductDescription}/>

                                    </div>
                                    <div className="form-group">
                                        <label>Product Price:</label>
                                        <input placeholder="Product Price" name="price" className="form-control"
                                        data-testid="instrumentPrice" value={this.state.price} onChange={this.changeProductPrice}/>

                                    </div>
                                    <div className="form-group">
                                        <label>Product Quantity:</label>
                                        <input placeholder="Product Quantity" name="quantity" className="form-control"
                                        data-testid="instrumentQuantity" value={this.state.quantity} onChange={this.changeProductQuantity}/>

                                    </div>
                                    <div className="form-group">
                                        <label>Product Image URL:</label>
                                        <input placeholder="Product Image URL" name="imageUrl" className="form-control"
                                        data-testid="instrumentImageURL" value={this.state.imageUrl} onChange={this.changeImageUrl}/>

                                    </div>
                                   

                                    <button data-testid="addInstrumentButton" className="btn btn-success" onClick={this.saveProduct}>ADD</button>
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
