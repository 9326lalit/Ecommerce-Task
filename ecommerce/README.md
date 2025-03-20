# Ecommerce Website

## Overview
This is a fully functional Ecommerce website built using React, React Router, and Context API for state management. The project features product categories, a shopping cart, order management, and a seamless checkout process.

## Features
- 🛍️ **Product Listing**: Browse various categories like Clothing, Electronics, Furniture, and Toys.
- 🛒 **Shopping Cart**: Add and remove products from the cart.
- ✅ **Order Management**: View and manage your past orders.
- 🏠 **User Account**: Manage account details and view order history.
- 🚀 **Smooth Navigation**: Uses `react-router-dom` for page navigation.
- 🌎 **Global State Management**: Implements `Context API` to manage cart and orders globally.
- 📱 **Responsive Design**: Works on both desktop and mobile devices.

## Technologies Used
- **Frontend**: React, React Router, Context API, Styled Components
- **State Management**: Context API
- **Styling**: Styled Components


## Live Url :
https://ecommerce-peach-seven-27.vercel.app/


## Installation
To run the project locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/9326lalit/Ecommerce-Task
   ```

2. Navigate to the project directory:
   cd ecommerce
   ```

3. Install dependencies:
   npm install
   ```

4. Start the project:
   npm start
   ```

The app will run at `http://localhost:5000`.

## Project Structure
```
├── public
├── src
│   ├── components
│   │   ├── Navbar.js
│   │   ├── ProductList.js
│   ├── context
│   │   ├── CartContext.js
│   ├── pages
│   │   ├── Home.js
│   │   ├── MyOrders.js
│   │   ├── Account.js
│   ├── App.js
│   ├── index.js
├── package.json
```

## How Context API is Used
The `CartContext.js` file in the `context` folder manages global state:
This allows all components to access and update the cart and order states globally.


---

### 🚀 Happy Coding! 🎉

