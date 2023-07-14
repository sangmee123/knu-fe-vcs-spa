import React, { useState, useRef } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMutation } from "react-query";
import { addVersion } from "./AddApi";

import "../styles/CommonPopup.css";

function AddButton() {
  /* ADD 데이터 Submit */
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setOs("");
    setVer("");
    setUpdatetype("");
    setMessage("");
    setPackageInfo("");
  }
  const handleShow = () => setShow(true);

  const [data, setData] = useState("");

  const [os, setOs] = useState("");
  const [ver, setVer] = useState("");
  const [updatetype, setUpdatetype] = useState("");
  const [message, setMessage] = useState("");
  const [packageInfo, setPackageInfo] = useState("");

  const newData = {
    os: os,
    ver: ver,
    updatetype: Number(updatetype),
    message: message,
    packageInfo: packageInfo,
  };

  const osRef = useRef(null);
  const verRef = useRef(null);
  const updatetypeRef = useRef(null);
  const messageRef = useRef(null);
  const packageInfoRef = useRef(null);

  const { mutate: version } = useMutation(addVersion, {
    onSuccess: (response) => {
      console.log("response");
      console.log(response);

      setData(response);
    },
    onError: () => {
      console.log("error");
    },
  });

  function submitNewData() {
    // if (os === "") {
    //   alert("os을 입력해주세요.");
    //   return;
    // }

    // if (ver === "") {
    //   alert("버전을 입력해주세요.");
    //   return;
    // }

    // if (updatetype === "") {
    //   alert("업데이트 타입을 입력해주세요.");
    //   return;
    // }

    // if (message === "") {
    //   alert("메세지를 입력해주세요.");
    //   return;
    // }

    // if (packageInfo === "") {
    //   alert("패키지 인포를 입력해주세요.");
    //   return;
    // }

    if (os && ver && updatetype && message && packageInfo) {
      setOs("");
    setVer("");
    setUpdatetype("");
    setMessage("");
    setPackageInfo("");
      // API 호출
      version(newData);
    }
  }

  const handleOsChange = (event) => {
    setOs(event.target.value);
  };

  const handleVerChange = (event) => {
    setVer(event.target.value);
  };

  const handleUpdatetypeChange = (event) => {
      setUpdatetype(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handlePackageInfoChange = (event) => {
    setPackageInfo(event.target.value);
  };

  

  const handleSubmit = () => {
  };

  const SelectOs = () => {
    return (
      <select value={os} ref={osRef} onChange={handleOsChange}>
        <option value="none" hidden></option>
        <option key="android" value="android">
          android
        </option>
        <option key="ios" value="ios">
          ios
        </option>
      </select>
    );
  };

  const SelectUpdatetype = () => {
    return (
      <select
        value={updatetype}
        ref={updatetypeRef}
        onChange={handleUpdatetypeChange}
      >
        <option value="none" hidden></option>
        <option value="0">{'false'}</option>
        <option value="1">{'true'}</option>
      </select>
    );
  };

  return (
    <div>
      <button className="addBtn" variant="outline-primary" onClick={handleShow}>
        ADD
      </button>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={submitNewData}>
          <Modal.Header></Modal.Header>
          <div className="inputBox">
            <SelectOs />
            <input
              className="textBox"
              value={ver}
              ref={verRef}
              onChange={handleVerChange}
            ></input>
            <SelectUpdatetype />
            <textarea
              key="message"
              className="textBox"
              id="msg"
              ref={messageRef}
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            <input
              className="textBox"
              value={packageInfo}
              ref={packageInfoRef}
              onChange={handlePackageInfoChange}
            ></input>
          </div>
          <Modal.Footer>
            <Button className="closeBtn" onClick={handleClose}>
              취소
            </Button>
            <Button type="submit" className="closeBtn" onClick={submitNewData}>
              확인
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}
export default AddButton;
