import{formatCurrency} from '../../javascript/utils/money.js';
describe('Test suite:format currency',()=>{
  it('converts cents into dollar',()=>{
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('checking the working of 0',()=>{
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('checking for decimal input',()=>{
    expect(formatCurrency(2000.5)).toEqual('20.01');
  })
  it('checking round down',()=>{
    expect(formatCurrency(2000.4)).toEqual('20.00');
  })
  it('checking negative number',()=>{
    expect(formatCurrency(-2000.5)).toEqual('-20.00');
  })
});