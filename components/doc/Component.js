import React, {useState} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import cookie from "js-cookie";

// Component
const Component = props => {
    const router = useRouter();

    return (
        <div class="doc-content">
            <h2 class="title">구성요소</h2>
            <h3 class="title-sm">1. 뱃지(Badge)</h3>
            <div class="text mb-3">
                <span>텍스트 뒤에 붙어 상태를 나타내거나 버튼의 일부로 사용되어 새롭거나 읽지않은 항목을 강조한다.</span>
            </div>
            <div class="text mb-4">
                <p class="pl-3 mb-2">1. 상태를 나타내는 경우</p>
                <p class="pl-3 mb-2">2. 버튼의 일부로 사용되는 경우</p>
                <p class="pl-3 mb-5">3. 링크로 사용되는 경우</p>
                <p class="ml-3 mb-2 font-weight-bold">1. 상태를 나타내는 경우</p>
                <p class="ml-3 mb-3">게시판, 공지사항, FAQ등의 제목뒤에 붙어 상태를 나타낼 때 사용한다.</p>
            </div>
            <div class="ml-5 pl-3 mb-5">
                <h1 class="mb-3">Example heading <span class="badge badge-primary">New</span></h1>
                <h2 class="mb-3">Example heading <span class="badge badge-primary">New</span></h2>
                <h3 class="mb-3">Example heading <span class="badge badge-primary">New</span></h3>
                <h4 class="mb-3">Example heading <span class="badge badge-primary">New</span></h4>
                <h5 class="mb-3">Example heading <span class="badge badge-primary">New</span></h5>
                <h6>Example heading <span class="badge badge-primary">New</span></h6>
            </div>

        </div>
    );
};

export default Component;
