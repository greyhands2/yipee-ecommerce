import globalActionTypes from './global.type';



export const loaderStart = (loading) =>({
    type: globalActionTypes.LOADER_START,
    payload: loading
});


export const loaderRemove = (loading) =>({
    type: globalActionTypes.LOADER_REMOVE,
    payload: loading
});

export const loaderMiniStart = (loading) => ({
    type: globalActionTypes.LOADER_MINI_START,
    payload: loading
});


export const loaderMiniRemove = (loading) => ({
    type: globalActionTypes.LOADER_MINI_REMOVE,
    payload: loading
});




export const clearGlobalState = () => ({
    type: globalActionTypes.CLEAR_GLOBAL_STATE
});