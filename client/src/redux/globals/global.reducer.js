import globalActionTypes from './global.type';

const initState = {
    loading: false,
    loadingMini:false,
    
};



const globalReducer = (state=initState, action) => {
    switch(action.type){
        case globalActionTypes.LOADER_REMOVE:
            return {
                ...state,
                loading:action.payload

            }
            
        case globalActionTypes.LOADER_MINI_REMOVE:
            return {
                ...state,
                loadingMini: action.payload

            }
         

        case globalActionTypes.LOADER_START:
            return {
                ...state,
                loading: action.payload
            }  
            
        case globalActionTypes.LOADER_MINI_START:
            return {
                ...state,
                loadingMini: action.payload
            }
            
        case globalActionTypes.CLEAR_GLOBAL_STATE:
            return {
                ...state,
                loading: false,
                loaderMini:false,
                error: {},
                message: {},
            }    

        default:
            return state
    }
} 


export default globalReducer;