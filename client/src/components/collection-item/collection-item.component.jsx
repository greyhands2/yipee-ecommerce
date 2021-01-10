import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selector';

import {addItem} from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';
import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-item.styles';



const CollectionItem = ({item, addItem, user, history}) => {
    const { name, price, imageUrl } = item;
    return ( 
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}/>

        <CollectionFooterContainer> 
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <AddButton onClick={()=> user ? addItem(item) : history.push('/login') } inverted={true} >ADD TO CART</AddButton>
        </CollectionItemContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})
const mapDispatchToProps = dispatch=>({
    addItem: item => dispatch(addItem(item))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionItem));