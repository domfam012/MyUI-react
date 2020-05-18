import React from 'react';
import Link from "next/link";

// aside
const Aside = props => (
    <aside className="doc-aside">
        <header className="header bg-header">
            <Link href={"/"}>
                <a className="navbar-brand"><img src="../img/common/logo.png" alt="MyUI"/></a>
            </Link>
        </header>

        <div className="box-snb">
            <div className="nav snb" id="navbar-example2">

                <Link href={"./document"}>
                    <a className="h-title active"><i className="fas fa-bolt"/>시작하기</a>
                </Link>

                <div className="m-menu">
                    <a className="m-item nav-link" href="#intro">소개</a>
                    <a className="m-item nav-link" href="#download">다운로드</a>
                    <a className="m-item nav-link" href="#buildtool">빌드도구</a>
                    <a className="m-item nav-link" href="#device">브라우저&디바이스</a>
                </div>

                <Link href={"./component"}>
                    <a className="h-title"><i className="fas fa-th"/>구성요소</a>
                </Link>

                <div className="m-menu">
                    <a className="m-item nav-link" href="#badge">배지(Badge)</a>
                    <a className="m-item nav-link" href="#breadcrumb">경로(Breadcrumb)</a>
                    <a className="m-item nav-link" href="#step">단계(Step)</a>
                    <a className="m-item nav-link" href="#slide">슬라이드(Slide)</a>
                    <a className="m-item nav-link" href="#button">버튼(Button)</a>
                    <a className="m-item nav-link" href="#card">카드(Cards)</a>
                    <a className="m-item nav-link" href="#form">폼(Forms)</a>
                    <a className="m-item nav-link" href="#pagination">페이지네이션(Pagination)</a>
                    <a className="m-item nav-link" href="#tab">탭(Tab)</a>
                    <a className="m-item nav-link" href="#table">테이블(Table)</a>
                    <a className="m-item nav-link" href="#snb">사이드 네비게이션 바(SNB)</a>
                    <a className="m-item nav-link" href="#navbar">네비게이션 바(Navigation Bars)</a>
                    <a className="m-item nav-link" href="#modal">모달(Modal)</a>
                </div>
            </div>
        </div>

    </aside>
);


export default Aside;
