import{cart} from '../../data/cart.js';
import{deliveryOptions,getDeliveryCost} from'../../data/delivery.js';
import{products,getProduct} from'../../data/products.js';
import{formatCurrency} from'../utils/money.js';
export function renderPaymentSummary(){
  let totalPrice=0;
  let deliveryPrice=0;
  cart.forEach(item=>{
    
    const product=getProduct(item.productId);
    totalPrice+=product.priceCents*item.quantity;
    

    deliveryPrice+=getDeliveryCost(item.deliveryId).deliveryPrice;
    

    
    
    
  }) ;
  const totalBeforeTax=totalPrice+deliveryPrice;
  const tax=(10/100)*totalBeforeTax;
  const orderTotal=totalBeforeTax+tax;
  console.log(orderTotal);
  console.log(tax);
  console.log(totalBeforeTax); 
  console.log(totalPrice);
  console.log(deliveryPrice);

  const html=`<div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formatCurrency(totalPrice)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(deliveryPrice)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(tax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(orderTotal)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
  
  `;
  document.querySelector('.js-payment-summary').innerHTML=html;
  

}
