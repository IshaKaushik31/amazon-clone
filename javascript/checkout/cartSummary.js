import {cart,deleteCartItem,chooseDeliveryOption} from '../../data/cart.js';
import {products} from '../../data/products.js';
import {formatCurrency} from '../utils/money.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {deliveryOptions} from '../../data/delivery.js';
import{renderPaymentSummary} from './paymentSummary.js';


export function renderOrderSummary(){
let cartHTML='';
cart.forEach((cartItem)=>{
  const productId=cartItem.productId;
  let matchingProduct;
  products.forEach((product)=>{
    if(product.id===productId){
      matchingProduct=product;
    }
  });
  let deliveryOption;
  deliveryOptions.forEach((option)=>{
    if(cartItem.deliveryId===option.deliveryId){
      deliveryOption=option;
    }
  });

  let currDate=dayjs();
  let optionDays=currDate.add(deliveryOption.deliveryDays,'days');
  let formatOption=optionDays.format('dddd, MMMM D');



  cartHTML+=`<div class="order-summary">
          <div class="js-cart-item-container cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: ${formatOption}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="js-product-quantity-${matchingProduct.id} product-quantity">
                  <span>
                    Quantity: <span class=quantity-label-">${cartItem.quantity}</span>
                  </span>
                  <span class="js-update-link update-quantity-link link-primary">
                    Update
                  </span>
                  <span data-delete-link='${matchingProduct.id}' class="js-delete-link delete-quantity-link link-primary js-delete-link-${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${delivery(matchingProduct,cartItem)}
                
                
          
              </div>
            </div>
          </div>

          `;
});
function delivery(matchingProduct,cartItem){
  let html=``;
  let currDate=dayjs();
  
  deliveryOptions.forEach((option)=>{
    let optionDays=currDate.add(option.deliveryDays,'days');
    let formatOption=optionDays.format('dddd, MMMM D');
    let shippingStr='';
    const isChecked=option.deliveryId===cartItem.deliveryId;
    
    if(option.deliveryDays===7){
      shippingStr='FREE shipping';

    }
    else if(option.deliveryDays===3){
      shippingStr=`$${formatCurrency(option.deliveryPrice)} - shipping`;
    }
    else{
      shippingStr=`$${formatCurrency(option.deliveryPrice)} - shipping`;
    }
    
    html+=`<div class="delivery-option js-delivery-option"
    data-product-id=${matchingProduct.id}
    data-delivery-id=${option.deliveryId}>
                  <input type="radio" 
                  ${isChecked?'checked':''}
                  
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      ${formatOption}
                    </div>
                    <div class="delivery-option-price">
                      ${shippingStr}
                    </div>
                  </div>
                </div>`;

               
  });
  return html;

}
document.querySelector('.js-order-summary').innerHTML=cartHTML;

document.querySelectorAll('.js-delete-link').
 forEach((link)=>{
  link.addEventListener('click',()=>{
    let prodID=link.dataset.deleteLink;
    deleteCartItem(prodID);
    const cont=document.querySelector(`.cart-item-container-${prodID}`);
    cont.remove();
    renderPaymentSummary();
    
    

  });

 });

 document.querySelectorAll('.js-delivery-option').forEach(option=>{
  option.addEventListener('click',()=>{
    const productId=option.dataset.productId;
    const deliveryId=option.dataset.deliveryId;
    chooseDeliveryOption(productId,deliveryId);
    renderOrderSummary();
    renderPaymentSummary();
  });
 });
}



