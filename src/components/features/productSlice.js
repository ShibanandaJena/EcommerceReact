import { createSlice } from "@reduxjs/toolkit";

const itemPriceCalcSlice = createSlice({
    name:"priceCalculator",
    initialState:{
        currentPrice:{}
    },
    reducers:{
        currentPriceCalculator: (state,action)=>{
            const {id,originalPrice , discountPercentage} = action.payload

            state.currentPrice[id] = originalPrice - (originalPrice*(discountPercentage/100))
        }
    }
})

export const {currentPriceCalculator} = itemPriceCalcSlice.actions

export default itemPriceCalcSlice.reducer