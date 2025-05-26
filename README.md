# Comfy Store

A modern e-commerce web application built with React, Vite, Redux Toolkit, React Router, DaisyUI, and Tailwind CSS. This project demonstrates a full-featured online store experience, including authentication, product browsing, cart management, checkout, and order history.

## Features

- **Product Catalog**: Browse products with filtering, sorting, and pagination.
- **Product Details**: View detailed information, select color and quantity, and add to cart.
- **Cart**: Manage cart items, update quantities, remove items, and view order totals.
- **Checkout**: Secure checkout form with order summary.
- **Authentication**: Register, login, and guest user support.
- **Order History**: View past orders (requires login).
- **Theme Toggle**: Switch between light and dark themes.
- **Responsive Design**: Fully responsive layout using Tailwind CSS and DaisyUI.
- **Persistent State**: Cart and user info are saved in localStorage.
- **Notifications**: User feedback via react-toastify.

## Demo

[Live Demo](https://my-comfystore-project.netlify.app/)

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/comfy-store.git
   cd comfy-store
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:5173
   ```

### Environment

- Uses [Strapi Store API](https://strapi-store-server.onrender.com/api) for product and order data.
- See [API DOCS](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi) for endpoints.

## Project Structure

```
src/
  assets/           # Images and static assets
  components/       # Reusable UI components
  features/         # Redux slices (cart, user)
  pages/            # Route-based pages
  utils/            # Utility functions (API, formatting)
  App.jsx           # Main app component and router
  Store.jsx         # Redux store setup
  main.jsx          # App entry point
  index.css         # Tailwind and DaisyUI styles
public/
  vite.svg          # Favicon
index.html
```

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build

## Main Libraries

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [Axios](https://axios-http.com/)
