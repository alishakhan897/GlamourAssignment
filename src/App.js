// App.js
import React, { Component } from 'react';
import { Redirect , Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CartContext from './Context/CartContext';
import Cart from './component/Cart';
import Signup from './component/signup';
import LoginPage from './component/login';
import ProtectedRoute from './component/ProtectedRoute';
import NotFound from './component/NotFound';
import Home from './component/home';
import Product from './component/product';
import AddForm from './component/AddProduct';
import ProductDetailUser from './component/ProductDetailsUser'
import ProductDeatils from './component/ProductItemDetail'
import EditProfile from './component/EditProfile';
import './App.css';

class App extends Component {
  state = {
    cartList: JSON.parse(localStorage.getItem('cartList')) || [],
  };

 
  addCartItem = (product) => {
    const { cartList } = this.state;
    const existingProductIndex = cartList.findIndex(item => item.id === product.id);
  
    if (existingProductIndex !== -1) {
      // Product already exists in the cart, update its quantity
      const updatedCartList = [...cartList];
      updatedCartList[existingProductIndex].count += product.count;
  
      this.setState({ cartList: updatedCartList }, () => this.updateLocalStorage());
    } else {
      // Product doesn't exist in the cart, add it
      this.setState(
        (prevState) => ({ cartList: [...prevState.cartList, product] }),
        () => this.updateLocalStorage()
      );
    }
  };
  

  removeCartItem = (id) => {
    this.setState(
      (prevState) => ({
        cartList: prevState.cartList.filter((item) => item.id !== id),
      }),
      () => this.updateLocalStorage()
    );
    
  };

  updateLocalStorage = () => {
    localStorage.setItem('cartList', JSON.stringify(this.state.cartList));
  };

  incrementCartItemQuantity = id => {
    this.setState(prev => ({
      cartList: prev.cartList.map(each => {
        if (id === each.id) {
          const updatedQuantity = each.count + 1
          return { ...each, count: updatedQuantity }
        }
        return each
      }),
    }))
  }

  decrementCartItemQuantity = id => {
    this.setState(prev => ({
      cartList: prev.cartList.map(each => {
        if (id === each.id) {
          if (each.count > 1) {
            const DecreaseQuantity = each.count - 1
            return { ...each, count: DecreaseQuantity }
          }
        }
        return each
      }),
    }))
  }

  removeAllCartItems = () => {
    this.setState({ cartList: [] })
  }


  render() {
    const { cartList } = this.state
  

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          removeAllCartItems: this.removeAllCartItems,
        }}
      >
       <Router>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/add" component={AddForm} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute exact path="/product" component={Product} />
          <ProtectedRoute exact path="/products" component={ProductDetailUser} />
          <ProtectedRoute exact path="/products/:id" component={ProductDeatils} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <ProtectedRoute exact path="/edit-profile" component={EditProfile} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
        </Router>
      </CartContext.Provider>
    )
  }

}
;

export default App;
