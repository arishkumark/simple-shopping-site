## Problem statement

This repository contains an application that, when running, will request data from our GraphQL server and render a basic product listing page. It's a simple page, with a header, sidebar, some articles and a footer. The task is to spend some time looking at how it is built and try to improve it by refactoring the code into something that you would be personally proud of

## Solution

A Simple web app has been implemented using React-Redux as a Single Page Application. React takes care of the UI to render only when there is a change in the application state. Redux has been used to support the state management of the app so that data can be transmitted between all the components without any struggle. By combining React and Redux one can easily build a maintainable SPA and the solution implemented is production ready.

## Implementation details

- The app has been created using 'create-react-app' which helps us to give a robust folder structure and configuration of the project
- The routing mechanism has been implemented as part of this app. Currently, The following are the routes.
  - Product list (http://localhost:3000/)
  - Product details (http://localhost:3000/productDetails)
  - Wishlist (http://localhost:3000/wishList)
  - Shopping cart (http://localhost:3000/cart)
  - Success (http://localhost:3000/success)
- Product list route has all the products displayed on the page.
- On the selection of products the Product details route is invoked to display the details
- Material UI library has been used to have a rich google's material UI design for all our UI components.
- The app works perfectly on all the mobile devices too.
- All the error scenarios have been handled.
- Basic unit testing has been writtened.
- The app has a simple and clean folder structure so that it is easier to maintain when the app grows in future.
- The app is production ready so when you build using npm run build, it will give you a minified production ready builds that can be deployed

## How to run this App

- Clone the above mentioned repo and do 'npm install' in both client and server
- After the successful installation, run 'npm start'
- The app will start on localhost:3000 and the server will start on 3001

## Application flow

- When you hit http://localhost:3000/ you will land on the product list page where you can see a common app bar with a home button.
- The app bar contains search, wishlist and shopping cart icons with functionality.
- The sorting functionality has been added so that you can sort based on various criteria.
- The search functionality has been added as a filter option in the product
- You can add the product to a wishlist by clicking the favorite icon.
- When you click on the product you will land on the /productDetails route where we can see the details of the product.
- You can add the product to the cart by clicking the add to cart button.
- If there is a 503 error then we will show the user nothing but an error message.
- When you click on the wishlist icon in the header, you will be taken to the wish list page.
- You will see an empty message when you don't have any item in the wishlist else you will see the particular product
- The same behavior is applicable for shopping carts as well.
- When you click on place your order button in the cart page, you will be taken to the thank you page.
- When you hit another invalid route you will see a message with a button.
- Clicking on the button will take you to the productList page

## Improvements needed

- Unit test cases can be written to enhance the coverage to minute features as well provided with a time limit.
- Error pages can be designed with more meaning. So, that users won't be frustrated with the server error.
- Provided the database knowledge, graphql query can be improved so that we can show many info on details and cart pages.
- Ratings details can be implemented provided with the time limit
- Localization can be added if we have enough information
