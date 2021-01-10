import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';


import {selectCartItems} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';
import CustomButton from '../custom-button/custom-button.component';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';

import CardItem from '../cart-item/cart-item.component';
const CartDropdown = ({cartItems, history, dispatch, user}) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {

                cartItems.length ? 
                cartItems.map(cartItem=> <CardItem key={cartItem.id} item={cartItem}/>) : <span className='empty-message'>YOUR CART IS EMPTY</span>
            }
        </div>

    <CustomButton onClick={()=>{
    dispatch(toggleCartHidden());    
    user ? history.push('/checkout'): history.push('/login');
    }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    user: selectCurrentUser
});
//also not that whenever we do not pass a mapDispatchToProps to connect() it still passes a dispatch to props under scene so for the case of toggling the cart hidden we wanna do once we click goto checkout button we can still use dispatch implicitly passed to props by connect instead of having to create a mapDispatchToProps function explicitly, just another way of doing stuff here

//withRouter is the reason the connect() function and whatever it carries would have acces to the history props we are using to navigate to the checkout page
export default withRouter(connect(mapStateToProps)(CartDropdown));