import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import { List , ImageDetailed , CartItemDetailed , CartItemProductDetail ,
     CardProductTitle , CardQuantityContainer , ButtonController , CartQuantity , TotalPrice, CartTotalPrice, RemoveButton , Delete} from './styledComponent'
import CartContext from '../../Context/CartContext'


const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {id, title, price, imageUrl , count} = cartItemDetails
      const onRemoveCartItemscross = () => {
        removeCartItem(id) 
      
      }

      const OnIncreaseButton = () => {
        incrementCartItemQuantity(id)
      }

      const OnDecreaseButton = () => {
        decrementCartItemQuantity(id)
      }
      // TODO: Update the functionality to increment and decrement quantity of the cart item

      return (
       
       <List>
          <ImageDetailed src={imageUrl} alt={title} />
           <CartItemDetailed>
             <CartItemProductDetail>
              <CardProductTitle>{title}</CardProductTitle>
             </CartItemProductDetail>
             <CardQuantityContainer>
                <ButtonController    
                type="button"
                data-testid="plus"
                aria-label="Increase Quantity"
                onClick={OnIncreaseButton}>
                <BsPlusSquare color="#52606D" size={15} />
                </ButtonController>
                <CartQuantity>{count}</CartQuantity>
                <ButtonController    
                type="button"
                data-testid="minus"
                aria-label="Decrease Quantity"
                onClick={OnDecreaseButton}>
                <BsDashSquare color="#52606D" size={15} />
                </ButtonController>
             </CardQuantityContainer>
            <TotalPrice>
                <CartTotalPrice>
                   Rs {price*count} /-
                </CartTotalPrice>
                <RemoveButton 
                 type="button"
                data-testid="remove"
                onClick={onRemoveCartItemscross}>
                    Remove
                </RemoveButton>
            </TotalPrice>
           </CartItemDetailed>
           <Delete 
             type="button"
             data-testid="remove"
             aria-label="Delete Item"
             onClick={onRemoveCartItemscross}
           
           >
         
            <AiFillCloseCircle color="#616E7C" size={20} />
           </Delete>
       </List>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
