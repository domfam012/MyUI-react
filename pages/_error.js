import Error from "next/error";
import React from "react";

const Page = () => {
  return (
    <div>
      <div id="wrap" className="wrap error_wrap">
        <div className="error_page">
          <img src="/img/common/error.png" alt="에러이미지" />
          <div className="error_title">404 Page not found</div>
          <div className="error_contents">
            요청하신 페이지를 찾을 수 없습니다.
            <br />
            삭제된 주소거나, 일시적으로 사용할 수 없습니다.
          </div>
        </div>
      </div>
      <style jsx>{`
        body {
          background: #f8f8f8;
        }
      `}</style>
    </div>
  );
};

// Page.getInitialProps = async () => {
//   const res = await fetch("https://api.github.com/repos/zeit/next.js");
//   const errorCode = res.statusCode > 200 ? res.statusCode : false;
//   const json = await res.json();
//
//   return { errorCode: 404, stars: json.stargazers_count };
// };

export default Page;
