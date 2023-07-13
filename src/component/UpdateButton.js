import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/CommonPopup.css";
import "../styles/ActionButton.css";

function UpdateButton() {
  const [data, setData] = useState("");

  // ajax, jquery 형태의 서버 통신
  let idx = 0;
//   useEffect(() => {
//     const getConfigData = async () => {
//       try {
//         const response = await axios.get(
//           "http://ec2-13-211-88-63.ap-southeast-2.compute.amazonaws.com:8080/vercontrol/getConfigAll"
//         );
//         idx = response.data.id;
//         setData(response.data);
//         console.log(response.data);
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     getConfigData();
//   }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SelectOs = () => {
    return (
      <select>
        <option value="none">{data[idx].os}</option>
        <option key="os">{data[idx].os === "ios" ? "android" : "ios"}</option>
      </select>
    );
  };
  const Version = () => {
    return (
      <input
        type="text"
        className="textBox"
        defaultValue={data[idx].ver}
      ></input>
    );
  };
  const SelectUpdatetype = () => {
    return (
      <select>
        <option value="none">
          {data[idx].updatetype === 1 ? "true" : "false"}
        </option>
        <option key="updatetype">
          {data[idx].updatetype === 1 ? "false" : "true"}
        </option>
      </select>
    );
  };
  const Message = () => {
    return (
      <textarea className="textBox" id="msg">
        {data[idx].message}
      </textarea>
    );
  };

  return (
    <>
      <button
        className="actionBtn"
        id="updateBtn"
        variant="outline-primary"
        onClick={handleShow}
      >
        수정
      </button>
      <Modal show={show} onHide={handleClose}>
        <form>
          <Modal.Header></Modal.Header>
          <div className="inputBox">
            <SelectOs />
            <Version />
            <SelectUpdatetype />
            <Message />
          </div>
          <Modal.Footer>
            <Button className="closeBtn" onClick={handleClose}>
              취소
            </Button>
            <Button type="submit" className="closeBtn" onClick={handleClose}>
              확인
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
export default UpdateButton;
