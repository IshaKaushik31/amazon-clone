import{cart} from '../../data/cart.js';
import{deliveryOptions,getDeliveryCost} from'../../data/delivery.js';
import{products,getProduct} from'../../data/products.js';
import{formatCurrency} from'../utils/money.js';
import{orders,addOrder} from '../../data/orders.js';
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

          <button class="place-order-button button-primary js-place-order">
            Place your order
          </button>
  
  `;
  document.querySelector('.js-payment-summary').innerHTML=html;
  
  document.querySelector('.js-place-order').addEventListener('click',async()=>{
    try{
    const response=await fetch('https://supersimplebackend.dev/orders',{
      method:'POST',
      headers:{
        'Content-type':'application/json'

      },
      body:JSON.stringify({
        cart:cart
      })
    });
    const order= await  response.json(); // we use await here because converting our response to json takes time
    addOrder(order);
    console.log(order);
  }
  catch{
    console.log('OOPS!Error occured');
  }
  window.location.href='orders.html';

  });
  //here we are trying to make our place order button function by making it interact with the backend using fetvh(). we have created a POST request to our backend.
  

}
