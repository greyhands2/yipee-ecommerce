import React from 'react';
import './header.styles.scss';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {selectCurrentUser} from '../../redux/user/user.selector';

import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({currentUser, hidden}) =>(
<div className='header'>
    <Link className='logo-container' to="/">
        <Logo className='logo'/>
    </Link>
    <div className='options'>
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='/contact'>
            CONTACT
        </Link>
        {
            currentUser ? <div className='option' onClick={()=> auth.signOut()}>LOG OUT</div>
            :
            <Link className='option' to='/login'>
            LOG IN
            </Link>
            
        }
        
        <CartIcon />    
       
        
        
    </div>
    {
        hidden ? null
            :
            <CartDropdown />    
    }
    
</div>
);





//multiple state selectors we use createStructuredSelector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);