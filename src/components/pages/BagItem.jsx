import React from 'react'

function BagItem({ item }) {
    return (
        <>
            <div className="bag-item-container">
                <div className="item-left-part">
                    <img className="bag-item-img" src={item.image} alt={item.item_name} />
                </div>
                <div className="item-right-part">
                    <div className="company">{item.company}</div>
                    <div className="item-name">{item.item_name}</div>
                    <div className="price-container">
                        <span className="current-price">₹ {item.current_price}</span>
                        <span className="original-price">₹ {item.original_price}</span>
                        <span className="discount-percentage"> ({item.discount_percentage}% OFF)</span>
                    </div>
                    <div className="return-period">
                        <span className="return-period-days">{item.return_period} days</span> return available
                    </div>
                    <div className="delivery-details">
                        Delivery by
                        <span className="delivery-details-days"> {item.delivery_date}</span>
                    </div>
                </div>
                <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
            </div>
        </>
    )
}

export default BagItem