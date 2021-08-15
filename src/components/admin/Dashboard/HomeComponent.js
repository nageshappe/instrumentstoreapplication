import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShowMoreText from 'react-show-more-text';
import ProductService from '../../../services/ProductService';
import './HomeComponent.css'
import { getByDisplayValue } from '@testing-library/dom';
import {} from '../../LogoutComponent'
import UserNavbar from '../../UserNav/UserNav'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

 export default class Home extends Component {
    constructor(props)
    {
        super(props)

        this.state={
            products : []
        };

        this.showProduct=this.showProduct.bind(this);
    }
    componentDidMount() {
      ProductService.getProducts().then((res)=>{
        this.setState({products: res.data});
    })

    console.log(localStorage.getItem('userid'));
    console.log(localStorage.getItem('admin'));
      }


      showProduct(productId){
        this.props.history.push(`/product-info/${productId}`);
      }

    render() {
        const { products } = this.state;
          return (

            <ul style={{justifyContent:'center',paddingLeft:'5%'}}>
              
               <UserNavbar/>
              {products.map(product => (
                
                <div className="div" onClick={()=>{this.showProduct(product.productId)}}>
                <div key={product.productId}>
                    <Card className="card">
                    <CardActionArea>
                    <CardMedia className="media"
                        component="img"
                        alt="Instrument"
                        
                        image={product.imageUrl}
                      
                    />
                    <CardContent style={{height:'8rem'}}>
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
                                
                            >{product.productName}</ShowMoreText>
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
                            Rs.{product.price}
                            </ShowMoreText>
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                </div>
                </div>
              ))}
            </ul>
          );
        }
}

