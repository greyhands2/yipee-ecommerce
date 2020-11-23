import {CartActionTypes} from './cart.types';


export const toggleCartHidden = () =>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
    // no need for payload since we do the togling in the reducer

});
