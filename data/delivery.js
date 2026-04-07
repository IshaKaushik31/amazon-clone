 export function getDeliveryCost(deliveryID){
  
  let matchingOption;
  deliveryOptions.forEach(option=>{
    
    if(option.deliveryId===deliveryID){
      matchingOption=option;
    }
    
    

  });
  return matchingOption;
 }
 
 export const deliveryOptions=[{
  deliveryId:'1',
  deliveryDays:7,
  deliveryPrice:0

},
{
  deliveryId:'2',
  deliveryDays:3,
  deliveryPrice:499
},
{
  deliveryId:'3',
  deliveryDays:1,
  deliveryPrice:999
}]; 