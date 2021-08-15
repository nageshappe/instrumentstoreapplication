import React, { Component } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AdminNavBar from "../AdminNav/AdminNav"
import ProductService from '../../../services/ProductService';
import './listProduct.css'
export default class Dashboard extends Component
{
    constructor(props)
    {
        super(props)

      this.state={
          products:[]
      }  
      this.addProduct=this.addProduct.bind(this);
      this.editProduct=this.editProduct.bind(this);
      this.deleteProduct=this.deleteProduct.bind(this);
    }

    deleteProduct(productName)
    {
        console.log(productName);

        ProductService.deleteProduct(productName).then(res=>{
            
        })
    }

    componentDidMount(){
        ProductService.getProducts().then((res)=>{
            this.setState({products: res.data});
        })

        console.log(localStorage.getItem('userid'));
        console.log(localStorage.getItem('admin'));
    }

    editProduct(productId){

        this.props.history.push(`/edit-product/${productId}`);

    }

    addProduct(){
        this.props.history.push('/add-product')
    }

    
    header()
    {
        return (
            <>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Product Image</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Product Name</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Price</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Quantity</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Delete</h4></TableCell>
            <TableCell className="hc" style={{textAlign:'center'}}><h4>Edit</h4></TableCell>
            </>
        );
    }
  
    body(){
        return this.state.products.map((products) => {
            const {productId ,imageUrl,quantity,productName , price, description}=products;
            return (
                <>
                <TableRow className="br" key={productId}>
                <TableCell className="bc"align="center"><img id="img" src={imageUrl} ></img></TableCell>
                <TableCell className="bc" component="th" scope="row">{productName}</TableCell>
                <TableCell className="bc" align="center">{price}</TableCell>
                <TableCell className="bc" align="center">{quantity}</TableCell>
                <TableCell className="bc" align="center"><Button color="danger" onClick={()=> this.deleteProduct(products.productName)}><DeleteIcon /></Button></TableCell>
                <TableCell className="bc" align="center"><Button color="danger" onClick={()=> this.editProduct(products.productId)}><CreateIcon /></Button></TableCell>
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
                <Button data-testid="addInstrumentButton" className="btn" variant="contained" color="primary" onClick={this.addProduct}>
                    <ShoppingCartIcon/>Add Products
                </Button>
                <TableContainer data-testid="adminDashboard" className="table">
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