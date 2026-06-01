# Amazon Clone

A fully functional e-commerce web app built with vanilla HTML, CSS, and JavaScript.

## Live Demo
https://amazonshoppp.netlify.app/

## Features
- Browse products fetched from a live REST API
- Search products by name or keyword
- Sort products by price and rating
- Add products to cart with quantity selection
- Update or delete cart items
- Choose delivery options with real-time cost calculation
- Place orders via a POST request to a backend API
- View order history with estimated delivery dates
- Track individual packages with a progress bar
- Search orders by product name or order ID
- All cart and order data persisted using localStorage

## Tech Stack
- HTML, CSS, JavaScript (no frameworks)
- ES6 modules, classes, async/await
- Fetch API for backend communication
- localStorage for client-side persistence
- Jasmine for unit testing
- dayjs for date formatting

## How to Run
1. Clone the repo
2. Open `amazon.html` in a browser
3. No build step or dependencies required

## API
Products and orders are powered by a REST backend:
- `GET https://supersimplebackend.dev/products` — fetches all products on page load
- `POST https://supersimplebackend.dev/orders` — places an order and returns an order object

## Project Structure
├── amazon.html         # Home page
├── checkout.html       # Cart and checkout
├── orders.html         # Order history
├── tracking.html       # Package tracking
├── data/               # State modules (cart, orders, products)
├── javascript/         # Page scripts and utilities
├── styles/             # CSS files
└── tests-jasmine/      # Unit tests
