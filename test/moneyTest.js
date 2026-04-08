import{formatCurrency} from '../javascript/utils/money.js';
console.log('test suite: formatCurrency');
console.log('test1:converting to dollars');
if(formatCurrency(2067)==='20.67'){
  console.log('passed');
}
else{
  console.log('failed');
}
console.log('test2:working with 0');
if(formatCurrency(0)==='0'){
  console.log('passed');
}
else{
  console.log('failed');
}
console.log('test3:checking for decimar input');
if(formatCurrency(2000.5)==='20.01'){
  console.log('passed');
}
else{
  console.log('failed');
}