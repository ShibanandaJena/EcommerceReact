import React from 'react'
import { BagSummary,BagItem } from '../Index'


function Bag() {
  const item = {
    id: 1,                             // Unique identifier for the item
    image: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',       // Path to the item image
    company: 'Brand Name',             // Company name
    item_name: 'Item Name',            // Name of the item
    current_price: 500,                // Current price of the item
    original_price: 700,               // Original price of the item
    discount_percentage: 30,           // Discount percentage
    return_period: 15,                 // Return period in days
    delivery_date: 'October 20, 2024'  // Expected delivery date
  };

  return (
    <main>
      <br />
      <div class="bag-page">
        <div class="bag-items-container">
        <BagItem item={item}></BagItem>
        </div>
        <div class="bag-summary">
          <BagSummary></BagSummary>
        </div>
      </div>
    </main>
  )
}

export default Bag