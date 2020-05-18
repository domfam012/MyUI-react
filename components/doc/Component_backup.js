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
            <div class="text mb-4">
                <p class="ml-3 mb-2 font-weight-bold">2. 버튼의 일부로 사용되는 경우</p>
                <p class="ml-3 mb-1">버튼의 일부로 사용되어 버튼의 기능에 따르는 항목을 강조한다. </p>
                <p class="ml-3">예) 메일 수신 버튼에 같이 사용하여 수신된 메일이 몇 개 있는지 알려준다.</p>
            </div>
            <div class="ml-5 pl-3 mb-5">
                <button type="button" class="btn btn-primary">Notifications <span class="badge">4</span></button>
            </div>
            <div class="ml-5 pl-3" style="margin-bottom: 35px;">
                <p class="pl-1 mb-3 font-weight-bold">3. 링크로 사용되는 경우</p>
                <a href="#" class="badge badge-primary">Primary</a>
                <a href="#" class="badge badge-normal">Normal</a>
            </div>
            <h3 class="title-sm" id="breadcrumb" style="padding-top: 75px;">2. 경로(Breadcrumb)</h3>
            <div class="text mb-3">네비게이션 체계 내에서 현재페이지 위치를 나타낸다.</div>
            <div class="text">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                </nav>

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Library</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
            </div>

            <h3 class="title-sm" id="step" style="padding-top: 75px;">3. 단계(Step)</h3>
            <div class="text mb-3">
                회원가입 등 절차가 있는경우 사용자에게 단계(현재순서, 다음순서, 작성완료)를 확인 시킨다.
            </div>
            <div class="text mb-5">
                <p class="ml-3 mb-2 font-weight-bold">1. 단계와 텍스트가 분리된 경우</p>
                <p class="ml-3 mb-1">절차가 많지않아 공간의 여유가 있을경우 사용한다.</p>
                <p class="ml-3 mb-4">중앙정렬을 기본으로 한다.</p>
                <div class="clearfix mb-5">
                    <ul class="step">
                        <li class="current">Text</li>
                        <li>Text</li>
                        <li>Text</li>
                    </ul>
                </div>
                <div class="clearfix mb-5">
                    <ul class="step">
                        <li class="active">Text</li>
                        <li class="current">Text</li>
                        <li>Text</li>
                    </ul>
                </div>
                <div class="clearfix mb-5">
                    <ul class="step">
                        <li class="active">Text</li>
                        <li class="active">Text</li>
                        <li class="current">Text</li>
                    </ul>
                </div>
                <p class="ml-3 mb-2 font-weight-bold">2. 단계와 텍스트가 합쳐진 경우</p>
                <p class="ml-3 mb-4">1번보다 공간의 여유가 적을경우 사용한다.</p>
                <div class="mb-5">
                    <div class="step-arrow-center clearfix mb-2">
                        <ul class="step-arrow">
                            <li class="active"><span>Text</span></li>
                            <li><span>TextText</span></li>
                            <li><span>TextTextText</span></li>
                        </ul>
                    </div>
                    <div class="step-arrow-center clearfix mb-2">
                        <ul class="step-arrow">
                            <li class="done"><span>Text</span></li>
                            <li class="active"><span>TextText</span></li>
                            <li><span>TextTextText</span></li>
                        </ul>
                    </div>
                    <div class="step-arrow-center clearfix mb-2">
                        <ul class="step-arrow">
                            <li class="done"><span>Text</span></li>
                            <li class="done"><span>TextText</span></li>
                            <li class="active"><span>TextTextText</span></li>
                        </ul>
                    </div>
                    <div class="step-arrow-center clearfix mb-5">
                        <ul class="step-arrow">
                            <li class="done"><span>Text</span></li>
                            <li class="done"><span>TextText</span></li>
                            <li class="done"><span>TextTextText</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <h3 class="title-sm" id="slide" style="padding-top: 75px;">4. 슬라이드(carousel)</h3>
            <div class="text mb-3">
                <span>웹 사이트에서 이미지를 순환하여 보여줄 경우 사용한다.<br />
                    이미지는 10개 이하를 사용한다.<br />
                    좌/우 컨트롤과 함께 표시기를 함께 사용할 수 있다.(표시기를 눌렀을 경우 해당이미지 표출)
                </span>
            </div>
            <div class="text mb-5">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <p style="color:#a4cad1; background: #eef9fb;">First Slide</p>
                        </div>
                        <div class="carousel-item">
                            <p style="color:#8ec7d1; background: #e1f6fa;">Second Slide</p>
                        </div>
                        <div class="carousel-item">
                            <p style="color:#79c4d1; background: #d4f4fa;">Third Slide</p>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"/>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"/>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <h3 class="title-sm" id="button" style="padding-top: 75px">5. 버튼(Button)</h3>
            <div class="text mb-3">
                다양한 크기, 스타일을 지원한다.
            </div>
            <div class="text">
                <p class="ml-3 mb-2">1. 기본 버튼</p>
                <p class="ml-3 mb-2">2. 아웃라인 버튼</p>
                <p class="ml-3 mb-2">3. 아이콘과 같이 사용되는 버튼</p>
                <p class="ml-3 mb-5">4. 링크</p>
                <p class="ml-3 mb-2 font-weight-bold">1. 기본버튼</p>
                <p class="ml-3 mb-1">기본버튼은 5가지 사이즈(Extra Samll, Small, Medium, Lage, ExtraLarge)로 구성되어 있다.</p>
                <p class="ml-3 mb-1">기본 Extra Samll, Small, Medium 버튼 사이즈는 가로 80px 이며, 텍스트가 길어질 경우 좌/우 마진 10px를 유지한다.</p>
                <p class="ml-3 mb-3">Primary 컬러는 주요 기능/결정 버튼으로 사용한다.</p>
                <div class="pl-3 mb-5">
                    <button class="btn btn-primary">Primary</button>
                    <button class="btn btn-secondary">Secondary</button>
                    <button class="btn btn-light">Light</button>
                </div>
                <div class="ml-3 mb-2 font-weight-bold">Size</div>
                <div class="pl-3 mb-3">
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-xs btn-primary">Extra Small</button>
                    </div>
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-xs btn-secondary">Extra Small</button>
                    </div>
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-xs btn-light">Extra Small</button>
                    </div>
                </div>
                <div class="pl-3 mb-3">
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-sm btn-primary">Small</button>
                    </div>
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-sm btn-secondary">Small</button>
                    </div>
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-sm btn-light">Small</button>
                    </div>
                </div>
                <div class="pl-3 mb-3">
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-primary">Medium</button>
                    </div>
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-secondary">Medium</button>
                    </div>
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-light">Medium</button>
                    </div>
                </div>
                <div class="pl-3 mb-3">
                    <button type="button" class="btn btn-lg btn-primary">Large</button>
                    <button type="button" class="btn btn-lg btn-secondary">Large</button>
                    <button type="button" class="btn btn-lg btn-light">Large</button>
                </div>
                <div class="pl-3 mb-5">
                    <button type="button" class="btn btn-xl btn-primary">Extra Large</button>
                    <button type="button" class="btn btn-xl btn-secondary">Extra Large</button>
                    <button type="button" class="btn btn-xl btn-light">Extra Large</button>
                </div>
                <div class="ml-3 mb-2 font-weight-bold">Disabled</div>
                <div class="pl-3 mb-5">
                    <button class="btn btn-primary btn-lg disabled" disabled="disabled">disabled</button>
                    <button class="btn btn-secondary btn-lg disabled" disabled="disabled">disabled</button>
                    <button class="btn btn-light btn-lg disabled">disabled</button>
                </div>
                <p class="ml-3 mb-2 font-weight-bold">2. 아웃라인 버튼</p>
                <p class="ml-3 mb-1">5가지 사이즈(Extra Samll, Small, Medium, Lage, ExtraLarge)로 구성되어 있다.</p>
                <p class="ml-3 mb-3">기본 Extra Samll, Small, Medium 버튼 사이즈는 가로 80px 이며, 텍스트가 길어질 경우 좌/우 마진 10px를 유지한다.</p>
                <div class="pl-3 mb-5">
                    <button type="button" class="btn btn-outline-primary">Primary</button>
                    <button type="button" class="btn btn-outline-secondary">Light</button>
                    <button type="button" class="btn btn-outline-light">Light</button>
                </div>
                <div class="ml-3 mb-2 font-weight-bold">Size</div>
                <div class="pl-3 mb-3">
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-xs btn-outline-primary">Extra Small</button>
                    </div>
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-xs btn-outline-secondary">Extra Small</button>
                    </div>
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-xs btn-outline-light">Extra Small</button>
                    </div>
                </div>
                <div class="pl-3 mb-3">
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-sm btn-outline-primary">Small</button>
                    </div>
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-sm btn-outline-secondary">Small</button>
                    </div>
                    <button type="button" class="btn btn-sm btn-outline-light">Small</button>
                </div>
                <div class="pl-3 mb-3">
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-outline-primary">Medium</button>
                    </div>
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-outline-secondary">Medium</button>
                    </div>
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-outline-light">Medium</button>
                    </div>
                </div>
                <div class="pl-3 mb-3">
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-lg btn-outline-primary">Large</button>
                    </div>
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-lg btn-outline-secondary">Large</button>
                    </div>
                    <div style="width: 140px; text-align: left; display: inline-block;">
                        <button type="button" class="btn btn-lg btn-outline-light">Large</button>
                    </div>
                </div>
                <div class="pl-3 mb-5">
                    <button type="button" class="btn btn-xl btn-outline-primary">Extra Large</button>
                    <button type="button" class="btn btn-xl btn-outline-secondary">Extra Large</button>
                    <button type="button" class="btn btn-xl btn-outline-light">Extra Large</button>
                </div>
                <div class="ml-3 mb-2 font-weight-bold">Disabled</div>
                <div class="pl-3 mb-5">
                    <button class="btn btn-primary btn-lg disabled" disabled="disabled">disabled</button>
                    <button class="btn btn-secondary btn-lg disabled" disabled="disabled">disabled</button>
                    <button class="btn btn-light btn-lg disabled">disabled</button>
                </div>
                <p class="ml-3 mb-2 font-weight-bold">3. 아이콘과 같이 사용되는 버튼</p>
                <p class="ml-3 mb-1">버튼을 강조하거나 기능을 쉽게 이해시키기 위해 아이콘을 텍스트와 같이 사용한다.</p>
                <p class="ml-3 mb-4">아이콘과 텍스트의 간격은 6px이며, 아이콘+텍스트는 버튼 넓이의 중앙정렬한다.</p>
                <div class="pl-3 mb-5">
                    <button class="btn btn-primary"><i class="fas fa-circle icon"></i>버튼</button>
                </div>
                <p class="ml-3 mb-2 font-weight-bold">4. 링크</p>
                <p class="ml-3 mb-1">텍스트에 링크를 걸었을 때 사용한다.</p>
                <p class="ml-3 mb-4">마우스 오버시 텍스트 하단에 라인이 생겨 링크가 있음을 알려준다.</p>
                <div class="pl-3" style="margin-bottom: 35px;">
                    <button type="button" class="btn btn-link">Link</button>
                </div>
            </div>

            <h3 class="title-sm" id="card" style="padding-top: 75px;">6. 카드(Cards)</h3>
            <div class="text mb-3">
                <span>동일한 구성의 컨텐츠를 반복해서 보여줄 경우 카드를 사용하며, 이미지와 텍스트로 구성된다.<br />
                    일반적으로 타이틀, 내용, 버튼으로 구성되며, 내용에 따라 버튼은 생략될 수 있다.
                </span>
            </div>
            <div class="text mb-5">
                <p class="ml-3 mb-2">1. 이미지 + 텍스트 + 버튼(기능)으로 구성된 카드</p>
                <p class="ml-3 mb-5">2. 이미지 + 텍스트로 구성된 카드</p>
                <p class="ml-3 mb-2 font-weight-bold">1. 이미지 + 텍스트 + 버튼(기능)으로 구성된 카드 </p>
                <p class="ml-3 mb-4">이미지에 대한 타이틀, 설명을 포함하며 기능버튼을(다운로드, 링크) 포함한다.</p>
                <div class="mb-5">
                    <div class="card" style="width: 862px; height: 760px; margin: 20px;">
                        <p class="card-text-top" style="width: 862px; height: 485px; line-height: 485px;">Image</p>
                        <div class="card-body">
                            <p class="card-title">Title</p>
                            <p class="card-text">Adobe사에서 제공하는 무료 UI Kit<br />
                                종류별로 사이트를 관리하기에 좋은 디자인입니다.<br />
                                웹사이트 버전과 모바일 버전으로 나뉘어서 작업 할 수 있습니다.</p>
                            <button class="btn btn-lg btn-primary" style="width: 140px">BUTTON</button>
                        </div>
                    </div>
                </div>
                <p class="ml-3 mb-2 font-weight-bold">2. 이미지 + 텍스트 구성된 카드 </p>
                <p class="ml-3 mb-4">썸네일을 보여주는 카드로 이미지와 텍스트로 구성된다. </p>
                <div>
                    <div>
                        <div class="card" style="width: 366px; height: 290px; margin: 20px;">
                            <p class="card-text-top" style="width: 366px; height: 206px; line-height: 206px;">Image</p>
                            <div class="card-body">
                                <p class="card-title">Title</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="title-sm" id="form" style="padding-top: 75px;">7. 폼(Forms)</h3>
            <div class="text mb-3">
                입력에 관련된 내용으로 입력, 체크, 확인/설정
            </div>
            <div class="text mb-5">
                <p class="ml-3 mb-2">1. 인풋 박스</p>
                <p class="ml-3 mb-2">2. 셀렉트 박스 </p>
                <p class="ml-3 mb-2">3. 파일선택 인풋박스</p>
                <p class="ml-3 mb-2">4. 검색 인풋 박스</p>
                <p class="ml-3 mb-2">5. 이메일 주소 입력 인풋박스</p>
                <p class="ml-3 mb-2">7. 유효성(Validation)</p>
                <p class="ml-3 mb-5">8. 달력(Datepicker)</p>
                <p class="ml-3 mb-2 font-weight-bold">1. 인풋박스 </p>
                <p class="ml-3 mb-1">인풋박스는 흰색 배경에 스트록으로 표현된다.</p>
                <p class="ml-3 mb-1">일반적인 상태에서는 플레이스홀더를 사용하여 어떤 내용을 입력하는지 힌트를 준다.</p>
                <p class="ml-3 mb-1">입력 시 플레이스홀더는 사라지며 인풋박스의 테두리는 select 상태임을 나타내기 위해 색상이 진하게 바뀐다.</p>
                <p class="ml-3 mb-4">미리 입력된 내용이나 텍스트를 수정할 수 없는 Readonly 상태가 있다. (그레이 배경 컬러에 스트록없음)</p>
                <form class="pl-3 mb-5">
                    <div class="mb-3 font-weight-bold">Normal</div>
                    <div class="form-group mb-4">
                        <input type="text" class="form-control" title="example" placeholder="Normal" style="width: 200px;"/>
                    </div>
                    <div class="mb-3 font-weight-bold">Disabled</div>
                    <div class="form-group mb-4">
                        <input type="text" class="form-control" title="example" style="width: 200px;" placeholder="Disabled" disabled/>
                    </div>
                    <div class="mb-3 font-weight-bold">Read only</div>
                    <div class="form-group mb-4">
                        <input class="form-control" type="text" title="example" placeholder="read-only" style="margin-bottom: 10px; width: 200px;" readonly/>
                    </div>
                    <div class="mb-3 font-weight-bold">Size</div>
                    <div class="form-group">
                        <input class="form-control form-control-sm" title="example" type="text" placeholder="Small" style="width: 200px;margin-bottom: 10px; "/>
                        <input class="form-control" type="text" title="example" placeholder="Medium" style="margin-bottom: 10px; width: 200px;"/>
                    </div>
                </form>
                <p class="pl-3 mb-2 font-weight-bold">2. 셀렉트박스 </p>
                <p class="pl-3 mb-4">조건을 정해놓고 조건을 고를 때 사용한다.</p>
                <div class="pl-3 mb-3 font-weight-bold">Normal</div>
                <div class="pl-3 mb-4" style="width: 200px">
                    <select class="custom-select" title="Text">
                        <option selected>Normal</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="pl-3 mb-3 font-weight-bold">Disabled</div>
                <div class="pl-3 mb-4" style="width: 200px">
                    <select class="custom-select" disabled title="Text">
                        <option selected>Disabled</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="pl-3 mb-3 font-weight-bold">Size</div>
                <div class="input-group pl-3 mb-3" style="width: 200px">
                    <select class="custom-select custom-select-sm" title="example">
                        <option selected>Small</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="pl-3 mb-5" style="width: 200px">
                    <select class="custom-select" title="Text">
                        <option selected>Medium</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <p class="ml-3 mb-2 font-weight-bold">3. 파일선택 인풋박스</p>
                <p class="ml-3 mb-1">첨부파일을 선택할 때 사용한다.</p>
                <p class="ml-3 mb-4">파일을 선택하면 파일명은 자동으로 입력 된다.</p>
                <div class="pl-3 mb-3 font-weight-bold">Normal</div>
                <div class="input-group m-3 mb-4" style="width: 350px;">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFile01"/>
                            <label class="custom-file-label" for="inputGroupFile01">선택된 파일 없음</label>
                    </div>
                </div>
                <div class="pl-3 mb-3 font-weight-bold">Size</div>
                <div class="input-group m-3" style="width: 350px;">
                    <div class="custom-file custom-file-sm">
                        <input type="file" class="custom-file-input file-path validate" id="inputGroupFile03" aria-describedby="inputGroupFile03"/>
                            <label class="custom-file-label" for="inputGroupFile03">선택된 파일 없음</label>
                    </div>
                </div>
                <div class="input-group m-3 mb-5" style="width: 350px;">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFile04"/>
                            <label class="custom-file-label" for="inputGroupFile04">선택된 파일 없음</label>
                    </div>
                </div>
                <p class="ml-3 mb-2 font-weight-bold">4. 검색 인풋박스 </p>
                <p class="ml-3 mb-4">검색을 할 때 사용한다.</p>
                <form class="pl-3 mb-5">
                    <div class="mb-3 font-weight-bold">Normal</div>
                    <div class="input-group mb-4" style="width: 350px;">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-light btn-search" type="submit"><i class="fas fa-search"/></button>
                    </div>
                    <div class="mb-3 font-weight-bold">Disabled</div>
                    <div class="input-group mb-4" style="width: 350px;">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search" disabled/>
                            <button class="btn btn-outline-light btn-search disabled" type="submit"><i class="fas fa-search"/></button>
                    </div>
                    <div class="mb-3 font-weight-bold">Size</div>
                    <div class="input-group mb-3" style="width: 350px;">
                        <input class="form-control form-control-sm" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-light btn-search btn-search-sm" type="submit"><i class="fas fa-search"/>
                            </button>
                    </div>
                    <div class="input-group mb-5" style="width: 350px;">
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-light btn-search" type="submit"><i class="fas fa-search"/></button>
                    </div>
                </form>
                <p class="ml-3 mb-2 font-weight-bold">5. 이메일주소 입력 인풋박스 </p>
                <p class="ml-3 mb-1">이메일 주소를 입력할 때 사용한다.</p>
                <p class="ml-3 mb-4">주소를 직접입력하거나 선택해서 입력할 수 있다.</p>
                <div class="mb-3 pl-3 font-weight-bold">Normal</div>
                <form class="pl-3 mb-2">
                    <div class="form-row">
                        <div class="form-group col-4">
                            <input type="text" class="form-control" title="email01" placeholder="Text"/>
                        </div>
                        <div class="form-group col-4">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                </div>
                                <input type="text" class="form-control" title="email02" placeholder="Text"/>
                            </div>
                        </div>
                        <div class="form-group col-4">
                            <select class="custom-select" title="email03">
                                <option selected>Text</option>
                                <option>Text</option>
                                <option>Text</option>
                                <option>Text</option>
                            </select>
                        </div>
                    </div>
                </form>
                <div class="mb-3 pl-3 font-weight-bold">Disabled</div>
                <form class="pl-3 mb-2">
                    <div class="form-row">
                        <div class="form-group col-4">
                            <input type="text" class="form-control" title="email07" placeholder="Text" disabled/>
                        </div>
                        <div class="form-group col-4">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text disabled">@</div>
                                </div>
                                <input type="text" class="form-control" title="email08" placeholder="Text" disabled/>
                            </div>
                        </div>
                        <div class="form-group col-4">
                            <select class="custom-select" title="email09" disabled>
                                <option selected>Text</option>
                                <option>Text</option>
                                <option>Text</option>
                                <option>Text</option>
                            </select>
                        </div>
                    </div>
                </form>
                <div class="mb-3 pl-3 font-weight-bold">Size</div>
                <form class="pl-3">
                    <div class="form-row">
                        <div class="form-group col-4">
                            <input type="text" class="form-control form-control-sm" title="email04" placeholder="Text"/>
                        </div>
                        <div class="form-group col-4">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text input-group-text-sm">@</div>
                                </div>
                                <input type="text" class="form-control form-control-sm" title="email05" placeholder="Text"/>
                            </div>
                        </div>
                        <div class="form-group col-4">
                            <select class="custom-select custom-select-sm" title="email06">
                                <option selected>Text</option>
                                <option>Text</option>
                                <option>Text</option>
                                <option>Text</option>
                            </select>
                        </div>
                    </div>
                </form>
                <form class="pl-3 mb-5">
                    <div class="form-row">
                        <div class="form-group col-4">
                            <input type="text" class="form-control" title="email01" placeholder="Text"/>
                        </div>
                        <div class="form-group col-4">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                </div>
                                <input type="text" class="form-control" title="email02" placeholder="Text"/>
                            </div>
                        </div>
                        <div class="form-group col-4">
                            <select class="custom-select" title="email03">
                                <option selected>Text</option>
                                <option>Text</option>
                                <option>Text</option>
                                <option>Text</option>
                            </select>
                        </div>
                    </div>
                </form>
                <p class="ml-3 mb-2 font-weight-bold">6. 라디오/체크박스 </p>
                <p class="ml-3 mb-4">라디오/체크박스와 텍스트 사이는 6px 거리를 띄우며, 한줄에 나올경우 다음 라디오/체크박스 까지의 거리는 60px이다. </p>
                <div class="pl-3 mb-4 font-weight-bold">라디오</div>
                <div class="mb-4 pl-3">- Normal</div>
                <div class="ml-3 mb-5">
                    <div class="custom-control custom-radio mb-3">
                        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" checked/>
                            <label class="custom-control-label" for="customRadio1">Text</label>
                    </div>
                    <div class="custom-control custom-radio mb-3">
                        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
                            <label class="custom-control-label" for="customRadio2">Text</label>
                    </div>
                    <div class="custom-control custom-radio mb-3">
                        <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input"/>
                            <label class="custom-control-label" for="customRadio3">Text</label>
                    </div>
                </div>
                <div class="mb-4 pl-3">- Inline</div>
                <div class="ml-3 mb-5">
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" checked/>
                            <label class="custom-control-label" for="customRadioInline1">Text</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
                            <label class="custom-control-label" for="customRadioInline2">Text</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input"/>
                            <label class="custom-control-label" for="customRadioInline3">Text</label>
                    </div>
                </div>
                <div class="mb-4 pl-3">- Disabled</div>
                <div class="ml-3" style="margin-bottom: 70px">
                    <div class="custom-control custom-radio">
                        <input type="radio" name="radioDisabled" id="customRadioDisabled2" class="custom-control-input" disabled/>
                            <label class="custom-control-label" for="customRadioDisabled2">Text</label>
                    </div>
                </div>
                <div class="pl-3 mb-4 font-weight-bold">체크박스</div>
                <div class="mb-4 pl-3">- Normal</div>
                <div class="ml-3 mb-5">
                    <div class="custom-control custom-checkbox mb-3">
                        <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                            <label class="custom-control-label" for="customCheck1">Text</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                        <input type="checkbox" class="custom-control-input" id="customCheck2"/>
                            <label class="custom-control-label" for="customCheck2">Text</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                        <input type="checkbox" class="custom-control-input" id="customCheck3"/>
                            <label class="custom-control-label" for="customCheck3">Text</label>
                    </div>
                </div>
                <div class="mb-4 pl-3">- Inline</div>
                <div class="ml-3 mb-4">
                    <div class="custom-control custom-checkbox custom-control-inline mb-3">
                        <input type="checkbox" class="custom-control-input" id="customCheck4"/>
                            <label class="custom-control-label" for="customCheck4">Text</label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline mb-3">
                        <input type="checkbox" class="custom-control-input" id="customCheck5"/>
                            <label class="custom-control-label" for="customCheck5">Text</label>
                    </div>
                    <div class="custom-control custom-checkbox custom-control-inline mb-3">
                        <input type="checkbox" class="custom-control-input" id="customCheck6"/>
                            <label class="custom-control-label" for="customCheck6">Text</label>
                    </div>
                </div>
                <div class="mb-4 pl-3">- Disabled</div>
                <div class="ml-3" style="margin-bottom: 60px;">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheckDisabled1" disabled/>
                            <label class="custom-control-label" for="customCheckDisabled1">Text</label>
                    </div>
                </div>
                <p class="ml-3 mb-2 font-weight-bold">7. 밸리데이션(Validation) </p>
                <p class="ml-3 mb-1">유효성 검사를 통해 사용자에게 가치있고 실행 가능한 피드백을 제공한다.</p>
                <p class="ml-3 mb-1">보통 인풋박스 하단에 표현되며, 인풋박스와의 간격은 1px이다.</p>
                <p class="ml-3 mb-4">텍스트는 좌/우 마진 5px를 갖는다. </p>
                <form class="pl-3 mb-5">
                    <div class="form-group" style="width: 200px; margin-bottom: 50px;">
                        <input type="text" class="form-control is-invalid" placeholder="Text" title="example" style="width: 200px;" required/>
                            <div class="invalid-feedback">
                                Text
                            </div>
                    </div>
                    <div class="form-group" style="width: 200px;">
                        <input type="text" class="form-control is-invalid" placeholder="Text" title="example" style="width: 200px;" required/>
                            <div class="invalid-feedback">
                                Text Text Text Text Text Text Text Text
                            </div>
                    </div>
                </form>
                <p class="ml-3 mb-2 pt-5 font-weight-bold">8. 달력(Datepicker)</p>
                <p class="ml-3 mb-1">날짜를 직접 입력하거나 Datepicker를 통해 선택할수 있다.</p>
                <p class="ml-3 mb-4">인풋박스의 상단에 위치한다.</p>
                <div class="mb-3 pl-3 font-weight-bold">Normal</div>
                <div class="pl-3 mb-4">
                    <div class="input-group date" data-provide="datepicker" data-date-today-highlight="true" data-date-language="kr" data-date-format="yyyy-mm-dd" autoclose="true" style="width: 400px">
                        <input type="text" id="datePicker" class="form-control" placeholder="2020-02-23" title="datepicker" data-autohide="true"/>
                            <button class="btn btn-outline-light btn-calendar add-on" type="submit"><i class="far fa-calendar-alt"/>
                            </button>
                    </div>
                </div>
                <div class="mb-3 pl-3 font-weight-bold">Size</div>
                <div class="pl-3 mb-3">
                    <div class="input-group date" data-provide="datepicker" data-date-today-highlight="true" data-date-language="kr" data-date-format="yyyy-mm-dd" autoclose="true" style="width: 400px">
                        <input type="text" id="datePicker2" class="form-control form-control-sm" placeholder="2020-02-23" title="datepicker" data-autohide="true"/>
                            <button class="btn btn-outline-light btn-calendar btn-calendar-sm add-on" type="submit"><i class="far fa-calendar-alt"/></button>
                    </div>
                </div>
                <div class="pl-3 mb-3">
                    <div class="input-group date" data-provide="datepicker" data-date-today-highlight="true" data-date-language="kr" data-date-format="yyyy-mm-dd" autoclose="true" style="width: 400px">
                        <input type="text" id="datePicker" class="form-control" placeholder="2020-02-23" title="datepicker" data-autohide="true"/>
                            <button class="btn btn-outline-light btn-calendar add-on" type="submit"><i class="far fa-calendar-alt"/>
                            </button>
                    </div>
                </div>
            </div>

            <h3 class="title-sm" id="pagination" style="padding-top: 75px;">8. 페이지네이션(Pagination)</h3>
            <div class="text mb-3">
                <span>리스트가 많아 세로 스크롤이 길어질 경우 페이지로 구분하여 나타낼 경우 사용한다. <br />
                    버튼 및 숫자 사이즈는 30px X 30px이며, 간격은 10px이다.<br />
                    페이지 넘버가 길어질 경우(3자리) 숫자 좌/우 마진 5px 만큼 사이즈 늘어난다.
                </span>
            </div>
            <div class="text mb-5">
                <nav aria-label="Page navigation example">
                    <ul class="pagination pagination-circle">
                        <li class="page-item disabled">
                            <a class="page-link page-arrow" aria-label="Previous">
                                <span aria-hidden="true"><i class="fa fa-angle-double-left"/></span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item disabled">
                            <a class="page-link page-arrow" aria-label="Previous">
                                <span aria-hidden="true"><i class="fa fa-angle-left"/></span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item active"><a class="page-link">1</a></li>
                        <li class="page-item"><a class="page-link">2</a></li>
                        <li class="page-item"><a class="page-link">3</a></li>
                        <li class="page-item"><a class="page-link">4</a></li>
                        <li class="page-item"><a class="page-link">5</a></li>
                        <li class="page-item">
                            <a class="page-link page-arrow" aria-label="Next">
                                <span aria-hidden="true"><i class="fa fa-angle-right"/></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link page-arrow" aria-label="Next">
                                <span aria-hidden="true"><i class="fa fa-angle-double-right"/></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <h3 class="title-sm" id="tab" style="padding-top: 75px;">9. 탭(Tab)</h3>
            <div class="text mb-3">
                <span>화면이동 없이 내용을 바꿀 때 사용한다. <br />
                    SNB와 같이 사용하여 SNB 메뉴를 눌렀을 때 메뉴가 탭으로 쌓인다.
                </span>
            </div>
            <div class="text mb-5">
                <p class="ml-3 mb-2">1. 내용을 바꿀 때사용하는 탭</p>
                <p class="ml-3 mb-5">2. SNB와 같이 사용하는 탭</p>
                <p class="ml-3 mb-2 font-weight-bold">1. 내용을 바꿀 때 사용하는 탭</p>
                <p class="ml-3 mb-1">정보의 내용이 같으나 내용을 따로 구분하고 싶을 때 사용한다.</p>
                <p class="ml-3 mb-1">화면의 이동없이 탭 선택 시 내용을 바꿀 때 사용한다.</p>
                <p class="ml-3 mb-4">탭선택 시 컬러의 차이뿐 아니라 탭사이즈와 텍스트가 커져 선택된 탭을 강조 수 있다.</p>
                <div class="pl-3" style="margin-bottom: 200px;">
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
                            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
                            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent" style="height: 50px">
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" style="padding: 0;color: #a4cad1; background: #eef9fb;line-height: 204px; text-align: center;font-size: 24px;">
                            Home
                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" style="padding: 0;color: #a4cad1; background: #eef9fb;line-height: 204px; text-align: center;font-size: 24px;">
                            Profile
                        </div>
                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" style="padding: 0;color: #a4cad1; background: #eef9fb;line-height: 204px; text-align: center;font-size: 24px;">
                            Contact
                        </div>
                    </div>
                </div>
                <div class="pl-3" style="margin-bottom: 40px;">
                    <ul class="nav nav-tabs nav-tabs-lg" id="myTab" role="tablist" style="min-width: 970px">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" style="min-width:970px; padding: 0;color: #a4cad1; background: #eef9fb;line-height: 204px; text-align: center;font-size: 24px;">
                            Home</div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" style="min-width:970px; padding: 0;color: #a4cad1; background: #eef9fb;line-height: 204px; text-align: center;font-size: 24px;">
                            Profile</div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab" style="min-width:970px; padding: 0;color: #a4cad1; background: #eef9fb;line-height: 204px; text-align: center;font-size: 24px;">
                            Contact
                        </div>
                    </div>
                </div>
                <p class="ml-3 mb-2 font-weight-bold">2. SNB와 같이 사용하는 탭</p>
                <p class="ml-3 mb-1">SNB와 같이 사용하여 SNB 메뉴를 눌렀을 경우 화면을 생성하면서 상단에 탭으로 쌓인다.</p>
                <p class="ml-3 mb-4">탭에 닫기 버튼을 두어 화면을 닫을 수 있다.</p>
                <div class="m-3">
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab2" role="tablist">
                            <a class="nav-item nav-link icon active" id="nav-home-tab2" data-toggle="tab" href="#nav-home2" role="tab" aria-controls="nav-home2" aria-selected="true">Home<i class="far fa-close"></i></a>
                            <a class="nav-item nav-link icon" id="nav-profile-tab2" data-toggle="tab" href="#nav-profile2" role="tab" aria-controls="nav-profile2" aria-selected="false">Profile</a>
                            <a class="nav-item nav-link icon" id="nav-contact-tab2" data-toggle="tab" href="#nav-contact2" role="tab" aria-controls="nav-contact2" aria-selected="false">Contact</a>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent2">
                        <div class="tab-pane fade show active" id="nav-home2" role="tabpanel" aria-labelledby="nav-home-ta2b" style="padding: 0;color: #a4cad1; background: #eef9fb;line-height: 204px; text-align: center;font-size: 24px;">
                            Home
                        </div>
                        <div class="tab-pane fade" id="nav-profile2" role="tabpanel" aria-labelledby="nav-profile-tab2" style="padding: 0;color: #a4cad1; background: #eef9fb;line-height: 204px; text-align: center;font-size: 24px;">
                            Profile</div>
                        <div class="tab-pane fade" id="nav-contact2" role="tabpanel" aria-labelledby="nav-contact-tab2" style="padding: 0;color: #a4cad1; background: #eef9fb;line-height: 204px; text-align: center;font-size: 24px;">
                            Contact</div>
                    </div>
                </div>

            </div>

            <h3 class="title-sm" id="table" style="padding-top: 75px;">10. 테이블(Table)</h3>
            <div class="text mb-3">
                <span>표가 필요한 경우 사용한다. <br />
                    테이블의 기본 높이는 40px이다.<br />
                    테이블은 라인으로 구분되나 세로 라인은 그리지 않는다. <br />
                    테이블의 리스트는 홀수열에 흐린 bg컬러를 사용하여 열간 구분을 명확하게 한다. <br />
                    리스트는 포커스 될 수 있으며, 포커스 컬러는 메인컬러에 화이트(#FFFFFF) 80% 비율의 컬러값을 사용한다.
                </span>
            </div>
            <div class="text mb-5">
                <table class="table table-hover table-striped">
                    <thead class="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Simon</td>
                        <td>홀수</td>
                        <td>홀수</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Menard</td>
                        <td>짝수</td>
                        <td>짝수</td>
                    </tr>
                    <tr class="table-active">
                        <th scope="row">3</th>
                        <td>Janie</td>
                        <td>active</td>
                        <td>active</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Renz</td>
                        <td>짝수</td>
                        <td>짝수</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Andrea</td>
                        <td>홀수</td>
                        <td>홀수</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="title-sm" id="snb" style="padding-top: 75px;">11. 사이드 네비게이션 바(SNB)</h3>
            <div class="text mb-3">
                <span>웹사이트 서브 화면에서 Depth 이동을 할 때 사용한다.<br />
                    메인화면에서 메뉴를 구성 할 때 사용한다.
                </span>
            </div>
            <div class="text mb-5">
                <p class="ml-3 mb-2">1. 서브화면에서 Depth 이동</p>
                <p class="ml-3 mb-5">2. 메인화면에서 메뉴로 사용</p>
                <p class="ml-3 mb-2 font-weight-bold">1. 서브화면에서 Depth 이동 </p>
                <p class="ml-3 mb-1">웹사이트의 서브화면에서 동일 Depth를 이동할 때 사용한다.</p>
                <p class="ml-3 mb-4">텍스트로만 구성되거나, 아이콘 + 텍스트로 구성된다.</p>
                <div class="row pl-3 mb-5">
                    <div class="col-3">
                        <div class="nav flex-column nav-pills nav-pills-light" id="v-pills-tab2" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-home-tab2" data-toggle="pill" href="#v-pills-home2" role="tab" aria-controls="v-pills-home" aria-selected="true"><i class="fas fa-circle"/>Home</a>
                            <a class="nav-link" id="v-pills-profile-tab2" data-toggle="pill" href="#v-pills-profile2" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class="fas fa-circle"/>Profile</a>
                            <a class="nav-link" id="v-pills-messages-tab2" data-toggle="pill" href="#v-pills-messages2" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fas fa-circle"/>Messages</a>
                            <a class="nav-link" id="v-pills-settings-tab2" data-toggle="pill" href="#v-pills-settings2" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i class="fas fa-circle"/>Settings</a>
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="tab-content" id="v-pills-tabContent2">
                            <div class="tab-pane fade show active" id="v-pills-home2" role="tabpanel" aria-labelledby="v-pills-home-tab2" style="padding: 0;color: #a4cad1; background: #eef9fb;line-height: 204px; text-align: center;font-size: 24px;">Home
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile2" role="tabpanel" aria-labelledby="v-pills-profile-tab2" style="padding: 0;color: #a4cad1; background: #eef9fb;line-height: 204px; text-align: center;font-size: 24px;">
                                Profile
                            </div>
                            <div class="tab-pane fade" id="v-pills-messages2" role="tabpanel" aria-labelledby="v-pills-messages-tab2" style="padding: 0;color: #a4cad1; background: #eef9fb;line-height: 204px; text-align: center;font-size: 24px;">
                                Messages
                            </div>
                            <div class="tab-pane fade" id="v-pills-settings2" role="tabpanel" aria-labelledby="v-pills-settings-tab2" style="padding: 0;color: #a4cad1; background: #eef9fb;line-height: 204px; text-align: center;font-size: 24px;">
                                Settings
                            </div>
                        </div>
                    </div>
                </div>

                <p class="ml-3 mb-2 font-weight-bold">2. 메인화면에서 메뉴로 사용</p>
                <p class="ml-3 mb-1">대시보드나, 관리화면에서 메뉴로 사용한다.</p>
                <p class="ml-3 mb-4">1Depth 메뉴에만 아이콘이 붙으며, 뎁스는 2Depth 까지만 구성된다. </p>
                <div class="row pl-3 mb-3">
                    <div class="col-3">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home<i class="fas fa-angle-right"/></a>
                            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile<i class="fas fa-angle-right"/></a>
                            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages<i class="fas fa-angle-right"/></a>
                            <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings<i class="fas fa-angle-right"/></a>
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" style="padding: 0;color: #a4cad1; background: #eef9fb;line-height: 204px; text-align: center;font-size: 24px;">
                                Home
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" style="padding: 0;color: #a4cad1; background: #eef9fb;line-height: 204px; text-align: center;font-size: 24px;">
                                Profile
                            </div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" style="padding: 0;color: #a4cad1; background: #eef9fb;line-height: 204px; text-align: center;font-size: 24px;">
                                Messages
                            </div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" style="padding: 0;color: #a4cad1; background: #eef9fb;line-height: 204px; text-align: center;font-size: 24px;">
                                Settings
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="title-sm" id="navbar" style="padding-top: 75px;">12. 네비게이션 바(Navigation Bars)</h3>
            <div class="text mb-3">
                <span>웹사이트의 가로넓이 1200px를 기준으로 한다. <br />
                    로고는 좌측 30px을 띄우며, 메뉴는 로고를 기준으로 90px 띄운다.<br />
                    메뉴간 간격은 90px이며 메뉴 포커스시 메뉴 하단에 바가 생긴다.<br />
                    바는 텍스트 길이보다 10px 크다.<br />
                    메뉴명의 길이, 메뉴의 개수에 따라 메뉴사이 간격이 변동 될 수 있다.
                </span>
            </div>
            <div class="text">
                <div class="mb-5">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                        <a class="navbar-brand" href="#">LOGO</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"/>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">menu<span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">menu</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">menu</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">menu</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div style="margin-bottom: 40px;">
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <a class="navbar-brand" href="#">LOGO</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"/>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent2">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">menu<span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">menu</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">menu</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">menu</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            <h3 class="title-sm" id="modal" style="padding-top: 75px;">13. 모달(Modal)</h3>
            <div class="text mb-3">
                <span>사이즈는 Extra Large(1200px), Large(800px), Medium(600px), Small(380px) 4가지를 사용한다. <br />
                    모달은 제목, 본문, 바닥 글의 기본 섹션으로 나뉜다.<br />
                    Dialog와 Alert는 small(380px) 사이즈를 사용한다.
                </span>
            </div>
            <div class="text" style="margin-bottom: 500px;">
                <p class="ml-3 mb-2">1. 일반 Modal</p>
                <p class="ml-3 mb-5">2. Dialog & Alert</p>
                <p class="ml-3 mb-2 font-weight-bold">1. 일반 Modal </p>
                <p class="ml-3 mb-1">사이즈는 Extra Large(1200px), Large(800px), Medium(600px)을 사용한다. </p>
                <p class="ml-3 mb-1">Dialog & Alert 제외하고 본문의 내용이 많을경우 사용한다. </p>
                <p class="ml-3 mb-4">바닥글에 포함되는 버튼은 상황에 따라서 다양한 사이즈(Medium, Lage, ExtraLarge)를 사용할 수 있다.</p>
                <div class="pl-3 mb-5">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Extra large
                        modal
                    </button>
                    <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <span class="modal-title" id="myExtraLargeModalLabel">Extra large modal</span>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci excepturi id laboriosam odio quia
                                    quisquam quos repellendus sapiente sit. Ab, accusantium aspernatur aut consequatur culpa deserunt
                                    dolorem doloribus dolorum earum error ipsam molestiae nesciunt nisi non nostrum officiis omnis optio
                                    reiciendis repudiandae temporibus totam veniam veritatis vitae voluptate voluptatibus. A ab adipisci
                                    animi aperiam asperiores, aspernatur assumenda aut cumque deleniti dicta doloremque dolores eius esse et
                                    facere harum impedit ipsam, itaque laudantium molestiae mollitia nostrum nulla numquam officia optio
                                    perferendis, provident quae quasi quos repudiandae rerum sapiente sit tempore temporibus veritatis
                                    voluptates voluptatum. Beatae facilis illum ipsa quod vitae?
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large
                        modal
                    </button>
                    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <span class="modal-title" id="myLargeModalLabel">Large modal</span>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam animi autem beatae, commodi
                                    consectetur cupiditate, eligendi eum eveniet excepturi iste minima molestiae nesciunt nobis nostrum quam
                                    quis repellat rerum sed velit? Animi deserunt doloribus ducimus et excepturi expedita explicabo itaque
                                    iusto laborum necessitatibus placeat quae quis reiciendis repellat, vitae! Alias aliquam, aut doloribus,
                                    eaque eos error eum eveniet exercitationem facilis fugiat fugit illum in minus necessitatibus nemo neque
                                    nihil nulla possimus provident quam quas unde veritatis. Ab culpa distinctio fugiat illum ipsa ipsam
                                    laboriosam, minus molestias nisi porro quas quos. Ab exercitationem quod tempore! Dicta hic illo
                                    possimus quaerat.
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">Medium modal
                    </button>
                    <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <span class="modal-title" id="exampleModalLabel1">Medium modal</span>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam animi autem beatae, commodi
                                    consectetur cupiditate, eligendi eum eveniet excepturi iste minima molestiae nesciunt nobis nostrum quam
                                    quis repellat rerum sed velit? Animi deserunt doloribus ducimus et excepturi expedita explicabo itaque
                                    iusto laborum necessitatibus placeat quae quis reiciendis repellat, vitae! Alias aliquam, aut doloribus,
                                    eaque eos error eum eveniet exercitationem facilis fugiat fugit illum in minus necessitatibus nemo neque
                                    nihil nulla possimus provident quam quas unde veritatis. Ab culpa distinctio fugiat illum ipsa ipsam
                                    laboriosam, minus molestias nisi porro quas quos. Ab exercitationem quod tempore! Dicta hic illo
                                    possimus quaerat.
                                </div>
                            </div>
                        </div>
                    </div>


                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small
                        modal
                    </button>

                    <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <span class="modal-title" id="mySmallModalLabel">Small modal</span>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, ea eos, facilis fugit nam nihil
                                    omnis quae quos reiciendis saepe tempora voluptates. Ab amet aperiam atque consequatur est illum in,
                                    laudantium nam nesciunt perspiciatis quas quia sapiente sequi tempora ullam velit voluptas? Deserunt eos
                                    exercitationem id magni minima tempore tenetur?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="ml-3 mb-2 font-weight-bold">2. Dialog & Alert </p>
                <p class="ml-3 mb-1">사이즈는 Medium(600px)을 사용한다. </p>
                <p class="ml-3 mb-2">웹사이트에서 어떠한 행위를 하였을 때 알림을 주거나 주의를 주는 용도로 사용한다. </p>
                <div class="pl-3 mb-4">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">dialog</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <span class="modal-title" id="exampleModalLabel">Modal title</span>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem facilis itaque nulla placeat sunt
                                    tenetur?
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-lg btn-outline-secondary" data-dismiss="modal" style="width: 47%;">
                                        Close
                                    </button>
                                    <button type="button" class="btn btn-lg btn-primary" style="width: 47%;">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2">alert</button>
                    <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <span class="modal-title" id="exampleModalLabel2">Modal title</span>
                                </div>
                                <div class="modal-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium adipisci alias animi atque
                                    deserunt distinctio ea eligendi et fuga id, illo ipsa iure libero maiores mollitia nobis nulla optio
                                    pariatur porro quasi ratione recusandae tempora velit voluptatem. Ab alias amet blanditiis cumque dicta
                                    dolorum ex ipsam molestiae mollitia neque odio perspiciatis, placeat praesentium quaerat repellendus
                                    tenetur vel voluptas voluptatem.
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-lg btn-primary btn-block" style="width: 165px">Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Component;
