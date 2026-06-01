import{renderOrderSummary} from './checkout/cartSummary.js';
import{renderPaymentSummary} from './checkout/paymentSummary.js';
import{loadProductsFromBackend,productsFetch} from'../data/products.js';
import{loadCart,loadCartFetch} from'../data/cart.js';
import{renderCheckoutHeader} from './checkout/checkoutHeader.js';
async function loadPage(){
  try{
  await Promise.all([
    productsFetch(),
    loadCartFetch()
  ]);
  
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
}
catch(error){
  console.log('unexpected error.')
}


}
loadPage();

//using async-await instead of Promise.all
// async function loadPage(){
  //throw 'error1'; (creating manual errors) (if we throw an error then the entire code will be skipped andit go directly to catch with error=error1)
  // try{
  //   await productsFetch();
  //   await new Promise((resolve,reject)=>{
  //     // throw 'error2'; (creating manual errors for promise)
  //     loadCart(()=>{
  //       // reject('error3'); (creating error for the future)
  //       resolve(1);//1 just to check
  //     });
  //   });

  // } catch(error){
  //   console.log('unexpected error');
  // }
  //error handling in async-await
  // await productsFetch();
  // await loadCartFetch();
  // await new Promise((resolve)=>{
  //   loadCart(()=>{
  //     resolve(1);//1 just to check
  //   });
  // });
//   renderOrderSummary();
//   renderPaymentSummary();
// }
// loadPage();

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
