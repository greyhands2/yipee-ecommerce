import React from 'react';





import './cart-item.styles.scss';

 const CartItem = ({item:{imageUrl,price,name, quantity}}) =>(
    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} X ${price}</span>
        </div>

    </div>
);

// this component isnt connect to reselect so any time  data changes in the cart every single cart item is re rendered, since it is a functional component we can use React.memo() wrapper to fix this and if it were a class component we could use PureComponent instead of Component
export default React.memo(CartItem);



