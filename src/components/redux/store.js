import {configureStore} from '@reduxjs/toolkit'
import itemPriceCalcReducer from '../features/productSlice'

export const store = configureStore({
    reducer:{
        currentPriceEvaluate:itemPriceCalcReducer
    }
})