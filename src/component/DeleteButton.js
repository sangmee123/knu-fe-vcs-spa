import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/ActionButton.css';

function DeleteButton() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const SelectBox = () => {
        return (
            <select>
                <option key="ios" value="ios">ios</option>
                <option key="android" value="android">android</option>
            </select>
        );
    };

    const SelectBox2 = () => {
        return (
            <select>
                <option key="true" value="true">true</option>
                <option key="true" value="false">false</option>
            </select>
        );
    };

    return(
        <>
            <button className="actionBtn" id="deleteBtn" variant="outline-primary" onClick={handleShow}>삭제</button>

            <Modal show={show} onHide={handleClose}>
                <SelectBox />
                <input></input>
                <SelectBox2 />
                <input></input>
                <Modal.Footer>
                    <Button className="cancelBtn" variant="secondary" onClick={handleClose}>취소</Button>
                    <Button className="closeBtn" variant="secondary" onClick={handleClose}>삭제</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default DeleteButton;