import React, { Suspense } from "react";


import "./App.css";
import "./dark.css";

import Layout from "pages/_layouts/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "routes";
import ProductList from "pages/ProductList";

function App() {
    return (
        <Router>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {routes.map((route) => (
                            <Route
                                path={route.path}
                                component={route.component}
                                key={route.path}
                            />
                        ))}

                        <Route path="/" exact>
                            <ProductList />
                        </Route>
                    </Switch>
                </Suspense>
            </Layout>
        </Router>
    );
}

export default App;
