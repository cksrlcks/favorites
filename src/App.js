import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import AddSite from "./component/addsite/AddSite";
import SiteList from "./component/sitelist/SiteList";
import store from "./store";
import { Provider } from "react-redux";
import styeld from "styled-components";

function App() {
    return (
        <AppBlock>
            <Provider store={store}>
                <Header />
                <AddSite />
                <Router>
                    <Route path="/" component={SiteList} />
                </Router>
                <Footer></Footer>
            </Provider>
        </AppBlock>
    );
}

export default App;

const AppBlock = styeld.div`
  max-width: 820px;
  padding:0 10px;
  margin:0 auto;
`;
