import {legacy_createStore, applyMiddleware, combineReducers} from 'redux';
import {navbarReducer} from './NavbarReducer/navbarReducer'
import thunk from 'redux-thunk';
import { eventReducer } from './EventReducer/eventReducer';
import { productDetailsReducer } from './ProductDetailsPageData/productDetailsReducer';
const reducer=combineReducers({
navbarHome:navbarReducer,productDetailsReducer,eventReducer
});
export const store=legacy_createStore(reducer,applyMiddleware(thunk));