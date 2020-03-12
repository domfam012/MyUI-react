import React from "react";
// 전역 css
import "../public/css/bootstrap.css";
// import "../public/css/fonts/fontawesome/solid.css";
// import "../public/css/fontawesome.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

/* ga(google analytics) 연동 */
// import router from "next/router";
// import * as gtag from "../public/js/gtag";
// router.events.on("routeChangeComplete", url => gtag.pageview(url));

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
