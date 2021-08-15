import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AdminNavBar from '../AdminNav/AdminNav';
import OrderServices from '../../../services/OrderSerivces'
import './OrdersComponent.css'
export default class Orderlist extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            items:[]
        };
    }
    componentDidMount() {
        OrderServices.getAllOrders().then((res)=>{
            this.setState({items:res.data})
        })
    }
    header()
    {
        return (
            <>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Order ID</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>User ID</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Instrument Name</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Price</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Quantity</h4></TableCell>
            </>
        );
    }
    body(){
        return this.state.items.map((item) => {
            const {orderid,productname,userid,price,quantity} = item;
            return (
                <>
                <TableRow className="br" key={orderid}>
                <TableCell className="bc" component="th" scope="row">{orderid}</TableCell>
                <TableCell className="bc" component="th" scope="row">{userid}</TableCell>
                <TableCell className="bc" align="center">{productname}</TableCell>
                <TableCell className="bc" align="center">{price}</TableCell>
                <TableCell className="bc" align="center">{quantity}</TableCell>
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
            <AdminNavBar/>
            <div>
                <TableContainer data-testid="adminOrderBody" className="table">
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