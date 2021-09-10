import React from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) =>(
    <div className='checkout-page'>
       <div className='checkout-header'>

           <div className='header-block'>
                <span>PRODUCT</span>
           </div>

           <div className='header-block'>
                <span>DESCRIPTION</span>
           </div>

           <div className='header-block'>
                <span>QUANTITY</span>
           </div>

           <div className='header-block'>
                <span>PRICE</span>
           </div>

           <div className='header-block'>
                <span>REMOVE</span>
           </div>

       </div>
       {
           cartItems.map(cartItem=> <CheckOutItem key={cartItem.id} cartItem={cartItem}/>)
       }
       <div className='total'>
           <span>TOTAL: ${total}</span>
       </div>
       <div className='test-warning'>
        *Please Use The Following Test Credit Card For Payment
        <br />
        4242 4242 4242 4242 - Exp: Any Valid in the Future From Your Current Time  e.g i built this web app nov 2020 so i could test with 12/20, in your case use any day ahead of your current day and year
        CVV: 123
       </div>
       <StripeCheckoutButton price={total} />
       
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);