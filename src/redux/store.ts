import { createStore, combineReducers } from 'redux';

import { categoryReducer } from './reducers/category-reducer';
import { productReducer } from './reducers/product-reducer';
import { initialState } from './initial-state';

const store = createStore(combineReducers({categories: categoryReducer, products: productReducer}), initialState as any);

export default store;