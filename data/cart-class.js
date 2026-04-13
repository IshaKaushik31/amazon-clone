class Cart{
  
  cartItem;
  storageKey;
  constructor(key){
    this.storageKey=key;
    this.loadStorage();
  }

  loadStorage(){
  this.cartItem=JSON.parse(localStorage.getItem(this.storageKey));
  if(this.cartItem===null){
      this.cartItem=[{
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

  chooseDeliveryOption(productId,deliveryOptionId){
  let matchingProduct;
  this.cartItem.forEach(cartItem=>{
    if(productId===cartItem.productId){
      matchingProduct=cartItem;
      
      matchingProduct.deliveryId=deliveryOptionId;
     
    }
  });
  localStorage.setItem(this.storageKey,JSON.stringify(this.cartItems));

}

 addToCart(productId){
  let matchingItem;
    this.cartItem.forEach((item)=>{
      if(productId===item.productId){
        matchingItem=item;
      }
    });
    if(matchingItem){
      matchingItem.quantity+=1;
    }
    else{
      this.cartItem.push({
      productId:productId,
      quantity:1,
      deliveryId:'1'

    });
    } 
    localStorage.setItem(this.storageKey,JSON.stringify(this.cartItem));
}
 deleteCartItem(prodID){
  let newCart=[];
  cart.forEach((prod)=>{
    
    if(prodID!==prod.productId){
      
      newCart.push(prod);
    }

  });
  this.cartItem=newCart;
  localStorage.setItem(this.storageKey,JSON.stringify(this.cartItem));
}


}
const cart=new Cart('cart-oop');
console.log(cart);






  











  
    

  
  

  


 
