import CartContext from "../../Context/CartContext";
import { RemoveButtondiv , Total , OrderHeading , Button } from "./styledComponent";


const CartSummary = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartListLength = cartList.length
        let total = 0
        cartList.forEach(each => {
          total += each.price * each.count
        })
  
        return (
          <RemoveButtondiv >
            <Total>
              <OrderHeading>
                Order Total: <span className="order-span">Rs {total}/- </span>
                <p className="order-total-price">
                  {cartListLength} items in cart
                </p>
                <Button type="button" >
                  Checkout
                </Button>
              </OrderHeading>
            </Total>
          </RemoveButtondiv >
        )
      }}
    </CartContext.Consumer>
  )
  
  export default CartSummary
  