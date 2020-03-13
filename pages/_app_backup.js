import React from "react";

// using redux
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store from '../redux/store';

import {makeStore} from "./../redux/redux";

// 전역 css
import "../public/css/bootstrap.css";

// fontawesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

/* ga(google analytics) 연동 */
// import router from "next/router";
// import * as gtag from "../public/js/gtag";
// router.events.on("routeChangeComplete", url => gtag.pageview(url));

export default withRedux(makeStore, {debug: true})(class MyApp extends App {

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }

});

// // makeStore fn that returns a new store for every request
// const makeStore = () => store;
//
// // withRedux wrapper that passes the store to the App Component
// export default withRedux(makeStore)(MyApp);
