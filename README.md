# !Robot-Market

This is an e-commerce site for you to buy robots. The homepage should display a list of robots for people to browse, and a cart that show a list of selected robots.

> ## Example of e-commerce site using [Vue3](https://v3.vuejs.org/), Vuex, Vue-Router and Axios.

- Demo [http://vue-e-commerce-mu.vercel.app/](http://vue-e-commerce-mu.vercel.app/)

# Features
- [X] products should display in a grid
- [X] each robot should show image, name, price, material, and button to add to cart
  - [X] price should be displayed in USD format, $5,300.00
- [X] give the user option to filter by a robot's material type
- [X] user can add different robots to cart, and they can select as much as they want in the same type until it runs out of stock
- [X] cart should contain list of selected robots, total amount and total price
- [X] user can increase or decrease the number of robots inside of cart section
- [X] total amount should be the total number of selected robots
- [X] total price should be in USD format, $5,300.00
- [ ] Authentication (needs to be done)


# What works?

- [x] [Composition API](https://composition-api.vuejs.org/)
- [x] [SFC \<script setup> sugar](https://v3.vuejs.org/api/sfc-script-setup.html)
- [x] [Vue router](https://next.router.vuejs.org/)
- [x] [Vuex 4 State management](https://vuex.vuejs.org/)
- [x] Vue Modular Architecture
- [x] Linter [ESLint](https://eslint.vuejs.org/)
- [x] Unit test ([Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro))
- [x] [Yarn workspaces] (https://classic.yarnpkg.com/lang/en/docs/workspaces/)
- [x] [Monorepo & CI/CD with Turborepo] (https://turborepo.org/) and [Vercel] (https://vercel.com/?utm_source=turborepo.org&utm_medium=referral&utm_campaign=docs-link)

# Getting started

```shell script
yarn install

# Development (will start both the backend and frontend in parallel)
yarn dev

# Build dist
yarn build

# Run unit tests for the frontend
yarn test:ui

```

## Robots API
    * uses [https://robohash.org](https://robohash.org) API
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

### Application structure
```shell script
client/src/
  L assets/
    L styles/                   styles

  L components/
    L _Global/                  basic vue reusable components such as buttons, input, checkbox with unit tests
    L core/                     shared components such as Navbar, NothingHere

  L config/
    L index.js                  env variables

  L features/
    L UniqueID.js               simple function to generate unique ids

  L layouts/
    L MainLayout.vue            so Navbar renders just once

  L modules/                    modular architecture
    L account/
      L components/
      L pages/
      L store/
      AccountModule.vue
      routes.js

    L cart/
      L components/
      L pages/
      L store/
      CartModule.vue
      routes.js

    L product/
      L components/
      L pages/
      L store/
      ProductModule.vue
      routes.js

  L router/                     all routes from modules are nested within MainLayout

  L services/
    L apiConfig.js              instantiating axios api with baseURL
    L Api.js                    api method to get products from server
    L localStorageService.js    shopping cart uses in build memory (localStorage)

  L store/                       all stores from modules imported here
    L index.js

  L views/
    L Error404.vue

  L App.vue
  L main.js                      global components & filters are registered here

server/                          basic express server using faker and https://robohash.org API
  L index.js                     creates 100 random robots
```
