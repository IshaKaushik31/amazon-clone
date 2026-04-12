function Cart(storageKey){
  const cart={
  cartItem:undefined,

  loadStorage:function(){
  this.cartItem=JSON.parse(localStorage.getItem(storageKey));
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
  },

  chooseDeliveryOption:function(productId,deliveryOptionId){
  let matchingProduct;
  this.cartItem.forEach(cartItem=>{
    if(productId===cartItem.productId){
      matchingProduct=cartItem;
      
      matchingProduct.deliveryId=deliveryOptionId;
     
    }
  });
  localStorage.setItem(storageKey,JSON.stringify(this.cartItems));

},

 addToCart:function(productId){
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
    localStorage.setItem(storageKey,JSON.stringify(this.cartItem));
},
 deleteCartItem:function(prodID){
  let newCart=[];
  cart.forEach((prod)=>{
    
    if(prodID!==prod.productId){
      
      newCart.push(prod);
    }

  });
  this.cartItem=newCart;
  localStorage.setItem(storageKey,JSON.stringify(this.cartItem));
}


}
return cart;

}


const cart=Cart('oop');
const businessCart=Cart('business');

cart.loadStorage();
businessCart.loadStorage();
console.log(cart);
console.log(businessCart);








  
    

  
  

  


 
