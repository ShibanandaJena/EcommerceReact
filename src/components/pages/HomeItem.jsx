import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentPriceCalculator } from '../features/productSlice'

function HomeItem({ item }) {
    const dispatch = useDispatch()
    const current_price = useSelector((state) => state.currentPriceEvaluate.currentPrice[item.id])

    useEffect(() => {
        dispatch(currentPriceCalculator({ id: item.id, originalPrice: item.price, discountPercentage: item.discountPercentage }))
    }, [dispatch, item.price, item.discountPercentage, item.id])
    return (

        <div className="item-container">
            <img className="item-image" src={item.images} alt="item image" />
            <div className="rating">
                {item.rating} ⭐
            </div>
            <div className="company-name">{item.brand}</div>
            <div className="item-name">{item.title}</div>
            {/* <div className="item-name">{hello()}</div> */}

            <div className="price">
                <span className="current-price">$ {current_price ? current_price.toFixed(2) : "Loading..."}</span>
                <span className="original-price">$ {item.price}</span>
                <span className="discount">({item.discountPercentage}% OFF)</span>
            </div>
            <button className="btn-add-bag" onClick={() => console.log("Clicked button")}>Add to Bag</button>
        </div>
    )
}

export default HomeItem