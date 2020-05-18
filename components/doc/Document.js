import React, {useState} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import cookie from "js-cookie";

// Document
const Document = props => {
    const router = useRouter();

    return (
        <div className="doc-content">

            <h2 className="title">시작하기</h2>
            <h3 className="title-sm">1. 소개</h3>
            <div className="text mb-4">
                <span>MY UI는 부트스트랩을 기반으로 제작되었습니다.<br/>모든 플랫폼, 브라우저 또는 장치에 대한 최신 대시 보드를 가장 빠를게 구축할 수 있도록 도와드립니다.</span>
            </div>
            <div className="text mb-5">
                <p className="pl-3 mb-3">빠른 시작</p>
                <p className="pl-4 mb-2">- MY UI 관리 템플릿</p>
                <p className="pl-5 mb-3"><a href="#download">설치</a></p>

                <p className="pl-4 mb-2">- MY UI 구성요소 라이브러리</p>
                <p className="pl-5 mb-2">CSS/JS</p>
                <pre className="line-numbers">
                    <code className="language-markup">
                      &lt;script type="text/plain"&gt;
                        &lt;link rel="stylesheet" href="../css/bootstrap.min.css"&gt;

                    </code>
                  </pre>
                <p className="pl-3 mb-3 font-weight-bold">스타터 템플릿</p>
                <p className="pl-4 mb-2">- HTML5독 타입</p>
                <pre className="line-numbers" style={{
                    "height": "134px;"
                }}>
                    <code className="language-markup">
                      &lt;!doctype html&gt;
                        &lt;html lang="ko"&gt;
                        ...
                        &lt;/html&gt;
                    </code>
                  </pre>
            </div>

        </div>
    );
};

export default Document;
