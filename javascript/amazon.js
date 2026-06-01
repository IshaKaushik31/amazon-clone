import {cart,addToCart} from '../data/cart.js';
import {products,loadProductsFromBackend,productsFetch} from '../data/products.js';
import {formatCurrency} from'./utils/money.js';
import{calculateCartQuantity} from '../data/cart.js';
// loadProductsFromBackend(renderProductGrid);
async function renderProductGrid(){
  await productsFetch();

    let productHTML='';
    
        const url = new URL(window.location.href);
        const search = url.searchParams.get('search');

        let filteredProducts = products;

        // If a search exists in the URL parameters,
       // filter the products that match the search.
       if (search) {
       filteredProducts = products.filter((product) => {
       let matchingKeyword = false;

      product.keywords.forEach((keyword) => {
        if (keyword.toLowerCase().includes(search.toLowerCase())) {
          matchingKeyword = true;
        }
      });

      return matchingKeyword ||
        product.name.toLowerCase().includes(search.toLowerCase());
      });
  }

  function updateCartQuantity(){
    let cartQuantity=0;
    cart.forEach((item)=>{
      cartQuantity+=item.quantity;
    });
    document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
  }

  function renderProducts(list) {
    let productHTML = '';
    list.forEach((product) => {
      productHTML+=`<div class="product-container">
            <div class="product-image-container">
              <img class="product-image"
                src=${product.image}>
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>

            <div class="product-rating-container">
              <img class="product-rating-stars"
                src=${product.getRatingURL()}>
              <div class="product-rating-count link-primary">
                ${product.rating.count}
              </div>
            </div>

            <div class="product-price">
              $ ${product.getCurrency()}
            </div>

            <div class="product-quantity-container">
              <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            ${product.extraInfoHTML()}

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png">
              Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${product.id}">
              Add to Cart
            </button>
          </div>
      `;
    });
    document.querySelector('.js-product-grid').innerHTML = productHTML;

    document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
      button.addEventListener('click',()=>{
        const productId=button.dataset.productId;
        addToCart(productId);
        updateCartQuantity();
      });
    });
  }

  renderProducts(filteredProducts);

  document.querySelector('.js-sort-select').addEventListener('change', () => {
    const sortValue = document.querySelector('.js-sort-select').value;
    let sortedProducts = [...filteredProducts];

    if (sortValue === 'price-low') {
      sortedProducts.sort((a, b) => a.priceCents - b.priceCents);
    } else if (sortValue === 'price-high') {
      sortedProducts.sort((a, b) => b.priceCents - a.priceCents);
    } else if (sortValue === 'rating') {
      sortedProducts.sort((a, b) => b.rating.stars - a.rating.stars);
    } else {
      sortedProducts = [...filteredProducts];
    }

    renderProducts(sortedProducts);
  });

    document.querySelector('.js-search-button')
    .addEventListener('click', () => {
      const search = document.querySelector('.js-search-bar').value;
      window.location.href = `amazon.html?search=${search}`;
    });
}
    


function renderHomePageHeader(){
  const headerHTML=`
  <div class="amazon-header-left-section">
        <a href="amazon.html" class="header-link">
          <img class="amazon-logo"
            src="images/amazon-logo-white.png">
          <img class="amazon-mobile-logo"
            src="images/amazon-mobile-logo-white.png">
        </a>
      </div>

      <div class="amazon-header-middle-section">
        <input class="search-bar js-search-bar" type="text" placeholder="Search">

        <button class="search-button js-search-button">
          <img class="search-icon" src="images/icons/search-icon.png">
        </button>
      </div>

      <div class="amazon-header-right-section">
        <a class="orders-link header-link" href="orders.html">
          <span class="returns-text">Returns</span>
          <span class="orders-text">& Orders</span>
        </a>

        <a class="cart-link header-link" href="checkout.html">
          <img class="cart-icon" src="images/icons/cart-icon.png">
          <div class="cart-quantity js-cart-quantity">${calculateCartQuantity()}</div>
          <div class="cart-text">Cart</div>
        </a>
      </div>
  `
  document.querySelector('.js-amazon-header').innerHTML=headerHTML;

}
renderHomePageHeader();
renderProductGrid();
