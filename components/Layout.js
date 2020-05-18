import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "./Header";
import DocHeader from "./DocHeader";
import Footer from "./Footer";
import Aside from "./Aside";

const Layout = props => {
  const router = useRouter();

  console.log(router)

  let page = "";
  switch (router.asPath.split("/")[1]) {
    case "":
      page = "index";
      break;

    case "doc":
      page = "document";
      break;

    default:
      break;
  }

  return (
    <>
      {/* 공통 head 영역 */}
      <Head>
        <title>
          무료 템플릿을 만나보세요. 부트스트랩 / 뷰 / 리액트 - My UI
        </title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta name="Referrer" content="origin" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* app 파비콘 설정 */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/img/common/favicon.ico"
        />

        <script src="/js/bundle.js" />
      </Head>

      <div className={"wrap"}>
        {(() => {
          if (page === "index") {
            return (
              <>
                <Header />
                {props.children}
                <Footer />
              </>
            );
          } else {
            return (
              <>
                <DocHeader />
                <Aside />
                {props.children}
              </>
            );
          }
        })()}
      </div>
    </>
  );
};

export default Layout;
