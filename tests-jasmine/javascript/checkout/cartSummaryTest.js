import{renderOrderSummary} from '../../../javascript/checkout/cartSummary.js';
import{loadStorage,cart} from '../../../data/cart.js';
import{loadProductsFromBackend,productsFetch} from'../../../data/products.js';
import{renderPaymentSummary} from'../../../javascript/checkout/paymentSummary.js';
describe('test suite:renderOrderSummary',()=>{
  beforeAll(async()=>{
    await productsFetch();
    
  });
  //   loadProductsFromBackend(()=>{
  //     done();
  //   });
  // });
  const id1="e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
  const id2="15b6fc6f-327a-4ec4-896f-486349e85a3d";
  
  beforeEach(()=>{
    document.querySelector('.js-test-container').innerHTML=`<div class='js-order-summary'></div>
    <div class=js-payment-summary></div>`;
    
    
    spyOn(localStorage,'setItem');
    spyOn(localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([{
      productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity:2,
      deliveryId:'1'
    },
    {
      productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity:1,
      deliveryId:'2'
      }]);
    });
   loadStorage();
   renderOrderSummary();
   renderPaymentSummary();
     

  })
  afterEach(()=>{
    document.querySelector('.js-test-container').innerHTML=``;

  })
  it('displays the cart',()=>{
    
    console.log(id1);
    expect(document.querySelectorAll(".js-cart-item-container").length).toEqual(2);
    expect(document.querySelector(`.js-product-quantity-${id1}`).innerText).toContain('Quantity: 2');
    expect(document.querySelector(`.js-product-quantity-${id2}`).innerText).toContain('Quantity: 1');
    expect(document.querySelector(`.js-product-name-${id1}`).innerText).toEqual('Black and Gray Athletic Cotton Socks - 6 Pairs');
    expect(document.querySelector(`.js-product-name-${id2}`).innerText).toEqual('Intermediate Size Basketball');

    expect(document.querySelector(`.js-product-price-${id1}`).innerText).toEqual('$10.90');
    expect(document.querySelector(`.js-product-price-${id2}`).innerText).toEqual('$20.95');
   
    

  })
  it('deletes an item',()=>{
    console.log('fedf');
    console.log(id2);
    console.log(document.querySelector(`.js-delete-link-${id1}`));
    document.querySelector(`.js-delete-link-${id1}`).click();
    expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1);
    expect(document.querySelector(`.cart-item-container-${id1}`)).toEqual(null);
    expect(document.querySelector(`.cart-item-container-${id2}`)).not.toEqual(null);
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(id2);

    
    //we check both whether our delete is deleting items from the cart(using cart.length) as well as from our page on the browser(using DOM)

  })
  it('test for delivery options',()=>{
    document.querySelector(`.js-delivery-option-${id1}-3`).click();
    expect(document.querySelector(`.js-delivery-option-input-${id1}-3`).checked).toBe(true);
    expect(cart.length).toEqual(2);
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].deliveryId).toEqual('3');
    expect(document.querySelector('.js-payment-money').innerText).toEqual('$42.75');
    expect(document.querySelector('.js-delivery-cost').innerText).toEqual('$14.98');
  })
  
})
