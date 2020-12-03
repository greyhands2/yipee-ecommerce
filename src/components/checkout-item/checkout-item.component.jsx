import React from 'react';

import {connect} from 'react-redux';


import {clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';


const CheckoutItem = ({cartItem, clearItem, addOneItem, removeOneItem}) =>{
    const {name, imageUrl, price, quantity} = cartItem;
    return (
   <div className='checkout-item'>
       <div className='image-container'>
           <img alt='item' src={imageUrl}/>
       </div>
       <span className='name'>{name}</span>
       <span className='quantity'><div className='arrow' onClick={()=> removeOneItem(cartItem)}>&#10094;&#10094;</div><span className='value'>{quantity}</span><div className='arrow' onClick={()=> addOneItem(cartItem)}>&#10095;&#10095;</div></span>
       <span className='price'>{price}</span>
       <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>
       
   </div> 
);
};

const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addOneItem: item => dispatch(addItem(item)),
    removeOneItem: item => dispatch(removeItem(item)) 
});

export default connect(null, mapDispatchToProps)(CheckoutItem); 