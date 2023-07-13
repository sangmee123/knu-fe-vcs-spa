import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/CommonPopup.css";

function AddButton() {
  /* ADD 데이터 Submit */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState("");

  // const addData = {
  //     "os": os,
  //     "ver": ver,
  //     "updatetype": updatetype,
  //     "message": message,
  // };

  const newData = {
    "os": "test",
    "ver": "test",
    "updatetype": 1,
    "message": "test",
    "packageInfo": "test"
  };

  useEffect(() => {
    const getConfigData = async () => {
      try {
        const data = await axios.post(
          `http://ec2-13-211-88-63.ap-southeast-2.compute.amazonaws.com:8080/vercontrol/save`,
          newData,
          {}
        );
        // return data.data;
        console.log(data);

        //   const response = await axios.post('http://ec2-13-211-88-63.ap-southeast-2.compute.amazonaws.com:8080/vercontrol/save', newData);
      } catch (e) {
        console.log(e);
      }
    };
    getConfigData();
  }, []);

  const handleSubmit = () => {
    /* ajax, jquery 형태의 서버 통신 */
    // useEffect(() => {
    //     axios
    //     .post("http://localhost:8080/vercontrol/save", addData)
    //     .then((response) => {
    //         console.log("성공", response.data);
    //     })
    //     .catch((error) => console.log(error.response));
    //     getConfigData();
    // }, []);
  };

  const SelectOs = () => {
    return (
      <select>
        <option value="none" hidden></option>
        <option key="os" value="android">
          android
        </option>
        <option key="os" value="ios">
          ios
        </option>
      </select>
    );
  };

  const SelectUpdatetype = () => {
    return (
      <select>
        <option value="none" hidden></option>
        <option key="updatetype" value="true">
          true
        </option>
        <option key="updatetype" value="false">
          false
        </option>
      </select>
    );
  };

  return (
    <div>
      <button className="addBtn" variant="outline-primary" onClick={handleShow}>
        ADD
      </button>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header></Modal.Header>
          <div className="inputBox">
            <SelectOs />
            <input class="textBox"></input>
            <SelectUpdatetype />
            <textarea key="message" class="textBox" id="msg"></textarea>
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
    </div>
  );
}
export default AddButton;
