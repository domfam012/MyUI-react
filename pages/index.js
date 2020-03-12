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
        <section className="container-fluid introduction">
            <h1 className="header"><strong>무료</strong> 부트 스트랩 템플릿</h1>
            <div className="detail">
                <p className="line line1">MyUI는 Bootstrap 위에 구축 된 가장 인기있는 오픈 소스 관리자 패널 템플릿 중 하나 입니다.</p>
                <p className="line line2">MyUI 관리 대시 보드는 반응형 사용자 정의 가능하고 재사용 가능한 구성 요소를 제공합니다.</p>
                <p className="line line3">MyUI는 앱 개발 속도를 빠르게 합니다.</p>
            </div>
            <div className="version">
                최근버젼 : 1. 0. 0
            </div>
            <div className="btn-area">
                <button className="btn btn-xl btn-primary download">다운로드 MyUI</button>
                <button className="btn btn-xl btn-outline-secondary preview ml-1">라이브 미리보기</button>
            </div>
            <div className="github">
                <div className="line">MyUI를 좋아한다면 <strong>Github에서 별을 보내주세요.</strong></div>
                <div className="link">
                    <a href="#">
                        <img src="/img/main/github-stars.png" alt="github stars"/>
                    </a>
                </div>
            </div>
        </section>

        <div className="main-bg">
            <div className="bar left-bar"></div>
            <div className="bar right-bar"></div>
            <img className="main-bg" src="/img/main/main-bg.png" alt="My UI background image"/>
        </div>

        <div className="bg-container">
            <section className="container-fluid support">

                <div className="framework">
                    <h1 className="header"><strong>MyUI는</strong> 가장 널리 사용되는 프레임 워크를 지원합니다.</h1>
                    <p className="sub-header">전용 버전에 대해 자세히 알아보십시오.</p>
                    <div className="row list">
                        <div className="col col-sm-4 item bootstrap">
                            <img src="/img/main/bootstrap.png" alt="bootstrap"/>
                                <div className="title">Bootstrap 4</div>
                        </div>
                        <div className="col col-sm-4 item react">
                            <img src="/img/main/react.png" alt="reactjs"/>
                                <div className="title">React.js</div>
                                <div className="info">2020 상반기 서비스 예정입니다.</div>
                        </div>
                        <div className="col col-sm-4 item vue">
                            <img src="/img/main/vue.png" alt="vuejs"/>
                                <div className="title">Vue.js</div>
                                <div className="info">2020 상반기 서비스 예정입니다.</div>
                        </div>
                    </div>
                </div>

                <div className="technology">
                    <h1 className="header">가장 인기있는 프레임 워크와 기술을 기반으로 구축되었습니다.</h1>
                    <div className="list">
                        <div className="bootstrap item">
                            <img className="icon" src="/img/main/bootstrap-sm.png" alt="Bootstrap image"/>
                            <div className="detail">
                                <h3 className="title"><strong>부트스트랩</strong></h3>
                                <div className="info">
                                    <p>부트 스트랩은 HTML, CSS 및 JS로 개발하기위한오픈 소스 구성 요소 라이브러리입니다.</p>
                                    <p>부트 스트랩을 사용하면 Sass 변수 및 믹스 인, 반응 형 그리드 시스템, 구성 요소 및 내장 된 훌륭한 플러그인을
                                        사용하여 아이디어를 즉시 프로토 타입하거나 전체 웹 애플리케이션을 만들 수 있습니다</p>
                                </div>
                            </div>
                        </div>
                        <div className="sass item">
                            <img className="icon" src="/img/main/sass-sm.png" alt="SASS image"/>
                            <div className="detail">
                                <h3 className="title"><strong>SASS</strong></h3>
                                <div className="info">
                                    <p>Sass는 세계에서 가장 정교하고 안정적이며 강력한 전문가 급 CSS 확장 언어입니다.</p>
                                    <p>Sass는 CSS를 다시 재미있게 만듭니다. Sass는 CSS의 확장으로 중첩 규칙, 변수, 믹스 인, 선택기 상속 등을
                                        결합합니다.</p>
                                    <p>명령 행 도구 또는 빌드 시스템 용 플러그인을 사용하여 형식이 지정된 표준 CSS로 설정되었습니다.</p>
                                </div>
                            </div>
                        </div>
                        <div className="ecma item">
                            <img className="icon" src="/img/main/es-sm.png" alt="ES image"/>
                            <div className="detail">
                                <h3 className="title"><strong>ECMAScript</strong></h3>
                                <div className="info">
                                    <p>ECMAScript (또는 ES)는 ECMA-262 및 ISO / IEC 16262에서 Ecma International에서 표준화 한 스크립팅
                                        언어 사양입니다.</p>
                                    <p>JavaScript를 표준화하여 여러 개의 독립적 인 구현을 촉진하는 데 도움을주기 위해 작성되었습니다.</p>
                                </div>
                            </div>
                        </div>
                        <div className="fontawesome item">
                            <img className="icon" src="/img/main/fontawseme-sm.png" alt="Font Awesome image"/>
                            <div className="detail">
                                <h3 className="title"><strong>FONTAWESOME</strong></h3>
                                <div className="info">
                                    <p>FONTAWESOME을 사용하여 HTML의 Font 속성을 모두사용할 수 있으며, CSS를 적용시킬 수 있습니다.</p>
                                    <p>브라우저 호완성의 문제가 적의며 무료 아이콘이 많습니다.</p>
                                    <p>커스터미이징 가능합니다.</p>
                                </div>
                            </div>
                        </div>
                        <div className="krlang item">
                            <img className="icon" src="/img/main/korea-sm.png" alt="Kr language image"/>
                            <div className="detail">
                                <h3 className="title"><strong>한글 최적화</strong></h3>
                                <div className="info">
                                    <p>본고딕(Noto Sans), 나눔고딕, 나눔바른고딕을 지원하여 한글에 최적화 되어있습니다.</p>
                                    <p>저작권 문제가 없는 한글폰트를 사용하여, 라이센싱 문제가 없습니다.</p>
                                    <p>지속적으로 저작권 문제가 없는 한글폰트를 추가합니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </div>

        <section className="container-fluid component">
            <h1 className="header"><strong>MyUI는</strong> 바로 사용 가능하고 커스터마이징 가능합니다.</h1>
            <p className="sub-header">반응형 웹 앱을 개발하고 개발 시간을 최대 50% 단축 합니다.</p>

            <div className="list">

                <div className="row">
                    <div className="col col-sm-6 item">
                        <h5 className="title"><strong><i className="far fa-th"></i><span
                            className="text">COMPONENTS</span></strong></h5>
                        <ul className="detail">
                            <li>카드 (Cards)</li>
                            <li>변수 (Vars)</li>
                            <li>페이지 (Pagination)</li>
                            <li>탭메뉴 (Tabs)</li>
                            <li>툴팁 (Tooltips)</li>
                        </ul>
                    </div>
                    <div className="col col-sm-6 item">
                        <h5 className="title"><strong><i className="far fa-bell"></i><span className="text">BUTTONS & NOTIFICATIONS</span></strong>
                        </h5>
                        <ul className="detail">
                            <li>기본버튼 (Standard Button)</li>
                            <li>라인버튼 (Outline Button)</li>
                            <li>드랍다운 (Dropdown)</li>
                            <li>팝업 (Alerts)</li>
                            <li>뱃지 (Badge)</li>
                            <li>팝업 (Modal)</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-6 item">
                        <h5 className="title"><strong><i className="far fa-border-inner"></i><span className="text">FORMS & TABLES</span></strong>
                        </h5>
                        <ul className="detail">
                            <li>유효성 검사 (Form Validation)</li>
                        </ul>
                    </div>
                    <div className="col col-sm-6 item">
                        <h5 className="title"><strong><i className="far fa-bolt"></i><span className="text">PLUGINS, WIDGET</span></strong>
                        </h5>
                        <ul className="detail">
                            <li>달력 (bootstrap-datepicker)</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-6 item">
                        <h5 className="title"><strong><i className="far fa-th-large"></i><span className="text">EXTRA COMPONENTS</span></strong>
                        </h5>
                        <ul className="detail">
                            <li>로그인 (Login Page)</li>
                            <li>회원가입 (Register Page)</li>
                        </ul>
                    </div>
                    <div className="col col-sm-6"></div>
                </div>

            </div>

        </section>
    </Layout>
  );
};


export default Index;
