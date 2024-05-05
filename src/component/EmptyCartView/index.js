import {Link} from 'react-router-dom'
import { CartEmptyView  , CartEmptyImg , CartEmptyHeading , ShopNowButton} from "./styledComponent"

const EmptyCartView = () => (
    <CartEmptyView className="cart-empty-view-container">
      <CartEmptyImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
        alt="empty-cart"
      />
      <CartEmptyHeading >Your Cart Is Empty</CartEmptyHeading>
  
      <Link to="/product">
        <ShopNowButton type="button">
          Shop Now
        </ShopNowButton>
      </Link>
    </CartEmptyView>
  )

export default EmptyCartView