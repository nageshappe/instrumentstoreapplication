import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import UserNavbar from '../UserNav/UserNav'
import './UserCart.css'
import CartService from '../../services/CartService';
export default class Cart extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            items:[]
        };
        this.deleteItem=this.deleteItem.bind(this);
    }
    componentDidMount() {
       
        CartService.getCartItems(localStorage.getItem('userid')).then((res)=>{
            this.setState({items:res.data});
        })
    }

   
    deleteItem(name){

        let product=JSON.stringify(name.productname);
       
        product.toString();

       let res=product.substr(1,product.length-2)

        console.log(localStorage.getItem('userid'));
        console.log(res);

    CartService.deleteCartItem(localStorage.getItem('userid'),res).then((res)=>{
        this.props.history.push('../home');
    })

   

    }

    placeOrder(){

        CartService.placeOrder(localStorage.getItem('userid')).then((res)=>{
            this.props.history.push('../orders');
        })
    }

   
    header()
    {
        return (
            <>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Product Name</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Price</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Quantity</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Delete</h4></TableCell>
            </>
        );
    }

    body(){
        return this.state.items.map((item) => {
            const {cartid,productname,quantity,price} = item;
            return (
                <>
                <TableRow className="br" key={cartid}>
                <TableCell className="bc" component="th" scope="row">{productname}</TableCell>
                <TableCell className="bc" align="center">{price}</TableCell>
                <TableCell className="bc" align="center">{quantity}</TableCell>
                <TableCell className="bc" align="center"><Button color="danger" onClick={()=> this.deleteItem({productname})} ><DeleteIcon /></Button></TableCell>
                </TableRow>
                </>
            )
        })
    }
    render()
    {
        const {items} = this.state;
        return (
            <>
            <UserNavbar/>
            <div>
                <TableContainer data-testid="instrumentCartBody" className="table">
                <Table className="style" aria-label="customized table">
                <TableHead className="head">
                    <TableRow className="hr">
                        {this.header()}
                    </TableRow>
                </TableHead>
                <TableBody className="body">
                    {this.body()}
                </TableBody>
                </Table>
            </TableContainer>
            <Button className="btn" variant="contained" color="primary" onClick={()=> this.placeOrder({})}>
                Place Order
            </Button>
            </div>
            </>
        );
    }
}
