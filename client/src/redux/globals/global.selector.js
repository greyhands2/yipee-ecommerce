import {createSelector} from 'reselect';


const selectGlobal = state => state.global;


export const loading = createSelector([selectGlobal], (global) => global.loading);

export const loadingMini = createSelector([selectGlobal], (global) => global.loadingMini);


