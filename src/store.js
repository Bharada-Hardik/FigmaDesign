import { configureStore } from "@reduxjs/toolkit";
import listOfAddToCartReducer from './ListOfAddToCartReducer'

const store = configureStore({

    reducer: {
        listOfAddtocart: listOfAddToCartReducer
    }
})
export default store;