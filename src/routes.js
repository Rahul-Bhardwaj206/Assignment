import React from "react";

const ProductList = React.lazy(() => import("pages/ProductList"));

const routes = [
  
  {
    enabled: true,
    path: "/",
    component: ProductList,
    navbar: "Product List App",
    child: null,
  },
];

export default routes.filter((route) => route.enabled);
  