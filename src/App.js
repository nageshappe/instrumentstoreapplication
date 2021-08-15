import './App.css';
// import ListProductComponent from './components/ListProductComponent';
import Dashboard from "./components/admin/Dashboard/Dashboard"
// import Navbar from './components/UserNav/UserNav'
import {BrowserRouter as Router,Route , Switch} from 'react-router-dom'
import AddProduct from './components/admin/AddProduct/AddProduct';
import EditProductComponent from './components/EditProductComponent';
import Orderlist from './components/admin/Orderlist/Orderlist';
// import Dashboard from "./components/admin/Dashboard/Dashboard" 
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import LogoutComponent from './components/LogoutComponent'
import  ProductInfo from './components/UserNav/ProductInfo';
import UserOrder from './components/UserOrder/UserOrder';
import Cart from './components/Cart/Cart';
import AddToCart from './components/Cart/AddToCart';
import DeleteCart from './components/Cart/DeleteCart';
import Protected from './components/Protected'
import ProtectedAdmin from './components/ProtectedAdmin';
import Home from './components/Home/Home';


function App() {
  return (
<>
      <Router>
      <Switch>
        <Route path ="/" exact component={Login}></Route>
        
        <Protected path='/home' exact component ={Home} />
        <Route path ="/login"  component={Login}></Route>
        <Route path ="/signup"  component={Signup}></Route>
        <Route path ="/logout"  component={LogoutComponent}></Route>
        <ProtectedAdmin path ="/products"  component={Dashboard}/>
        <ProtectedAdmin path ="/admin"  component={Dashboard}/>
        <Protected path ="/cart/id"  component={Cart}/>
        <ProtectedAdmin path="/delete/:productId" component={Dashboard}/>
        <Protected path="/deletecart/:productName" component={DeleteCart}/>
        <Protected path='/product-info/:productId' exact component={ProductInfo}/>
        <Protected path='/addcart/:productId' exact component={AddToCart}/>
        <Protected path ="/orders" component={UserOrder}/>
        <ProtectedAdmin path ="/allorders" component={Orderlist}/>
        <ProtectedAdmin path ="/add-product" component={AddProduct}/>
        <ProtectedAdmin path ="/edit-product/:productId" component={EditProductComponent}/>

      </Switch>
    
    </Router>
    </>
  );
}

export default App;
