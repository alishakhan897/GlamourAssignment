
import CartContext from "../../Context/CartContext";
import EmptyCartView from "../EmptyCartView";
import { CartContainer , CartContentContainer , CartHeading , RemoveButtonDiv , RemoveButton} from "./styledComponent";
import Navbar from "../Navbar"; 
import CartSummary from "../CartSummary";
import CartListView from "../CartListView";

const Cart = () => {
    return (
        <CartContext.Consumer>
            {value => {
                const { cartList, removeAllCartItems } = value;
                const showEmptyView = cartList.length === 0;

                // TODO: Update the functionality to remove all the items in the cart

                const RemoveAllItemInCart = () => {
                    removeAllCartItems();
                };

                return (
                    <>
                        <Navbar />
                        <CartContainer>
                            {showEmptyView ? (
                                <EmptyCartView />
                            ) : (
                                <CartContentContainer>
                                    <CartHeading>Shopping Cart</CartHeading>
                                    <RemoveButtonDiv>
                                        <RemoveButton
                                            type="button"
                                           
                                            onClick={RemoveAllItemInCart}
                                        >
                                            Remove all
                                        </RemoveButton>
                                    </RemoveButtonDiv>
                                    <CartListView />
                                    <CartSummary />
                                </CartContentContainer>
                            )}
                        </CartContainer>
                    </>
                );
            }}
        </CartContext.Consumer>
    );
};

export default Cart;
