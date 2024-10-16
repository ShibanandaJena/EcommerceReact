import React from 'react'

function BagSummary() {
    const priceDetails = {
        totalItem: 5,                // Total number of items
        totalMRP: 1500,              // Total MRP in rupees
        totalDiscount: 300,          // Total discount in rupees
        finalPayment: 1299           // Final amount to be paid in rupees
    };

  return (
    <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({priceDetails.totalItem} Items)</div>
    <div className="price-item">
        <span className="price-item-tag">Total MRP</span>
        <span className="price-item-value">₹{priceDetails.totalMRP}</span>
    </div>
    <div className="price-item">
        <span className="price-item-tag">Discount on MRP</span>
        <span className="price-item-value priceDetail-base-discount">-₹{priceDetails.totalDiscount}</span>
    </div>
    <div className="price-item">
        <span className="price-item-tag">Convenience Fee</span>
        <span className="price-item-value">₹99</span>
    </div>
    
    <div className="price-footer">
        <span className="price-item-tag">Total Amount</span>
        <span className="price-item-value">₹{priceDetails.finalPayment}</span>
    </div><br />
    <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
    </button>
</div>
  )
}

export default BagSummary