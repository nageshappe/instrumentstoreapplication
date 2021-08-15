import React,{ Component } from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button'
import UserNavbar from './UserNav';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShowMoreText from 'react-show-more-text';
import ProductService from '../../services/ProductService'
import CartService from '../../services/CartService'
// import './ProductInfo.css'
class Product extends Component{
    constructor(props){
        super(props)
        this.state={

            items:[],

            id:this.props.match.params.productId,
                productId:'',
                productName: '',
                description: '',
                price: '',
                quantity: '',
                imageUrl: ''  
        }
        this.showProduct=this.showProduct.bind(this);
        this.addItem=this.addItem.bind(this);
    }
    componentDidMount(){

        ProductService.getProducts().then((res)=>{
            this.setState({items: res.data});
        })


        ProductService.getProductById(this.state.id).then((res)=>{
            let pro=res.data;
            this.setState({
                productId:pro.productId,
                            productName:pro.productName,
                            description:pro.description,
                            price:pro.price,
                            quantity:pro.quantity,
                            imageUrl:pro.imageUrl,
            })
        })
    }

    showProduct(productId){
        this.props.history.push(`/product-info/${productId}`);
    
      }

      addItem(productId){
        this.props.history.push(`/addcart/${productId}`);
    }

    placeOrder(productName){
        console.log(productName);

        CartService.placeSingleOrder(localStorage.getItem('userid'),productName).then((res)=>{
           this.props.history.push('/orders')
        })

    }

    getItems()
    {
        return this.state.items.map((item) => {
            return (
                <>
                    <div className="div" style={{flex: 1}} onClick={()=>{this.showProduct(item.productId)}}>
                    <div key={item.productId}>
                    <Card className="card">
                        <CardActionArea>
                        <CardMedia className="media"
                            component="img"
                            alt="Furniture"
                            
                            image={item.imageUrl}
                            
                        />
                        <CardContent style={{height:'12rem'}}>
                            <Typography gutterBottom variant="h5" component="h2">
                                <ShowMoreText
                                    lines={1}
                                    more=''
                                    less=''
                                    className='content-css'
                                    anchorClass='my-anchor-css-class'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={300}
                                    
                                >{item.productName}</ShowMoreText>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <ShowMoreText
                                    lines={2}
                                    more=''
                                    less=''
                                    className='content-css'
                                    anchorClass='my-anchor-css-class'
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                    width={300}
                                    >
                                Rs. {item.price}
                                </ShowMoreText>
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                    </div>
                    </div>
                </>
            )
        })
    }
    render() {
        const mystyle = {
            color:"black",
            backgroundColor: "#ffd633",
            position: "relative",
            left:"20px",
            bottom:"0",
            float:"left"
          };
          const mystyle1 = {
            position: "relative",
            right:"20px",
            bottom:"0"
          };
        return (
            <>
            <UserNavbar/>
            <Container data-testid="instrumentHomeBody">
                <Row>
                    <Col xl={4} className="img">
                        <img className="image" src={this.state.imageUrl} id="img"></img>
                    </Col>
                    <Col xl={8}>
                    <div className="text" >
                        <h1>
                           {this.state.productName}
                        </h1>
                        <hr></hr>
                        <p className="content">
                            <h4>Rs. {this.state.price}</h4>
                            {this.state.description}
                            
                        </p>
                        <div className="text1">
                        <Button className="add" style={mystyle}variant="warning" onClick={()=> this.addItem(this.state.productId)}>Add to Cart</Button>{'   '}
                        <Button className="place" style={mystyle1}variant="primary"onClick={()=> this.placeOrder(this.state.productName)} >Place Order</Button>{' '}
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row>
                <Col xl={12}>
                <div className="extra" >
                    <h2 style={{padding:'3%'}}>Similar Products</h2>
                    <hr/>
                    <div style={{display: 'flex', flexDirection: 'row' , overflowX:'scroll',scrollBehavior:'smooth'}}>
                    {this.getItems()}
                    </div>
                </div>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }    
}
export default Product