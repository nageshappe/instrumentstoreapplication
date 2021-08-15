import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import UserNavbar from '../UserNav/UserNav'
import OrderService from '../../services/OrderSerivces'
import './UserOrders.css'
export default class UserOrder extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            items:[]
        };
    }
    componentDidMount() {
       
        OrderService.getOrdersById(localStorage.getItem('userid')).then((res)=>{
            this.setState({items:res.data});
        })
    }
    header()
    {
        return (
            <>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Product Name</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Price</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Quantity</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Total Price</h4></TableCell>
            </>
        );
    }
    body(){
        return this.state.items.map((item) => {
            const {orderid,productname,price,quantity,totalprice} = item;
            return (
                <>
                <TableRow className="br" key={orderid}>
                <TableCell className="bc" component="th" scope="row">{productname}</TableCell>
                <TableCell className="bc" align="center">{price}</TableCell>
                <TableCell className="bc" align="center">{quantity}</TableCell>
                <TableCell className="bc" align="center">{totalprice}</TableCell>
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
                <TableContainer data-testid="instrumentOrderBody" className="table">
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
            </div>
            </>
        );
    }
}