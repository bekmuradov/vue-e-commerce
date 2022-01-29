# Robot-Market

This is an e-commerce site for you to buy robots. The homepage should display a list of robots for people to browse, and a cart that show a list of selected robots.

## Example of e-commerce site using Vue 3, Vuex, Vue-Router and Axios.

### Features
- [X] products should display in a grid
- [X] each robot should show image, name, price, material, and button to add to cart
  - [X] price should be displayed in USD format, $5,300.00
- [X] give the user option to filter by a robot's material type
- [X] user can add different robots to cart, and they can select as much as they want in the same type until it runs out of stock
- [X] cart should contain list of selected robots, total amount and total price
- [X] user can increase or decrease the number of robots inside of cart section
- [X] total amount should be the total number of selected robots
- [X] total price should be in USD format, $5,300.00

### Robots API
#### How do I start the app?
    * navigate to server forder and run the following
    * to install dependencies run yarn install or npm install
    * to run the project  yarn start or npm run start
    * the port for backend is 3000
    * The basic query looks like this: /api/robots
    * The response format is JSON
    ```
    {
      name,
      image,
      price,
      stock,
      createdAt,
      material
    }
    ```
    * then navigate to client folder and run the following
    * to install dependencies run yarn install or npm install
    * to run the project  yarn serve or npm run serve
    * the port for the frontend is 8080

### Example application structure
```bash
assets/
    L styles/                   styles

components/
    L ~Global/                  basic vue reusable components such as buttons, input, checkbox
    L cart/
        L CartList.vue
        L CartListItem.vue
    L core/                     shared components such as Navbar
    L product/
        L ProductCard.vue
        L ProductList.vue

features/
    L UniqueID.js               simple function to generate ids

layouts/
    L MainLayout.vue

router/                         all routes are nested within MainLayout

services/
    L apiConfig.js              instantiating axios api with baseURL
    L Api.js                    api method to get products from server
    L localStorageService.js    shopping cart uses in build memory (localStorage)

store/                          vuex store with 2 modules
    L cart/
    L product
    L index.js

views/
    L Error404.vue

App.vue
main.js                           in this file I am registering components and filters globally
```
