import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';


// to import local storage from redux persist
import storage from 'redux-persist/lib/storage';


import userReducer from './user/user.reducer';

import cartReducer from './cart/cart.reducer';

import directoryReducer from './directory/directory.reducer';

import shopReducer from './shop/shop.reducer';
import globalReducer from './globals/global.reducer';

const persistConfig = {
    key: 'root',
    storage,
    //white list is for the particular store we wanna persist, here since firebase handles our iser sessions we only need to  persist or cart store
    whitelist: ['cart']
};

const rootReducer = combineReducers({
        user: userReducer,
        cart: cartReducer,
        directory: directoryReducer,
        shop: shopReducer,
        global:globalReducer
    });

export default persistReducer(persistConfig, rootReducer);
// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer
// });