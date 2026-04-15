import{renderOrderSummary} from './checkout/cartSummary.js';
import{renderPaymentSummary} from './checkout/paymentSummary.js';
import{loadProductsFromBackend} from'../data/products.js';
import{loadCart} from'../data/cart.js';

//using Promise.all instead of just promise
Promise.all([
  new Promise((resolve)=>{
    loadProductsFromBackend(()=>{
      resolve(1);//1 just to check
    })
  }),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve(2);//2 just to check
    })
  })
]).then((values)=>{
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();

});


//using promise
// new Promise((resolve)=>{
//   loadProductsFromBackend(()=>{
//     resolve();
//   })

// }).then(()=>{
//   renderOrderSummary();
//   renderPaymentSummary();
// })

//using callback
// loadProductsFromBackend(()=>{
// renderOrderSummary();
//   renderPaymentSummary();
// })
