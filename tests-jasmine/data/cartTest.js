import{addToCart,cart,loadStorage,deleteCartItem,chooseDeliveryOption} from '../../data/cart.js';
describe('test suite:add to cart function',()=>{
  beforeEach(()=>{
    spyOn(localStorage,'setItem');

  });
  it('adding an item that already exists',()=>{
    
    spyOn(localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([{
        productId:"3ebe75dc-64d2-4137-8860-1f5a963e534b",
        quantity:1,
        deliveryId:'1'
      }]);
    });
    loadStorage();
    addToCart("3ebe75dc-64d2-4137-8860-1f5a963e534b");
    expect(cart[0].quantity).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
      productId:"3ebe75dc-64d2-4137-8860-1f5a963e534b",
        quantity:2,
        deliveryId:'1'

    }]));
  });
    
    
 
  it('add a new item',()=>{
    

    spyOn(localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([]);
    });
    console.log()
    loadStorage();
    addToCart("8c9c52b5-5a19-4bcb-a5d1-158a74287c53");
    expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
      productId:"8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
      quantity:1,
      deliveryId:'1'

    }]));
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual('8c9c52b5-5a19-4bcb-a5d1-158a74287c53');
    expect(cart[0].quantity).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });
});
describe('suite for delete from cart function',()=>{
    beforeEach(()=>{
      spyOn(localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([{   
      productId:"8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
      quantity:1,
      deliveryId:'1'
      }]);
      
    })
    spyOn(localStorage,'setItem');
    loadStorage();

    })
    
    it('remove a product id that is in the cart',()=>{
      deleteCartItem("8c9c52b5-5a19-4bcb-a5d1-158a74287c53");
      expect(cart.length).toEqual(0);
      expect(cart[0]).toEqual(undefined);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([

      ]));
    })
    it('remove product id not present in the cart',()=>{
      deleteCartItem("3ebe75dc-64d2-4137-8860-1f5a963e534b");
      expect(cart.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{   
      productId:"8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
      quantity:1,
      deliveryId:'1'
      }

      ]));

    })



  })
  describe('update delivery option',()=>{
    beforeEach(()=>{
      
      spyOn(localStorage,'getItem').and.callFake(()=>{
        return JSON.stringify([{
          productId:"8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
          quantity:1,
          deliveryId:'1'
        },
        {
          productId:"3ebe75dc-64d2-4137-8860-1f5a963e534b",
          quantity:1,
          deliveryId:'1'
        }])
          })
        
        spyOn(localStorage,'setItem');
        loadStorage();
      })
    it('checking update delivery option',()=>{
      chooseDeliveryOption("8c9c52b5-5a19-4bcb-a5d1-158a74287c53",'3');
      expect(cart[0].deliveryId).toEqual('3');
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
        productId:"8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
        quantity:1,
        deliveryId:'3'
      },
      {
       productId:"3ebe75dc-64d2-4137-8860-1f5a963e534b",
       quantity:1,
       deliveryId:'1' 
      }
    ]))
    })
    it('test for when the product is not in the cart',()=>{
      chooseDeliveryOption("e43638ce-6aa0-4b85-b27f-e1d07eb678c6",'2');
      expect(cart.length).toEqual(2);
      expect(cart[0].productId).toEqual("8c9c52b5-5a19-4bcb-a5d1-158a74287c53");
      expect(cart[1].productId).toEqual("3ebe75dc-64d2-4137-8860-1f5a963e534b");
      expect(localStorage.setItem).toHaveBeenCalledTimes(0);
    })
    it('test when delivery option is invalid',()=>{
      chooseDeliveryOption("8c9c52b5-5a19-4bcb-a5d1-158a74287c53",'99');
      expect(cart[0].deliveryId).toEqual('1');
      expect(localStorage.setItem).toHaveBeenCalledTimes(0);
    } )
  })  
 

  

  

