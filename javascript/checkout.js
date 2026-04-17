import{renderOrderSummary} from './checkout/cartSummary.js';
import{renderPaymentSummary} from './checkout/paymentSummary.js';
import{loadProductsFromBackend,productsFetch} from'../data/products.js';
import{loadCart} from'../data/cart.js';

//using async-await instead of Promise.all
async function loadPage(){
  await productsFetch();
  await new Promise((resolve)=>{
    loadCart(()=>{
      resolve(1);//1 just to check
    });
  });
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

//using Promise.all instead of just promise
// Promise.all([
//   new Promise((resolve)=>{
//     loadProductsFromBackend(()=>{
//       resolve(1);//1 just to check
//     })
//   }),
//   productsFetch(),
//   new Promise((resolve)=>{
//     loadCart(()=>{
//       resolve(2);//2 just to check
//     })
//   })
// ]).then((values)=>{ //values will have 1 and 2 
//   console.log(values);
//   renderOrderSummary();
//   renderPaymentSummary();

// });


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
