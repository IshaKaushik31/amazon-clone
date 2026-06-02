export let cart;
loadStorage();
export function loadStorage(){
  cart=JSON.parse(localStorage.getItem('cart'));
  if(cart===null){
      cart=[{
      productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity:2,
      deliveryId:'1'
    },
    {
      productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity:1,
      deliveryId:'2'
    }];
    }
  }



export function chooseDeliveryOption(productId,deliveryOptionId){
  if(deliveryOptionId==='1' || deliveryOptionId==='2'|| deliveryOptionId==='3'){
    let matchingProduct;
  cart.forEach(cartItem=>{
    if(productId===cartItem.productId){
      matchingProduct=cartItem;
      
      matchingProduct.deliveryId=deliveryOptionId;
     
    }
  });
  if(matchingProduct===undefined) return;
  localStorage.setItem('cart',JSON.stringify(cart));

  }
  else{
    return;
  }
  

}


export function addToCart(productId, quantity){
  let matchingItem;
    cart.forEach((item)=>{
      if(productId===item.productId){
        matchingItem=item;
      }
    });
    if(matchingItem){
      matchingItem.quantity+=quantity;
    }
    else{
      cart.push({
      productId:productId,
      quantity:quantity,
      deliveryId:'1'

    });
    }
    localStorage.setItem('cart',JSON.stringify(cart));
}
export function deleteCartItem(prodID){
  let newCart=[];
  cart.forEach((prod)=>{
    
    if(prodID!==prod.productId){
      
      newCart.push(prod);
    }

  });
  cart=newCart;
  localStorage.setItem('cart',JSON.stringify(cart));
}
export function updateCartQuantity(productId, newQuantity) {
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      cartItem.quantity = newQuantity;
    }
  });
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function calculateCartQuantity(){
  let quant=0;
  cart.forEach(item=>{
    quant+=item.quantity;
  })
  return quant;
}
export function loadCart(fun){
  const xhr= new XMLHttpRequest();
  xhr.addEventListener('load',()=>{
    console.log(xhr.response);
    fun();

  });
  xhr.open('GET','https://supersimplebackend.dev/cart');
  xhr.send();

}
export async function loadCartFetch(){
  const response=await fetch('https://supersimplebackend.dev/cart');
  const cart=await response.text();
  console.log(cart);
  return cart;
}






  
    

  
  

  


 
