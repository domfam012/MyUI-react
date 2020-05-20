import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cookie from "js-cookie";

import { Carousel, Pagination, Tabs, Tab, Nav, Button, Modal } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// bootstrap 에서 사용한 datetimepicker 리액트 버전 -> 리액트 버전 호환 문제로 사용 불가
// import DateTimeField from "react-bootstrap-datetimepicker";

// https://reactdatepicker.com/
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ val, onClick }) => (
  <div onClick={onClick}>
    <input
      type="text"
      id="datePicker"
      className="form-control"
      placeholder="2020-02-23"
      title="datepicker"
      data-autohide="true"
      value={val}
      style={{ width: "200px" }}
    />
    <button className="btn btn-outline-light btn-calendar add-on" type="submit">
      <i className="far fa-calendar-alt" />
    </button>
  </div>
);

const DateInputSm = ({ val, onClick }) => (
  <div onClick={onClick}>
    <input
      type="text"
      id="datePicker2"
      className="form-control form-control-sm"
      placeholder="2020-02-23"
      title="datepicker"
      data-autohide="true"
      value={val}
      style={{ width: "200px" }}
    />
    <button
      className="btn btn-outline-light btn-calendar btn-calendar-sm add-on"
      type="submit"
    >
      <i className="far fa-calendar-alt" />
    </button>
  </div>
);

const DateInputLg = ({ val, onClick }) => (
  <div onClick={onClick}>
    <input
      type="text"
      id="datePicker"
      className="form-control"
      placeholder="2020-02-23"
      title="datepicker"
      data-autohide="true"
      value={val}
      style={{ width: "200px" }}
    />
    <button className="btn btn-outline-light btn-calendar add-on" type="submit">
      <i className="far fa-calendar-alt" />
    </button>
  </div>
);

// Component
const Component = props => {
  const router = useRouter();

  const [activePage, setActivePage] = useState(1);
  const [date, setDate] = useState(new Date());

  const [tabKey, setTabKey] = useState("home");

  const [xlModalShow, setXlModalShow] = useState(false);
  const handleXlModalClose = () => setXlModalShow(false);
  const handleXlModalShow = () => setXlModalShow(true);

  const [lgModalShow, setLgModalShow] = useState(false);
  const handleLgModalClose = () => setLgModalShow(false);
  const handleLgModalShow = () => setLgModalShow(true);

  const [mdModalShow, setMdModalShow] = useState(false);
  const handleMdModalClose = () => setMdModalShow(false);
  const handleMdModalShow = () => setMdModalShow(true);

  const [smModalShow, setSmModalShow] = useState(false);
  const handleSmModalClose = () => setSmModalShow(false);
  const handleSmModalShow = () => setSmModalShow(true);

  const [dialogShow, setDialogShow] = useState(false);
  const handleDialogClose = () => setDialogShow(false);
  const handleDialogShow = () => setDialogShow(true);

  const [alertShow, setAlertShow] = useState(false);
  const handleAlertClose = () => setAlertShow(false);
  const handleAlertShow = () => setAlertShow(true);

  const DateContainer = ({ className, children }) => {
    return (
      <div stlye={"z-index: 120"}>
        <CalendarContainer className={className}>
          <div>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <>
      <div className="doc-content">

        <h2 className="title">구성요소</h2>

        <div id="badge">
          <h3 className="title-sm">1. 뱃지(Badge)</h3>
          <div className="text mb-3">
          <span>
            텍스트 뒤에 붙어 상태를 나타내거나 버튼의 일부로 사용되어 새롭거나
            읽지않은 항목을 강조한다.
          </span>
          </div>
          <div className="text mb-4">
            <p className="pl-3 mb-2">1. 상태를 나타내는 경우</p>
            <p className="pl-3 mb-2">2. 버튼의 일부로 사용되는 경우</p>
            <p className="pl-3 mb-5">3. 링크로 사용되는 경우</p>
            <p className="ml-3 mb-2 font-weight-bold">1. 상태를 나타내는 경우</p>
            <p className="ml-3 mb-3">
              게시판, 공지사항, FAQ등의 제목뒤에 붙어 상태를 나타낼 때 사용한다.
            </p>
          </div>
          <div className="ml-5 pl-3 mb-5">
            <h1 className="mb-3">
              Example heading <span className="badge badge-primary">New</span>
            </h1>
            <h2 className="mb-3">
              Example heading <span className="badge badge-primary">New</span>
            </h2>
            <h3 className="mb-3">
              Example heading <span className="badge badge-primary">New</span>
            </h3>
            <h4 className="mb-3">
              Example heading <span className="badge badge-primary">New</span>
            </h4>
            <h5 className="mb-3">
              Example heading <span className="badge badge-primary">New</span>
            </h5>
            <h6>
              Example heading <span className="badge badge-primary">New</span>
            </h6>
          </div>
          <div className="text mb-4">
            <p className="ml-3 mb-2 font-weight-bold">
              2. 버튼의 일부로 사용되는 경우
            </p>
            <p className="ml-3 mb-1">
              버튼의 일부로 사용되어 버튼의 기능에 따르는 항목을 강조한다.{" "}
            </p>
            <p className="ml-3">
              예) 메일 수신 버튼에 같이 사용하여 수신된 메일이 몇 개 있는지
              알려준다.
            </p>
          </div>
          <div className="ml-5 pl-3 mb-5">
            <button type="button" className="btn btn-primary">
              Notifications <span className="badge">4</span>
            </button>
          </div>
          <div className="ml-5 pl-3 mb-5">
            <p className="pl-1 mb-3 font-weight-bold">3. 링크로 사용되는 경우</p>
            <a href="#" className="badge badge-primary">
              Primary
            </a>
            <a href="#" className="badge badge-normal">
              Normal
            </a>
          </div>
        </div>

        <div id="breadcrumb">
          <h3 className="title-sm com-pt">
            2. 경로(Breadcrumb)
          </h3>
          <div className="text mb-3">
            네비게이션 체계 내에서 현재페이지 위치를 나타낸다.
          </div>
          <div className="text">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  Home
                </li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Library
                </li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Library</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Data
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div id="step">
          <h3 className="title-sm com-pt">
            3. 단계(Step)
          </h3>
          <div className="text mb-3">
            회원가입 등 절차가 있는경우 사용자에게 단계(현재순서, 다음순서,
            작성완료)를 확인 시킨다.
          </div>
          <div className="text mb-5">
            <p className="ml-3 mb-2 font-weight-bold">
              1. 단계와 텍스트가 분리된 경우
            </p>
            <p className="ml-3 mb-1">
              절차가 많지않아 공간의 여유가 있을경우 사용한다.
            </p>
            <p className="ml-3 mb-4">중앙정렬을 기본으로 한다.</p>
            <div className="clearfix mb-5">
              <ul className="step">
                <li className="current">Text</li>
                <li>Text</li>
                <li>Text</li>
              </ul>
            </div>
            <div className="clearfix mb-5">
              <ul className="step">
                <li className="active">Text</li>
                <li className="current">Text</li>
                <li>Text</li>
              </ul>
            </div>
            <div className="clearfix mb-5">
              <ul className="step">
                <li className="active">Text</li>
                <li className="active">Text</li>
                <li className="current">Text</li>
              </ul>
            </div>
            <p className="ml-3 mb-2 font-weight-bold">
              2. 단계와 텍스트가 합쳐진 경우
            </p>
            <p className="ml-3 mb-4">1번보다 공간의 여유가 적을경우 사용한다.</p>
            <div className="mb-5">
              <div className="step-arrow-center clearfix mb-2">
                <ul className="step-arrow">
                  <li className="active">
                    <span>Text</span>
                  </li>
                  <li>
                    <span>TextText</span>
                  </li>
                  <li>
                    <span>TextTextText</span>
                  </li>
                </ul>
              </div>
              <div className="step-arrow-center clearfix mb-2">
                <ul className="step-arrow">
                  <li className="done">
                    <span>Text</span>
                  </li>
                  <li className="active">
                    <span>TextText</span>
                  </li>
                  <li>
                    <span>TextTextText</span>
                  </li>
                </ul>
              </div>
              <div className="step-arrow-center clearfix mb-2">
                <ul className="step-arrow">
                  <li className="done">
                    <span>Text</span>
                  </li>
                  <li className="done">
                    <span>TextText</span>
                  </li>
                  <li className="active">
                    <span>TextTextText</span>
                  </li>
                </ul>
              </div>
              <div className="step-arrow-center clearfix mb-5">
                <ul className="step-arrow">
                  <li className="done">
                    <span>Text</span>
                  </li>
                  <li className="done">
                    <span>TextText</span>
                  </li>
                  <li className="done">
                    <span>TextTextText</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="slide">
          <h3 className="title-sm com-pt">
            4. 슬라이드(carousel)
          </h3>
          <div className="text mb-3">
            <span>
              웹 사이트에서 이미지를 순환하여 보여줄 경우 사용한다.
              <br />
              이미지는 10개 이하를 사용한다.
              <br />
              좌/우 컨트롤과 함께 표시기를 함께 사용할 수 있다.(표시기를 눌렀을 경우
              해당이미지 표출)
            </span>
          </div>
          <div className="text mb-5">
            <Carousel slide={false}>
              <Carousel.Item>
                <p className="com-carousel-col01" style={{ height: "100%" }}>
                  First Slide
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p className="com-carousel-col02" style={{ height: "100%" }}>
                  Second Slide
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p className="com-carousel-col03" style={{ height: "100%" }}>
                  Third Slide
                </p>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div id="button">
          <h3 className="title-sm com-pt">
            5. 버튼(Button)
          </h3>
          <div className="text mb-3">다양한 크기, 스타일을 지원한다.</div>
          <div className="text">
            <p className="ml-3 mb-2">1. 기본 버튼</p>
            <p className="ml-3 mb-2">2. 아웃라인 버튼</p>
            <p className="ml-3 mb-2">3. 아이콘과 같이 사용되는 버튼</p>
            <p className="ml-3 mb-5">4. 링크</p>
            <p className="ml-3 mb-2 font-weight-bold">1. 기본버튼</p>
            <p className="ml-3 mb-1">
              기본버튼은 5가지 사이즈(Extra Samll, Small, Medium, Lage,
              ExtraLarge)로 구성되어 있다.
            </p>
            <p className="ml-3 mb-1">
              기본 Extra Samll, Small, Medium 버튼 사이즈는 가로 80px 이며, 텍스트가
              길어질 경우 좌/우 마진 10px를 유지한다.
            </p>
            <p className="ml-3 mb-3">
              Primary 컬러는 주요 기능/결정 버튼으로 사용한다.
            </p>
            <div className="pl-3 mb-5">
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-light">Light</button>
            </div>
            <div className="ml-3 mb-2 font-weight-bold">Size</div>
            <div className="pl-3 mb-3">
              <div className="com-btn">
                <button type="button" className="btn btn-xs btn-primary">
                  Extra Small
                </button>
              </div>
              <div className="com-btn">
                <button type="button" className="btn btn-xs btn-secondary">
                  Extra Small
                </button>
              </div>
              <div className="com-btn">
                <button type="button" className="btn btn-xs btn-light">
                  Extra Small
                </button>
              </div>
            </div>
            <div className="pl-3 mb-3">
              <div className="com-btn">
                <button type="button" className="btn btn-sm btn-primary">
                  Small
                </button>
              </div>
              <div className="com-btn">
                <button type="button" className="btn btn-sm btn-secondary">
                  Small
                </button>
              </div>
              <div className="com-btn">
                <button type="button" className="btn btn-sm btn-light">
                  Small
                </button>
              </div>
            </div>
            <div className="pl-3 mb-3">
              <div className="com-btn">
                <button type="button" className="btn btn-primary">
                  Medium
                </button>
              </div>
              <div className="com-btn">
                <button type="button" className="btn btn-secondary">
                  Medium
                </button>
              </div>
              <div className="com-btn">
                <button type="button" className="btn btn-light">
                  Medium
                </button>
              </div>
            </div>
            <div className="pl-3 mb-3">
              <button type="button" className="btn btn-lg btn-primary">
                Large
              </button>
              <button type="button" className="btn btn-lg btn-secondary">
                Large
              </button>
              <button type="button" className="btn btn-lg btn-light">
                Large
              </button>
            </div>
            <div className="pl-3 mb-5">
              <button type="button" className="btn btn-xl btn-primary">
                Extra Large
              </button>
              <button type="button" className="btn btn-xl btn-secondary">
                Extra Large
              </button>
              <button type="button" className="btn btn-xl btn-light">
                Extra Large
              </button>
            </div>
            <div className="ml-3 mb-2 font-weight-bold">Disabled</div>
            <div className="pl-3 mb-5">
              <button
                  className="btn btn-primary btn-lg disabled"
                  disabled="disabled"
              >
                disabled
              </button>
              <button
                  className="btn btn-secondary btn-lg disabled"
                  disabled="disabled"
              >
                disabled
              </button>
              <button className="btn btn-light btn-lg disabled">disabled</button>
            </div>
            <p className="ml-3 mb-2 font-weight-bold">2. 아웃라인 버튼</p>
            <p className="ml-3 mb-1">
              5가지 사이즈(Extra Samll, Small, Medium, Lage, ExtraLarge)로 구성되어
              있다.
            </p>
            <p className="ml-3 mb-3">
              기본 Extra Samll, Small, Medium 버튼 사이즈는 가로 80px 이며, 텍스트가
              길어질 경우 좌/우 마진 10px를 유지한다.
            </p>
            <div className="pl-3 mb-5">
              <button type="button" className="btn btn-outline-primary">
                Primary
              </button>
              <button type="button" className="btn btn-outline-secondary">
                Light
              </button>
              <button type="button" className="btn btn-outline-light">
                Light
              </button>
            </div>
            <div className="ml-3 mb-2 font-weight-bold">Size</div>
            <div className="pl-3 mb-3">
              <div className="com-btn">
                <button type="button" className="btn btn-xs btn-outline-primary">
                  Extra Small
                </button>
              </div>
              <div className="com-btn">
                <button type="button" className="btn btn-xs btn-outline-secondary">
                  Extra Small
                </button>
              </div>
              <div className="com-btn">
                <button type="button" className="btn btn-xs btn-outline-light">
                  Extra Small
                </button>
              </div>
            </div>
            <div className="pl-3 mb-3">
              <div className="com-btn">
                <button type="button" className="btn btn-sm btn-outline-primary">
                  Small
                </button>
              </div>
              <div className="com-btn">
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  Small
                </button>
              </div>
              <button type="button" className="btn btn-sm btn-outline-light">
                Small
              </button>
            </div>
            <div className="pl-3 mb-3">
              <div className="com-btn">
                <button type="button" className="btn btn-outline-primary">
                  Medium
                </button>
              </div>
              <div className="com-btn">
                <button type="button" className="btn btn-outline-secondary">
                  Medium
                </button>
              </div>
              <div className="com-btn">
                <button type="button" className="btn btn-outline-light">
                  Medium
                </button>
              </div>
            </div>
            <div className="pl-3 mb-3">
              <div className="com-btn">
                <button type="button" className="btn btn-lg btn-outline-primary">
                  Large
                </button>
              </div>
              <div className="com-btn">
                <button type="button" className="btn btn-lg btn-outline-secondary">
                  Large
                </button>
              </div>
              <div className="com-btn">
                <button type="button" className="btn btn-lg btn-outline-light">
                  Large
                </button>
              </div>
            </div>
            <div className="pl-3 mb-5">
              <button type="button" className="btn btn-xl btn-outline-primary">
                Extra Large
              </button>
              <button type="button" className="btn btn-xl btn-outline-secondary">
                Extra Large
              </button>
              <button type="button" className="btn btn-xl btn-outline-light">
                Extra Large
              </button>
            </div>
            <div className="ml-3 mb-2 font-weight-bold">Disabled</div>
            <div className="pl-3 mb-5">
              <button
                  className="btn btn-primary btn-lg disabled"
                  disabled="disabled"
              >
                disabled
              </button>
              <button
                  className="btn btn-secondary btn-lg disabled"
                  disabled="disabled"
              >
                disabled
              </button>
              <button className="btn btn-light btn-lg disabled">disabled</button>
            </div>
            <p className="ml-3 mb-2 font-weight-bold">
              3. 아이콘과 같이 사용되는 버튼
            </p>
            <p className="ml-3 mb-1">
              버튼을 강조하거나 기능을 쉽게 이해시키기 위해 아이콘을 텍스트와 같이
              사용한다.
            </p>
            <p className="ml-3 mb-4">
              아이콘과 텍스트의 간격은 6px이며, 아이콘+텍스트는 버튼 넓이의
              중앙정렬한다.
            </p>
            <div className="pl-3 mb-5">
              <button className="btn btn-primary">
                <i className="fas fa-circle icon"></i>버튼
              </button>
            </div>
            <p className="ml-3 mb-2 font-weight-bold">4. 링크</p>
            <p className="ml-3 mb-1">텍스트에 링크를 걸었을 때 사용한다.</p>
            <p className="ml-3 mb-4">
              마우스 오버시 텍스트 하단에 라인이 생겨 링크가 있음을 알려준다.
            </p>
            <div className="pl-3 mb-5">
              <button type="button" className="btn btn-link">
                Link
              </button>
            </div>
          </div>
        </div>

        <div id="card">
          <h3 className="title-sm com-pt">
            6. 카드(Cards)
          </h3>
          <div className="text mb-3">
          <span>
            동일한 구성의 컨텐츠를 반복해서 보여줄 경우 카드를 사용하며, 이미지와
            텍스트로 구성된다.
            <br />
            일반적으로 타이틀, 내용, 버튼으로 구성되며, 내용에 따라 버튼은 생략될
            수 있다.
          </span>
          </div>
          <div className="text mb-5">
            <p className="ml-3 mb-2">
              1. 이미지 + 텍스트 + 버튼(기능)으로 구성된 카드
            </p>
            <p className="ml-3 mb-5">2. 이미지 + 텍스트로 구성된 카드</p>
            <p className="ml-3 mb-2 font-weight-bold">
              1. 이미지 + 텍스트 + 버튼(기능)으로 구성된 카드{" "}
            </p>
            <p className="ml-3 mb-4">
              이미지에 대한 타이틀, 설명을 포함하며 기능버튼을(다운로드, 링크)
              포함한다.
            </p>
            <div className="mb-5">
              <div className="card com-card-style01">
                <p className="card-text-top com-card-text01">Image</p>
                <div className="card-body">
                  <p className="card-title">Title</p>
                  <p className="card-text">
                    Adobe사에서 제공하는 무료 UI Kit
                    <br />
                    종류별로 사이트를 관리하기에 좋은 디자인입니다.
                    <br />
                    웹사이트 버전과 모바일 버전으로 나뉘어서 작업 할 수 있습니다.
                  </p>
                  <button className="btn btn-lg btn-primary com-btn-width">
                    BUTTON
                  </button>
                </div>
              </div>
            </div>
            <p className="ml-3 mb-2 font-weight-bold">
              2. 이미지 + 텍스트 구성된 카드{" "}
            </p>
            <p className="ml-3 mb-4">
              썸네일을 보여주는 카드로 이미지와 텍스트로 구성된다.{" "}
            </p>
            <div>
              <div>
                <div className="card com-card-style02">
                  <p className="card-text-top com-card-text02">Image</p>
                  <div className="card-body">
                    <p className="card-title">Title</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="form">
          <h3 className="title-sm com-pt">
            7. 폼(Forms)
          </h3>
          <div className="text mb-3">
            입력에 관련된 내용으로 입력, 체크, 확인/설정
          </div>
          <div className="text mb-5">
            <p className="ml-3 mb-2">1. 인풋 박스</p>
            <p className="ml-3 mb-2">2. 셀렉트 박스 </p>
            <p className="ml-3 mb-2">3. 파일선택 인풋박스</p>
            <p className="ml-3 mb-2">4. 검색 인풋 박스</p>
            <p className="ml-3 mb-2">5. 이메일 주소 입력 인풋박스</p>
            <p className="ml-3 mb-2">7. 유효성(Validation)</p>
            <p className="ml-3 mb-5">8. 달력(Datepicker)</p>
            <p className="ml-3 mb-2 font-weight-bold">1. 인풋박스 </p>
            <p className="ml-3 mb-1">인풋박스는 흰색 배경에 스트록으로 표현된다.</p>
            <p className="ml-3 mb-1">
              일반적인 상태에서는 플레이스홀더를 사용하여 어떤 내용을 입력하는지
              힌트를 준다.
            </p>
            <p className="ml-3 mb-1">
              입력 시 플레이스홀더는 사라지며 인풋박스의 테두리는 select 상태임을
              나타내기 위해 색상이 진하게 바뀐다.
            </p>
            <p className="ml-3 mb-4">
              미리 입력된 내용이나 텍스트를 수정할 수 없는 Readonly 상태가 있다.
              (그레이 배경 컬러에 스트록없음)
            </p>
            <form className="pl-3 mb-5">
              <div className="mb-3 font-weight-bold">Normal</div>
              <div className="form-group mb-4">
                <input
                    type="text"
                    className="form-control com-input-width"
                    title="example"
                    placeholder="Normal"
                />
              </div>
              <div className="mb-3 font-weight-bold">Disabled</div>
              <div className="form-group mb-4">
                <input
                    type="text"
                    className="form-control com-input-width"
                    title="example"
                    placeholder="Disabled"
                    disabled
                />
              </div>
              <div className="mb-3 font-weight-bold">Read only</div>
              <div className="form-group mb-4">
                <input
                    className="form-control mb-2 com-input-width"
                    type="text"
                    title="example"
                    placeholder="read-only"
                    readOnly
                />
              </div>
              <div className="mb-3 font-weight-bold">Size</div>
              <div className="form-group">
                <input
                    className="form-control form-control-sm mb-2 com-input-width"
                    title="example"
                    type="text"
                    placeholder="Small"
                />
                <input
                    className="form-control com-input-width"
                    type="text"
                    title="example"
                    placeholder="Medium"
                />
              </div>
            </form>
            <p className="pl-3 mb-2 font-weight-bold">2. 셀렉트박스 </p>
            <p className="pl-3 mb-4">조건을 정해놓고 조건을 고를 때 사용한다.</p>
            <div className="pl-3 mb-3 font-weight-bold">Normal</div>
            <div className="pl-3 mb-4 com-input-width">
              <select className="custom-select" title="Text">
                <option selected>Normal</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="pl-3 mb-3 font-weight-bold">Disabled</div>
            <div className="pl-3 mb-4 com-input-width">
              <select className="custom-select" disabled title="Text">
                <option selected>Disabled</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="pl-3 mb-3 font-weight-bold">Size</div>
            <div className="input-group pl-3 mb-3 com-input-width">
              <select className="custom-select custom-select-sm" title="example">
                <option selected>Small</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="pl-3 mb-5 com-input-width">
              <select className="custom-select" title="Text">
                <option selected>Medium</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <p className="ml-3 mb-2 font-weight-bold">3. 파일선택 인풋박스</p>
            <p className="ml-3 mb-1">첨부파일을 선택할 때 사용한다.</p>
            <p className="ml-3 mb-4">
              파일을 선택하면 파일명은 자동으로 입력 된다.
            </p>
            <div className="pl-3 mb-3 font-weight-bold">Normal</div>
            <div className="input-group m-3 mb-4 com-input-width">
              <div className="custom-file">
                <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFile01"
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  선택된 파일 없음
                </label>
              </div>
            </div>
            <div className="pl-3 mb-3 font-weight-bold">Size</div>
            <div className="input-group m-3 com-input-width">
              <div className="custom-file custom-file-sm">
                <input
                    type="file"
                    className="custom-file-input file-path validate"
                    id="inputGroupFile03"
                    aria-describedby="inputGroupFile03"
                />
                <label className="custom-file-label" htmlFor="inputGroupFile03">
                  선택된 파일 없음
                </label>
              </div>
            </div>
            <div className="input-group m-3 mb-5 com-input-width">
              <div className="custom-file">
                <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFile04"
                />
                <label className="custom-file-label" htmlFor="inputGroupFile04">
                  선택된 파일 없음
                </label>
              </div>
            </div>
            <p className="ml-3 mb-2 font-weight-bold">4. 검색 인풋박스 </p>
            <p className="ml-3 mb-4">검색을 할 때 사용한다.</p>
            <form className="pl-3 mb-5">
              <div className="mb-3 font-weight-bold">Normal</div>
              <div className="input-group mb-4 com-input-width">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button className="btn btn-outline-light btn-search" type="submit">
                  <i className="fas fa-search" />
                </button>
              </div>
              <div className="mb-3 font-weight-bold">Disabled</div>
              <div className="input-group mb-4 com-input-width">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    disabled
                />
                <button
                    className="btn btn-outline-light btn-search disabled"
                    type="submit"
                >
                  <i className="fas fa-search" />
                </button>
              </div>
              <div className="mb-3 font-weight-bold">Size</div>
              <div className="input-group mb-3 com-input-width">
                <input
                    className="form-control form-control-sm"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button
                    className="btn btn-outline-light btn-search btn-search-sm"
                    type="submit"
                >
                  <i className="fas fa-search" />
                </button>
              </div>
              <div className="input-group mb-5 com-input-width">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button className="btn btn-outline-light btn-search" type="submit">
                  <i className="fas fa-search" />
                </button>
              </div>
            </form>
            <p className="ml-3 mb-2 font-weight-bold">
              5. 이메일주소 입력 인풋박스{" "}
            </p>
            <p className="ml-3 mb-1">이메일 주소를 입력할 때 사용한다.</p>
            <p className="ml-3 mb-4">
              주소를 직접입력하거나 선택해서 입력할 수 있다.
            </p>
            <div className="mb-3 pl-3 font-weight-bold">Normal</div>
            <form className="pl-3 mb-2">
              <div className="form-row">
                <div className="form-group col-4">
                  <input
                      type="text"
                      className="form-control"
                      title="email01"
                      placeholder="Text"
                  />
                </div>
                <div className="form-group col-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">@</div>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        title="email02"
                        placeholder="Text"
                    />
                  </div>
                </div>
                <div className="form-group col-4">
                  <select className="custom-select" title="email03">
                    <option selected>Text</option>
                    <option>Text</option>
                    <option>Text</option>
                    <option>Text</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="mb-3 pl-3 font-weight-bold">Disabled</div>
            <form className="pl-3 mb-2">
              <div className="form-row">
                <div className="form-group col-4">
                  <input
                      type="text"
                      className="form-control"
                      title="email07"
                      placeholder="Text"
                      disabled
                  />
                </div>
                <div className="form-group col-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text disabled">@</div>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        title="email08"
                        placeholder="Text"
                        disabled
                    />
                  </div>
                </div>
                <div className="form-group col-4">
                  <select className="custom-select" title="email09" disabled>
                    <option selected>Text</option>
                    <option>Text</option>
                    <option>Text</option>
                    <option>Text</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="mb-3 pl-3 font-weight-bold">Size</div>
            <form className="pl-3">
              <div className="form-row">
                <div className="form-group col-4">
                  <input
                      type="text"
                      className="form-control form-control-sm"
                      title="email04"
                      placeholder="Text"
                  />
                </div>
                <div className="form-group col-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text input-group-text-sm">@</div>
                    </div>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        title="email05"
                        placeholder="Text"
                    />
                  </div>
                </div>
                <div className="form-group col-4">
                  <select
                      className="custom-select custom-select-sm"
                      title="email06"
                  >
                    <option selected>Text</option>
                    <option>Text</option>
                    <option>Text</option>
                    <option>Text</option>
                  </select>
                </div>
              </div>
            </form>
            <form className="pl-3 mb-5">
              <div className="form-row">
                <div className="form-group col-4">
                  <input
                      type="text"
                      className="form-control"
                      title="email01"
                      placeholder="Text"
                  />
                </div>
                <div className="form-group col-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">@</div>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        title="email02"
                        placeholder="Text"
                    />
                  </div>
                </div>
                <div className="form-group col-4">
                  <select className="custom-select" title="email03">
                    <option selected>Text</option>
                    <option>Text</option>
                    <option>Text</option>
                    <option>Text</option>
                  </select>
                </div>
              </div>
            </form>
            <p className="ml-3 mb-2 font-weight-bold">6. 라디오/체크박스 </p>
            <p className="ml-3 mb-4">
              라디오/체크박스와 텍스트 사이는 6px 거리를 띄우며, 한줄에 나올경우
              다음 라디오/체크박스 까지의 거리는 60px이다.{" "}
            </p>
            <div className="pl-3 mb-4 font-weight-bold">라디오</div>
            <div className="mb-4 pl-3">- Normal</div>
            <div className="ml-3 mb-5">
              <div className="custom-control custom-radio mb-3">
                <input
                    type="radio"
                    id="customRadio1"
                    name="customRadio"
                    className="custom-control-input"
                    checked
                />
                <label className="custom-control-label" htmlFor="customRadio1">
                  Text
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                    type="radio"
                    id="customRadio2"
                    name="customRadio"
                    className="custom-control-input"
                />
                <label className="custom-control-label" htmlFor="customRadio2">
                  Text
                </label>
              </div>
              <div className="custom-control custom-radio mb-3">
                <input
                    type="radio"
                    id="customRadio3"
                    name="customRadio"
                    className="custom-control-input"
                />
                <label className="custom-control-label" htmlFor="customRadio3">
                  Text
                </label>
              </div>
            </div>
            <div className="mb-4 pl-3">- Inline</div>
            <div className="ml-3 mb-5">
              <div className="custom-control custom-radio custom-control-inline">
                <input
                    type="radio"
                    id="customRadioInline1"
                    name="customRadioInline1"
                    className="custom-control-input"
                    checked
                />
                <label
                    className="custom-control-label"
                    htmlFor="customRadioInline1"
                >
                  Text
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                    type="radio"
                    id="customRadioInline2"
                    name="customRadioInline1"
                    className="custom-control-input"
                />
                <label
                    className="custom-control-label"
                    htmlFor="customRadioInline2"
                >
                  Text
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                    type="radio"
                    id="customRadioInline3"
                    name="customRadioInline1"
                    className="custom-control-input"
                />
                <label
                    className="custom-control-label"
                    htmlFor="customRadioInline3"
                >
                  Text
                </label>
              </div>
            </div>
            <div className="mb-4 pl-3">- Disabled</div>
            <div className="ml-3 com-mb">
              <div className="custom-control custom-radio">
                <input
                    type="radio"
                    name="radioDisabled"
                    id="customRadioDisabled2"
                    className="custom-control-input"
                    disabled
                />
                <label
                    className="custom-control-label"
                    htmlFor="customRadioDisabled2"
                >
                  Text
                </label>
              </div>
            </div>
            <div className="pl-3 mb-4 font-weight-bold">체크박스</div>
            <div className="mb-4 pl-3">- Normal</div>
            <div className="ml-3 mb-5">
              <div className="custom-control custom-checkbox mb-3">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Text
                </label>
              </div>
              <div className="custom-control custom-checkbox mb-3">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck2"
                />
                <label className="custom-control-label" htmlFor="customCheck2">
                  Text
                </label>
              </div>
              <div className="custom-control custom-checkbox mb-3">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck3"
                />
                <label className="custom-control-label" htmlFor="customCheck3">
                  Text
                </label>
              </div>
            </div>
            <div className="mb-4 pl-3">- Inline</div>
            <div className="ml-3 mb-4">
              <div className="custom-control custom-checkbox custom-control-inline mb-3">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck4"
                />
                <label className="custom-control-label" htmlFor="customCheck4">
                  Text
                </label>
              </div>
              <div className="custom-control custom-checkbox custom-control-inline mb-3">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck5"
                />
                <label className="custom-control-label" htmlFor="customCheck5">
                  Text
                </label>
              </div>
              <div className="custom-control custom-checkbox custom-control-inline mb-3">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck6"
                />
                <label className="custom-control-label" htmlFor="customCheck6">
                  Text
                </label>
              </div>
            </div>
            <div className="mb-4 pl-3">- Disabled</div>
            <div className="ml-3 com-mb">
              <div className="custom-control custom-checkbox">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheckDisabled1"
                    disabled
                />
                <label
                    className="custom-control-label"
                    htmlFor="customCheckDisabled1"
                >
                  Text
                </label>
              </div>
            </div>
            <p className="ml-3 mb-2 font-weight-bold">7. 밸리데이션(Validation) </p>
            <p className="ml-3 mb-1">
              유효성 검사를 통해 사용자에게 가치있고 실행 가능한 피드백을 제공한다.
            </p>
            <p className="ml-3 mb-1">
              보통 인풋박스 하단에 표현되며, 인풋박스와의 간격은 1px이다.
            </p>
            <p className="ml-3 mb-4">텍스트는 좌/우 마진 5px를 갖는다. </p>
            <form className="pl-3 mb-5">
              <div className="form-group com-input-width mb-5">
                <input
                    type="text"
                    className="form-control is-invalid com-input-width"
                    placeholder="Text"
                    title="example"
                    required
                />
                <div className="invalid-feedback">Text</div>
              </div>
              <div className="form-group com-input-width">
                <input
                    type="text"
                    className="form-control is-invalid com-input-width"
                    placeholder="Text"
                    title="example"
                    required
                />
                <div className="invalid-feedback">
                  Text Text Text Text Text Text Text Text
                </div>
              </div>
            </form>
            <p className="ml-3 mb-2 pt-5 font-weight-bold">8. 달력(Datepicker)</p>
            <p className="ml-3 mb-1">
              날짜를 직접 입력하거나 Datepicker를 통해 선택할수 있다.
            </p>
            <p className="ml-3 mb-4">인풋박스의 상단에 위치한다.</p>
            <div className="mb-3 pl-3 font-weight-bold">Normal</div>

            <div className="pl-3 mb-4">
              <DatePicker
                  selected={date}
                  dateFormat={"yyyy-MM-dd"}
                  customInput={<DateInput />}
                  calendarContainer={DateContainer}
                  popperClassName="datePopper"
                  onChange={newDate => setDate(newDate)}
              />
            </div>
            <div className="mb-3 pl-3 font-weight-bold">Size</div>
            <div className="pl-3 mb-3">
              <DatePicker
                  selected={date}
                  dateFormat={"yyyy-MM-dd"}
                  customInput={<DateInputSm />}
                  calendarContainer={DateContainer}
                  popperClassName="datePopper"
                  onChange={newDate => setDate(newDate)}
              />
            </div>
            <div className="pl-3 mb-3">
              <DatePicker
                  selected={date}
                  dateFormat={"yyyy-MM-dd"}
                  customInput={<DateInputLg />}
                  calendarContainer={DateContainer}
                  popperClassName="datePopper"
                  onChange={newDate => setDate(newDate)}
              />
            </div>
          </div>
        </div>

        <div id="pagination">
          <h3 className="title-sm com-pt">
            8. 페이지네이션(Pagination)
          </h3>
          <div className="text mb-3">
          <span>
            리스트가 많아 세로 스크롤이 길어질 경우 페이지로 구분하여 나타낼 경우
            사용한다. <br />
            버튼 및 숫자 사이즈는 30px X 30px이며, 간격은 10px이다.
            <br />
            페이지 넘버가 길어질 경우(3자리) 숫자 좌/우 마진 5px 만큼 사이즈
            늘어난다.
          </span>
          </div>
          <div className="text mb-5">
            <nav aria-label="Page navigation example">
              <Pagination>
                {/* a class 에 추가 값 안들어감 */}
                <li
                    className={activePage !== 1 ? "page-item" : "page-item disabled"}
                    onClick={() => setActivePage(1)}
                >
                  <a className="page-link page-arrow" aria-label="Previous">
                  <span aria-hidden="true">
                    <i className="fa fa-angle-double-left" />
                  </span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li
                    className={activePage !== 1 ? "page-item" : "page-item disabled"}
                    onClick={() => setActivePage(activePage - 1)}
                >
                  <a className="page-link page-arrow" aria-label="Previous">
                  <span aria-hidden="true">
                    <i className="fa fa-angle-left" />
                  </span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <Pagination.Item
                    active={1 === activePage}
                    onClick={() => setActivePage(1)}
                >
                  1
                </Pagination.Item>
                <Pagination.Item
                    active={2 === activePage}
                    onClick={() => setActivePage(2)}
                >
                  2
                </Pagination.Item>
                <Pagination.Item
                    active={3 === activePage}
                    onClick={() => setActivePage(3)}
                >
                  3
                </Pagination.Item>
                <Pagination.Item
                    active={4 === activePage}
                    onClick={() => setActivePage(4)}
                >
                  4
                </Pagination.Item>
                <Pagination.Item
                    active={5 === activePage}
                    onClick={() => setActivePage(5)}
                >
                  5
                </Pagination.Item>
                <li
                    className={activePage !== 5 ? "page-item" : "page-item disabled"}
                    onClick={() => setActivePage(activePage + 1)}
                >
                  <a className="page-link page-arrow" aria-label="Next">
                  <span aria-hidden="true">
                    <i className="fa fa-angle-right" />
                  </span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
                <li
                    className={activePage !== 5 ? "page-item" : "page-item disabled"}
                    onClick={() => setActivePage(5)}
                >
                  <a className="page-link page-arrow" aria-label="Next">
                  <span aria-hidden="true">
                    <i className="fa fa-angle-double-right" />
                  </span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </Pagination>
            </nav>
          </div>
        </div>

        <div id="tab">
          <h3 className="title-sm com-pt">
            9. 탭(Tab)
          </h3>
          <div className="text mb-3">
          <span>
            화면이동 없이 내용을 바꿀 때 사용한다. <br />
            SNB와 같이 사용하여 SNB 메뉴를 눌렀을 때 메뉴가 탭으로 쌓인다.
          </span>
          </div>
          <div className="text mb-5">
            <p className="ml-3 mb-2">1. 내용을 바꿀 때사용하는 탭</p>
            <p className="ml-3 mb-5">2. SNB와 같이 사용하는 탭</p>
            <p className="ml-3 mb-2 font-weight-bold">
              1. 내용을 바꿀 때 사용하는 탭
            </p>
            <p className="ml-3 mb-1">
              정보의 내용이 같으나 내용을 따로 구분하고 싶을 때 사용한다.
            </p>
            <p className="ml-3 mb-1">
              화면의 이동없이 탭 선택 시 내용을 바꿀 때 사용한다.
            </p>
            <p className="ml-3 mb-4">
              탭선택 시 컬러의 차이뿐 아니라 탭사이즈와 텍스트가 커져 선택된 탭을
              강조 수 있다.
            </p>

            <div className="pl-3 com-mb02">
              <Tabs
                  id="controlled-tab-example"
                  activeKey={tabKey}
                  onSelect={k => setTabKey(k)}
              >
                <Tab eventKey="home" title="Home">
                  <div className="tab-pane com-tab-style01">Home</div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <div className="tab-pane com-tab-style01">Profile</div>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                  <div className="tab-pane com-tab-style01">Contact</div>
                </Tab>
              </Tabs>
            </div>

            <div className="pl-3 mb-5">
              <Tab.Container defaultActiveKey={"home"}>
                <Nav variant="tabs" className={"nav-tabs-lg com-tab-mw"}>
                  <Nav.Item>
                    <Nav.Link eventKey="home">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="profile">Profile</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="contact">Contact</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="home">
                    <div className={"tab-pane com-tab-style02"}>Home</div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="profile">
                    <div className={"tab-pane com-tab-style02"}>Profile</div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="contact">
                    <div className={"tab-pane com-tab-style02"}>Contact</div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>

            <p className="ml-3 mb-2 font-weight-bold">2. SNB와 같이 사용하는 탭</p>
            <p className="ml-3 mb-1">
              SNB와 같이 사용하여 SNB 메뉴를 눌렀을 경우 화면을 생성하면서 상단에
              탭으로 쌓인다.
            </p>
            <p className="ml-3 mb-4">탭에 닫기 버튼을 두어 화면을 닫을 수 있다.</p>

            <div className="m-3">
              <Tab.Container defaultActiveKey={"home"}>
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="home" className={"icon"}>
                      Home
                      {/*<FontAwesomeIcon icon={faTimes} size={"1x"} className={"align-right"} />*/}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="profile" className={"icon"}>
                      Profile
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="contact" className={"icon"}>
                      Contact
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="home">
                    <div className={"tab-pane com-tab-style02"}>Home</div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="profile">
                    <div className={"tab-pane com-tab-style02"}>Profile</div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="contact">
                    <div className={"tab-pane com-tab-style02"}>Contact</div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>

        <div id="table">
          <h3 className="title-sm com-pt">
            10. 테이블(Table)
          </h3>
          <div className="text mb-3">
          <span>
            표가 필요한 경우 사용한다. <br />
            테이블의 기본 높이는 40px이다.
            <br />
            테이블은 라인으로 구분되나 세로 라인은 그리지 않는다. <br />
            테이블의 리스트는 홀수열에 흐린 bg컬러를 사용하여 열간 구분을 명확하게
            한다. <br />
            리스트는 포커스 될 수 있으며, 포커스 컬러는 메인컬러에 화이트(#FFFFFF)
            80% 비율의 컬러값을 사용한다.
          </span>
          </div>
          <div className="text mb-5">
            <table className="table table-hover table-striped">
              <thead className="thead-light">
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
              <tr className="table-active">
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
        </div>

        <div id="snb">
          <h3 className="title-sm com-pt">
            11. 사이드 네비게이션 바(SNB)
          </h3>
          <div className="text mb-3">
          <span>
            웹사이트 서브 화면에서 Depth 이동을 할 때 사용한다.
            <br />
            메인화면에서 메뉴를 구성 할 때 사용한다.
          </span>
          </div>
          <div className="text mb-5">
            <p className="ml-3 mb-2">1. 서브화면에서 Depth 이동</p>
            <p className="ml-3 mb-5">2. 메인화면에서 메뉴로 사용</p>
            <p className="ml-3 mb-2 font-weight-bold">
              1. 서브화면에서 Depth 이동{" "}
            </p>
            <p className="ml-3 mb-1">
              웹사이트의 서브화면에서 동일 Depth를 이동할 때 사용한다.
            </p>
            <p className="ml-3 mb-4">
              텍스트로만 구성되거나, 아이콘 + 텍스트로 구성된다.
            </p>
            <div className="row pl-3 mb-5">
              <div className="col-3">
                <div
                    className="nav flex-column nav-pills nav-pills-light"
                    id="v-pills-tab2"
                    role="tablist"
                    aria-orientation="vertical"
                >
                  <a
                      className="nav-link active"
                      id="v-pills-home-tab2"
                      data-toggle="pill"
                      href="#v-pills-home2"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                  >
                    <i className="fas fa-circle" />
                    Home
                  </a>
                  <a
                      className="nav-link"
                      id="v-pills-profile-tab2"
                      data-toggle="pill"
                      href="#v-pills-profile2"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                  >
                    <i className="fas fa-circle" />
                    Profile
                  </a>
                  <a
                      className="nav-link"
                      id="v-pills-messages-tab2"
                      data-toggle="pill"
                      href="#v-pills-messages2"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                  >
                    <i className="fas fa-circle" />
                    Messages
                  </a>
                  <a
                      className="nav-link"
                      id="v-pills-settings-tab2"
                      data-toggle="pill"
                      href="#v-pills-settings2"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                  >
                    <i className="fas fa-circle" />
                    Settings
                  </a>
                </div>
              </div>
              <div className="col-8">
                <div className="tab-content" id="v-pills-tabContent2">
                  <div
                      className="tab-pane fade show active com-tab-style03"
                      id="v-pills-home2"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab2"
                  >
                    Home
                  </div>
                  <div
                      className="tab-pane fade com-tab-style03"
                      id="v-pills-profile2"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab2"
                  >
                    Profile
                  </div>
                  <div
                      className="tab-pane fade com-tab-style03"
                      id="v-pills-messages2"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab2"
                  >
                    Messages
                  </div>
                  <div
                      className="tab-pane fade com-tab-style03"
                      id="v-pills-settings2"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab2"
                  >
                    Settings
                  </div>
                </div>
              </div>
            </div>

            <p className="ml-3 mb-2 font-weight-bold">
              2. 메인화면에서 메뉴로 사용
            </p>
            <p className="ml-3 mb-1">대시보드나, 관리화면에서 메뉴로 사용한다.</p>
            <p className="ml-3 mb-4">
              1Depth 메뉴에만 아이콘이 붙으며, 뎁스는 2Depth 까지만 구성된다.{" "}
            </p>
            <div className="row pl-3 mb-3">
              <div className="col-3">
                <div
                    className="nav flex-column nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                >
                  <a
                      className="nav-link active"
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                  >
                    Home
                    <i className="fas fa-angle-right" />
                  </a>
                  <a
                      className="nav-link"
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                  >
                    Profile
                    <i className="fas fa-angle-right" />
                  </a>
                  <a
                      className="nav-link"
                      id="v-pills-messages-tab"
                      data-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                  >
                    Messages
                    <i className="fas fa-angle-right" />
                  </a>
                  <a
                      className="nav-link"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                  >
                    Settings
                    <i className="fas fa-angle-right" />
                  </a>
                </div>
              </div>
              <div className="col-8">
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                      className="tab-pane fade show active com-tab-style03"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                  >
                    Home
                  </div>
                  <div
                      className="tab-pane fade com-tab-style03"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                  >
                    Profile
                  </div>
                  <div
                      className="tab-pane fade com-tab-style03"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                  >
                    Messages
                  </div>
                  <div
                      className="tab-pane fade com-tab-style03"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                  >
                    Settings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="navbar">
          <h3 className="title-sm com-pt">
            12. 네비게이션 바(Navigation Bars)
          </h3>
          <div className="text mb-3">
          <span>
            웹사이트의 가로넓이 1200px를 기준으로 한다. <br />
            로고는 좌측 30px을 띄우며, 메뉴는 로고를 기준으로 90px 띄운다.
            <br />
            메뉴간 간격은 90px이며 메뉴 포커스시 메뉴 하단에 바가 생긴다.
            <br />
            바는 텍스트 길이보다 10px 크다.
            <br />
            메뉴명의 길이, 메뉴의 개수에 따라 메뉴사이 간격이 변동 될 수 있다.
          </span>
          </div>
          <div className="text">
            <div className="mb-5">
              <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">
                  LOGO
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        menu<span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        menu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        menu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        menu
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="mb-5">
              <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#">
                  LOGO
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent2"
                    aria-controls="navbarSupportedContent2"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent2"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        menu<span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        menu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        menu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        menu
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div id="modal">
          <h3 className="title-sm com-pt">
            13. 모달(Modal)
          </h3>
          <div className="text mb-3">
          <span>
            사이즈는 Extra Large(1200px), Large(800px), Medium(600px),
            Small(380px) 4가지를 사용한다. <br />
            모달은 제목, 본문, 바닥 글의 기본 섹션으로 나뉜다.
            <br />
            Dialog와 Alert는 small(380px) 사이즈를 사용한다.
          </span>
          </div>
          <div className="text com-mb-xl">
            <p className="ml-3 mb-2">1. 일반 Modal</p>
            <p className="ml-3 mb-5">2. Dialog & Alert</p>
            <p className="ml-3 mb-2 font-weight-bold">1. 일반 Modal </p>
            <p className="ml-3 mb-1">
              사이즈는 Extra Large(1200px), Large(800px), Medium(600px)을 사용한다.{" "}
            </p>
            <p className="ml-3 mb-1">
              Dialog & Alert 제외하고 본문의 내용이 많을경우 사용한다.{" "}
            </p>
            <p className="ml-3 mb-4">
              바닥글에 포함되는 버튼은 상황에 따라서 다양한 사이즈(Medium, Lage,
              ExtraLarge)를 사용할 수 있다.
            </p>

            <div className="pl-3 mb-5">

              <Button variant="primary" className="mr-1" onClick={handleXlModalShow}>Extra large modal</Button>
              <Modal show={xlModalShow} onHide={handleXlModalClose} centered size={"xl"}>
                <Modal.Header closeButton>
                <span className="modal-title">
                  Extra large modal
                </span>
                </Modal.Header>
                <Modal.Body>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  adipisci excepturi id laboriosam odio quia quisquam quos
                  repellendus sapiente sit. Ab, accusantium aspernatur aut
                  consequatur culpa deserunt dolorem doloribus dolorum earum
                  error ipsam molestiae nesciunt nisi non nostrum officiis omnis
                  optio reiciendis repudiandae temporibus totam veniam veritatis
                  vitae voluptate voluptatibus. A ab adipisci animi aperiam
                  asperiores, aspernatur assumenda aut cumque deleniti dicta
                  doloremque dolores eius esse et facere harum impedit ipsam,
                  itaque laudantium molestiae mollitia nostrum nulla numquam
                  officia optio perferendis, provident quae quasi quos
                  repudiandae rerum sapiente sit tempore temporibus veritatis
                  voluptates voluptatum. Beatae facilis illum ipsa quod vitae?
                </Modal.Body>
              </Modal>

              <Button variant="primary" className="mr-1" onClick={handleLgModalShow}>Large modal</Button>
              <Modal show={lgModalShow} onHide={handleLgModalClose} centered size={"lg"}>
                <Modal.Header closeButton>
                <span className="modal-title">
                  Large modal
                </span>
                </Modal.Header>
                <Modal.Body>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam animi autem beatae, commodi
                  consectetur cupiditate, eligendi eum eveniet excepturi iste minima molestiae nesciunt nobis nostrum quam
                  quis repellat rerum sed velit? Animi deserunt doloribus ducimus et excepturi expedita explicabo itaque
                  iusto laborum necessitatibus placeat quae quis reiciendis repellat, vitae! Alias aliquam, aut doloribus,
                  eaque eos error eum eveniet exercitationem facilis fugiat fugit illum in minus necessitatibus nemo neque
                  nihil nulla possimus provident quam quas unde veritatis. Ab culpa distinctio fugiat illum ipsa ipsam
                  laboriosam, minus molestias nisi porro quas quos. Ab exercitationem quod tempore! Dicta hic illo
                  possimus quaerat.
                </Modal.Body>
              </Modal>

              <Button variant="primary" className="mr-1" onClick={handleMdModalShow}>Medium modal</Button>
              <Modal show={mdModalShow} onHide={handleMdModalClose} centered size={"md"}>
                <Modal.Header closeButton>
                <span className="modal-title">
                  Medium modal
                </span>
                </Modal.Header>
                <Modal.Body>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam animi autem beatae, commodi
                  consectetur cupiditate, eligendi eum eveniet excepturi iste minima molestiae nesciunt nobis nostrum quam
                  quis repellat rerum sed velit? Animi deserunt doloribus ducimus et excepturi expedita explicabo itaque
                  iusto laborum necessitatibus placeat quae quis reiciendis repellat, vitae! Alias aliquam, aut doloribus,
                  eaque eos error eum eveniet exercitationem facilis fugiat fugit illum in minus necessitatibus nemo neque
                  nihil nulla possimus provident quam quas unde veritatis. Ab culpa distinctio fugiat illum ipsa ipsam
                  laboriosam, minus molestias nisi porro quas quos. Ab exercitationem quod tempore! Dicta hic illo
                  possimus quaerat.
                </Modal.Body>
              </Modal>

              <Button variant="primary" onClick={handleSmModalShow}>Small modal</Button>
              <Modal show={smModalShow} onHide={handleSmModalClose} centered size={"sm"}>
                <Modal.Header closeButton>
                <span className="modal-title">
                  Small modal
                </span>
                </Modal.Header>
                <Modal.Body>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, ea eos, facilis fugit nam nihil
                  omnis quae quos reiciendis saepe tempora voluptates. Ab amet aperiam atque consequatur est illum in,
                  laudantium nam nesciunt perspiciatis quas quia sapiente sequi tempora ullam velit voluptas? Deserunt eos
                  exercitationem id magni minima tempore tenetur?
                </Modal.Body>
              </Modal>

            </div>

            <p className="ml-3 mb-2 font-weight-bold">2. Dialog & Alert </p>
            <p className="ml-3 mb-1">사이즈는 Medium(600px)을 사용한다. </p>
            <p className="ml-3 mb-2">
              웹사이트에서 어떠한 행위를 하였을 때 알림을 주거나 주의를 주는 용도로
              사용한다.{" "}
            </p>

            <div className="pl-3 mb-4">
              <Button variant="primary" className="mr-1" onClick={handleDialogShow}>dialog</Button>
              <Modal show={dialogShow} onHide={handleDialogClose} centered size={"sm"}>
                <Modal.Header closeButton>
                <span className="modal-title">
                  Modal title
                </span>
                </Modal.Header>
                <Modal.Body>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem facilis itaque nulla placeat sunt tenetur?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="outline-secondary" size={"lg"} onClick={handleDialogClose}>
                    Close
                  </Button>
                  <Button variant="primary" size={"lg"} onClick={handleDialogClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>

              <Button variant="primary" onClick={handleAlertShow}>alert</Button>
              <Modal show={alertShow} onHide={handleAlertClose} centered size={"sm"}>
                <Modal.Header closeButton>
                <span className="modal-title">
                  Modal title
                </span>
                </Modal.Header>
                <Modal.Body>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium adipisci alias animi atque deserunt distinctio ea eligendi et fuga id, illo ipsa iure libero maiores mollitia nobis nulla optio pariatur porro quasi ratione recusandae tempora velit voluptatem. Ab alias amet blanditiis cumque dicta dolorum ex ipsam molestiae mollitia neque odio perspiciatis, placeat praesentium quaerat repellendus tenetur vel voluptas voluptatem.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" size={"lg"} onClick={handleAlertClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        .datePopper {
          z-index: 120;
        }
      `}</style>
    </>
  );
};

export default Component;
