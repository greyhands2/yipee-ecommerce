import React from 'react';
import {HeaderContainer, LogoContainer, OptionLink, OptionsContainer, ImageStyles, NameContainer, MainHeaderContainer} from './header.styles';


import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {selectCurrentUser} from '../../redux/user/user.selector';
import {signOutStart} from '../../redux/user/user.actions';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
// import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({currentUser, hidden, startSignOut}) =>(
    <MainHeaderContainer>
    <HeaderContainer>
    <LogoContainer to="/">
        {/* <Logo className='logo'/> */}
        
        <ImageStyles src="data:image/png;base64,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"/>
        <NameContainer to="/">Osas'Yipee</NameContainer> 
       
    </LogoContainer>
    
    <OptionsContainer>
        <OptionLink to='/shop'>
            SHOP
        </OptionLink>
        {/* <OptionLink to='/contact'>
            CONTACT
        </OptionLink> */}
        {
            currentUser ? <OptionLink as='div' onClick={()=> startSignOut()}>LOG OUT</OptionLink>
            :
            <OptionLink to='/login'>
            LOG IN
            </OptionLink>
            
        }
        
        <CartIcon />    
       
        
        
    </OptionsContainer>
    {
        hidden ? null
            :
            <CartDropdown />    
    }
    
</HeaderContainer>
</MainHeaderContainer>
);





//multiple state selectors we use createStructuredSelector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch =>({
    startSignOut: () => dispatch(signOutStart())
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);