import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cookie from "js-cookie";

import "prismjs";
import PrismCode from "react-prism/lib/components/PrismCode";

// Document
const Document = props => {
  const router = useRouter();

  return (
    <>
      <div className="doc-content">
        <div id="intro">
          <h2 className="title">시작하기</h2>
          <h3 className="title-sm">1. 소개</h3>
          <div className="text mb-4">
          <span>
            MY UI는 부트스트랩을 기반으로 제작되었습니다.
            <br />
            모든 플랫폼, 브라우저 또는 장치에 대한 최신 대시 보드를 가장 빠를게
            구축할 수 있도록 도와드립니다.
          </span>
          </div>
          <div className="text mb-5">
            <p className="pl-3 mb-3">빠른 시작</p>
            <p className="pl-4 mb-2">- MY UI 관리 템플릿</p>
            <p className="pl-5 mb-3">
              <a href="#download">설치</a>
            </p>

            <p className="pl-4 mb-2">- MY UI 구성요소 라이브러리</p>
            <p className="pl-5 mb-2">CSS/JS</p>
            <PrismCode component="pre" className="language-markup">
              {`
              <link rel="stylesheet" href="../css/bootstrap.min.css">
              <script src="../js/bundle.js">
            `}
            </PrismCode>
            <p className="pl-3 mb-3 font-weight-bold">스타터 템플릿</p>

            <p className="pl-4 mb-2">- HTML5독 타입</p>
            <PrismCode component="pre" className="language-markup" style={{ height: "134px;" }}>{`
            <!doctype html>
            <html lang="ko">
            ...
            </html>
          `}</PrismCode>

            <p className="pl-4 mb-2">- 오른쪽에서 왼쪽지원</p>
            <PrismCode component="pre" className="language-css" style={{ height: "134px;" }}>{`
            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }
          `}</PrismCode>

            <p className="pl-4 mb-2">- 상자크기</p>
            <PrismCode component="pre" className="language-markup" style={{ height: "134px;" }}>{`
            <!doctype html>
            <html lang="ko">
              ...
            </html>
          `}</PrismCode>
          </div>
        </div>

        <div id="download" style={{ "padding-top": "75px;" }}>
          <h3 className="title-sm">
            2. 다운로드
          </h3>
          <div className="text mb-4">
            MY UI를 다운로드하여 컴파일 된 CSS 및 JavaScript, 소스 코드를 얻거나
            npm, RubyGems등과 같은 즐겨사용하는 패키지 관리자에 포함하십시오.
          </div>
          <div className="text mb-5">
            <h3 className="pl-3 mb-5">
              <a
                  className="btn btn-primary btn-lg"
                  href="https://github.com/domfam012/MyUI/archive/master.zip"
              >
                소스파일
              </a>
            </h3>
            <h4 className="mb-3">- MyUI</h4>
            <h5 className="mb-3 pl-2">설치(installation)</h5>

            <p className="pl-3 mb-3">1. 저장소 클론</p>
            <div className="mb-3">
              <code className="ml-3 language-npm">$ git clone https://github.com/domfam012/MyUI.git my-project</code>
            </div>
            <p className="pl-3 mb-3">2. 프로젝트 디렉터리로 이동</p>
            <div className="mb-3">
              <code className="ml-3 language-npm">$ cd my-project</code>
            </div>
            <p className="pl-3 mb-3">3. npm 의존 모듈 설치</p>
            <div className="mb-5">
              <code className="ml-3 language-npm">$ npm install</code>
            </div>
            <h5 className="mb-3 pl-2">용법(usage)</h5>
            <div className="mb-3">
              <code className="ml-3 language-npm">$ npm run dev</code>
            </div>
            <p className="pl-3 mb-3">개발을 위한 빌드를 watch 상태로 제공합니다.</p>
            <div className="mb-3">
              <code className="ml-3 language-npm">$ npm run dist</code>
            </div>
            <p className="pl-3 mb-5">minify 된 프로덕션 빌드를 제공합니다.</p>

            <h4 className="mb-3">- MyUI(React)</h4>
            <h5 className="mb-3 pl-2">설치(installation)</h5>
            <p className="pl-3 mb-3">1. 저장소 클론</p>
            <div className="mb-3">



              <code className="ml-3 language-npm">
                $ git clone https://github.com/domfam012/MyUI-react.git
                my-react-project
              </code>
            </div>
            <p className="pl-3 mb-3">2. 프로젝트 디렉터리로 이동</p>
            <div className="mb-3">



              <code className="ml-3 language-npm">$ cd my-react-project</code>
            </div>
            <p className="pl-3 mb-3">3. npm 의존 모듈 설치</p>
            <div className="mb-5 ">



              <code className="ml-3 language-npm">$ npm install</code>
            </div>
            <h5 className="mb-3 pl-2">용법(usage)</h5>
            <div className="mb-3">



              <code className="ml-3 language-npm">$ npm run dev</code>
            </div>
            <p className="pl-3 mb-3">로컬 호스트 개발 서버 시작(localhost:80)</p>
            <div className="mb-3">



              <code className="ml-3 language-npm">$ npm run dist</code>
            </div>
            <p className="pl-3 mb-5">minify 된 프로덕션 빌드를 제공합니다.</p>

            <h4 className="mb-3">- MyUI(Vue)</h4>
            <h5 className="mb-3 pl-2">설치(installation)</h5>
            <p className="pl-3 mb-3">1. 저장소 클론</p>
            <div className="mb-3">



              <code className="ml-3 language-npm">
                $ git clone https://github.com/domfam012/MyUI-vue.git my-vue-project
              </code>
            </div>
            <p className="pl-3 mb-3">2. 프로젝트 디렉터리로 이동</p>
            <div className="mb-3">



              <code className="ml-3 language-npm">$ cd my-vue-project</code>
            </div>
            <p className="pl-3 mb-3">3. npm 의존 모듈 설치</p>
            <div className="mb-5 ">



              <code className="ml-3 language-npm">$ npm install</code>
            </div>
            <h5 className="mb-3 pl-2">용법(usage)</h5>
            <div className="mb-3">



              <code className="ml-3 language-npm">
                $ npm run dev //로컬호스트 개발 서버 시작(localhost:3000)
              </code>
            </div>
            <div className="mb-3">



              <code className="ml-3 language-npm">$ npm run build</code>
            </div>
            <div className="mb-3">



              <code className="ml-3 language-npm">
                $ npm run start //프로덕션 빌드 서버 시작
              </code>
            </div>
            <div className="mb-5">



              <code className="ml-3 language-npm">
                $ npm run generate //정적 프로젝트 생성
              </code>
            </div>

            <h4 className="pl-3 mb-3">패키지 관리자</h4>
            <p className="pl-4 mb-3">
              패키지 설치 후, node_modules 폴더에서 myui-bootstrap / myui-react /
              myui-vuejs 폴더를 복사 -> npm install
            </p>
            <p className="pl-4 mb-3">- npm</p>
            <div className="mb-3">



              <code className="ml-3 language-npm">
                $ npm install myui-bootstrap
              </code>
            </div>
            <p className="pl-4 mb-3">- react-npm</p>
            <div className="mb-3">



              <code className="ml-3 language-npm">$ npm install myui-react</code>
            </div>
            <p className="pl-4 mb-3">- vue-npm</p>
            <div className="mb-3">



              <code className="ml-3 language-npm">$ npm install myui-vuejs</code>
            </div>
          </div>
        </div>

        <div id="buildtool" style={{ "padding-top": "75px;" }}>
          <h3 className="title-sm">
            3. 빌드도구
          </h3>
          <div className="text mb-4">
            MYUI에 포함된 npm 스크립트를 사용하여 소스코드를 컴파일하고 테스트를
            실행하는 방법을 배우세요
          </div>
          <div className="text mb-5">
            <h4 className="title-sm">사용 방법</h4>
            <p className="pl-3 mb-3">
              - 부트 스트랩은 빌드 시스템에{" "}
              <a href="https://docs.npmjs.com/misc/scripts">npm 스크립트</a>를
              사용합니다. package.json에는 코드 컴파일, 테스트 실행 등 프레임 워크
              작업을 위한 편리한 메소드가 포함되어 있습니다.
            </p>
            <p className="pl-3 mb-3">
              - 빌드 시스템을 사용하고 문서를 로컬로 실행하려면 MyUI의 소스 파일 및
              노드 사본이 필요합니다.
            </p>
            <p className="pl-3 mb-3">
              - 의존성을 관리하는 데 사용하는{" "}
              <a href="https://nodejs.org/en/">Node.js</a>를 다운로드하여
              설치하십시오.
            </p>
            <p className="pl-3 mb-3">
              - root / bootstrap 디렉토리로 이동하여 npm install을 실행하여
              package.json에 나열된 로컬 종속성을 설치하십시오.
            </p>
            <p className="pl-3 mb-5">
              - 완료되면 명령 줄에서 제공되는 다양한 명령을 실행할 수 있습니다.
            </p>
            <h4 className="title-sm">npm 스크립트 이용</h4>
            <p className="pl-3 mb-3">
              <a href="https://github.com/domfam012/MyUI/blob/master/package.json">
                - package.json
              </a>
              에는 다음과 같은 명령과 작업이 포함되어 있습니다.
            </p>
            <table className="table">
              <thead className="thead-light">
              <tr>
                <th scope="col">스크립트</th>
                <th scope="col">설명</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>npm run dev</td>
                <td>개발을 위한 빌드를 watch 상태로 제공합니다.</td>
              </tr>
              <tr>
                <td>npm run dist</td>
                <td>minify 된 프로덕션 빌드를 제공합니다.</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div id="device" style={{ "padding-top": "75px;" }}>
          <h3 className="title-sm">
            4. 브라우저&디바이스
          </h3>
          <div className="text mb-4">
            부트스트랩이 지원하는 최신 브라우저에서 오래된 브라우저 및 장치에 대해서
            알아 봅니다.
          </div>
          <div className="text mb-3">
            <p className="pl-3 mb-3">지원되는 브라우저</p>
            <p className="pl-4 mb-3">- 휴대 기기</p>
            <p className="pl-4 mb-3">- 테스크탑 브라우저</p>
            <p className="pl-3 mb-5">인터넷 익스플로러</p>
          </div>
          <div className="pl-4">
            <p className="pl-5 mb-3">지원되는 브라우저</p>
            <p className="pl-5 pb-3">
              - MyUI는 가장 많이 사용되는 모든 브라우저 및 플랫폼을 지원합니다.
            </p>
            <p className="font-weight-bold p-3">휴대기기</p>
            <table className="table table-hover" style={{ "min-width": "900px" }}>
              <thead>
              <tr>
                <th></th>
                <th>Chrome</th>
                <th>Firefox</th>
                <th>Safari</th>
                <th style={{ "font-size": "14px" }}>Android Browser & WebView</th>
                <th>Edge</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Android</td>
                <td>Supported</td>
                <td>Supported</td>
                <td>N/A</td>
                <td>Android v5.0 + Supported</td>
                <td>Supported</td>
              </tr>
              <tr>
                <td>IOS</td>
                <td>Supported</td>
                <td>Supported</td>
                <td>Supported</td>
                <td>N/A</td>
                <td>Supported</td>
              </tr>
              <tr>
                <td>Window10 mobile</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>Supported</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="p-3" style={{ "margin-bottom": "400px;" }}>
            <p className="font-weight-bold p-3">데스크탑 브라우저</p>
            <table className="table table-hover" style={{ "min-width": "900px" }}>
              <thead>
              <tr>
                <th></th>
                <th>Chrome</th>
                <th>Firefox</th>
                <th>IE</th>
                <th style={{ "font-size": "14px" }}>Edge</th>
                <th>Opera</th>
                <th>Safari</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Mac</td>
                <td>Supported</td>
                <td>Supported</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>Supported</td>
                <td>Supported</td>
              </tr>
              <tr>
                <td>Window</td>
                <td>Supported</td>
                <td>Supported</td>
                <td>Supported, IE11</td>
                <td>Supported</td>
                <td>Supported</td>
                <td></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
};

export default Document;
