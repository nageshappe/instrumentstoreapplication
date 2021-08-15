import React, { Component } from 'react'
// import CartService from '../../services/CartService';
// import ProductService from '../../services/ProductService';


export default class DeleteCart extends Component {

    constructor(props){
        super(props)
        this.state={
            
        }
            
     
    }


    componentDidMount(){

        let nm=this.state.name;

        console.log(nm);


    }


    render() {
        return (
            <div>
                <h1>DELETE NAME</h1>
            </div>
        )
    }
}
