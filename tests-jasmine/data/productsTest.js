import{Product,Clothing,Appliance} from '../../data/products.js';
describe('test suite',()=>{
  it('product class test',()=>{
    const prodObj=new Product({
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87
    }
  });
  expect(prodObj.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
  expect(prodObj.getRatingURL()).toEqual(`images/ratings/rating-${prodObj.rating.stars*10}.png`)
})
  it('clothing class test',()=>{
    const prodObj=new Clothing({
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  })

  expect(prodObj.id).toEqual("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");
  expect(prodObj.sizeChartLink).toEqual("images/clothing-size-chart.png");
  expect(prodObj.getRatingURL()).toEqual(`images/ratings/rating-${prodObj.rating.stars*10}.png`)
})
  it('appliance class test',()=>{
    const prodObj=new Appliance({
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 1899,
    type:'appliance',
    instructLink:'images/appliance-instruction.png',
    warrantyLink:'images/appliance-warranty.png',
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ]
  })
  
  expect(prodObj.id).toEqual("54e0eccd-8f36-462b-b68a-8182611d9add");
  expect(prodObj.instructionsLink).toEqual('images/appliance-instruction.png');

  expect(prodObj.getRatingURL()).toEqual(`images/ratings/rating-${prodObj.rating.stars*10}.png`)
})
})
