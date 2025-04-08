import { createSlice } from "@reduxjs/toolkit";


const initialState={
    listOfAddtocart:[],

}

const listOfAddToCartSlice=createSlice({
    name:'listOftheAddTocart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const existID=state.listOfAddtocart.includes(action.payload)
            !existID && state.listOfAddtocart.push(action.payload)
            // state.listOfAddtocart.push(action.payload)
        },
        removeToTheCart:(state,action)=>{
        state.listOfAddtocart.splice(action.payload,1)
        }
    }
})
export const {addToCart}=listOfAddToCartSlice.actions;
export const {removeToTheCart}=listOfAddToCartSlice.actions;


export default listOfAddToCartSlice.reducer;