import {applyMiddleware, combineReducers, createStore} from "redux";
import productsReducer from "./products-reducer";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./sagas";



const sagaMiddleWare = createSagaMiddleware()

let rootReducer = combineReducers({
    productsData: productsReducer
})
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))
window.store = store

sagaMiddleWare.run(rootSaga)

export default store
