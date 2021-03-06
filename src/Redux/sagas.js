import {call, fork, put, takeEvery} from "@redux-saga/core/effects";
import {getProducts, PRODUCTS_DATA_REQUEST} from "./products-reducer";
import {productsAPI} from "../api/api";

//root saga
export function* rootSaga() {
    yield fork(productsWatcher)
}

//products
function* productsWatcher() {
    yield takeEvery(PRODUCTS_DATA_REQUEST, productsSaga)
}

function* productsSaga() {
    try {
        const response = yield call(productsAPI.getProducts)
        if (response.data) {
            yield put(getProducts(response.data))
        } else {
            throw new Error('Something goes wrong')
        }
    } catch (e) {
        alert(e)
    }

}
