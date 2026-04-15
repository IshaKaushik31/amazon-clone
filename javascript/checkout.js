import{renderOrderSummary} from './checkout/cartSummary.js';
import{renderPaymentSummary} from './checkout/paymentSummary.js';
import{loadProductsFromBackend} from'../data/products.js';
// import "../data/cart-class.js";
// import '../data/backend-practice.js';
loadProductsFromBackend(()=>{
  renderOrderSummary();
  renderPaymentSummary();

});
