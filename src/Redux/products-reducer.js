export const GET_PRODUCTS = 'GET_PRODUCTS'
export const PRODUCTS_DATA_REQUEST = 'PRODUCTS_DATA_REQUEST'
export const SET_UNIT = 'SET_UNIT'
export const SET_UNIT_ALT = 'SET_UNIT_ALT'
export const SET_ID = 'SET_ID'


let initialState = {
    products: [],
    unit: null,
    id: null
}
const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case SET_UNIT:
            return {
                ...state,
                unit: 'package'
            }
        case SET_UNIT_ALT:
            return {
                ...state,
                unit: 'area'
            }
        case SET_ID:
            return {
                ...state,
                id: action.payload
            }
        default:
            return state
    }
}

export const getProducts = (payload) => ({type: GET_PRODUCTS, payload})
export const productsRequest = () => ({type: PRODUCTS_DATA_REQUEST})
export const setUnit = () => ({type: SET_UNIT})
export const setUnitAlt = () => ({type: SET_UNIT_ALT})
export const setId = (payload) => ({type: SET_ID, payload})


export default productsReducer
