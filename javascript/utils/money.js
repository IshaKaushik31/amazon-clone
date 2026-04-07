export function formatCurrency(curr){
  
  return (Math.round(curr)/100).toFixed(2);
}
// .tofixed to round the number to 2 decimal places
// but for some numbers which end in 5 like 6.005 or 7.005 it will not round off properly so we use Math.round. 