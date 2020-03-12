/**
 *  메인 페이지
 */

import React from "react";
import Layout from "../components/Layout";
import Aside from "../components/Aside";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDoubleRight } from "@fortawesome/pro-light-svg-icons";
import { faChevronDoubleLeft } from "@fortawesome/pro-light-svg-icons";
import { faChevronLeft } from "@fortawesome/pro-light-svg-icons";
import { faChevronRight } from "@fortawesome/pro-light-svg-icons";
import Head from "next/head";

// 메인 페이지
const Index = props => {
  // console.log(`${process.env.ASSET_PREFIX}`);

  const router = useRouter();

  return (
    <Layout page={"index"}>
      <Head>
        <title>Adobe XD 무료 템플릿을 만나보세요 - My XD</title>
        <meta name="apple-mobile-web-app-title" content="MyXD" />
        <meta
          name="description"
          content="Adobe XD 무료 템플릿을 만나보세요 - My XD"
        />
        <meta name="keywords" content="어도비 Adobe XD" />
        <meta
          property="og:title"
          content="Adobe XD 무료 템플릿을 만나보세요 - My XD"
        />
        <meta
          property="og:description"
          content="Adobe XD 무료 템플릿을 만나보세요 - My XD"
        />
      </Head>

      <div>
        index page
        {/*aside 컴포넌트*/}
        <Aside asideData={props.asideData} />
      </div>
      <style jsx>{`
        .nav {
          width: 100%;
          margin-top: 30px;
          margin-bottom: 70px;
          padding-right: 332px;
        }
        @media (max-width: 1200px) {
          .nav {
            padding-right: 0;
          }
        }
      `}</style>
    </Layout>
  );
};


export default Index;
