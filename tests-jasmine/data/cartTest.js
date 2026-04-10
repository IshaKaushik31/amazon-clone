import{addToCart,cart,loadStorage} from '../../data/cart.js';
describe('test suite:add to cart function',()=>{
  it('adding an item that already exists',()=>{
    spyOn(localStorage,'setItem');
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
  });
    
    
  });
  it('add a new item',()=>{
    spyOn(localStorage,'setItem');

    spyOn(localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([]);
    });
    console.log()
    loadStorage();
    addToCart("8c9c52b5-5a19-4bcb-a5d1-158a74287c53");
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual('8c9c52b5-5a19-4bcb-a5d1-158a74287c53');
    expect(cart[0].quantity).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });
