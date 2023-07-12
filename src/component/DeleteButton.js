import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/CommonPopup.css'; 
import '../styles/ActionButton.css';

function DeleteButton() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const SelectOs = () => {
        return (
            <select>
                <option value="none" hidden></option>
                <option key="os" value="android">android</option>
                <option key="os" value="ios">ios</option>
            </select>
        );
    };

    const SelectUpdatetype = () => {
        return (
            <select>
                <option value="none" hidden></option>
                <option key="idx1" value="true">true</option>
                <option key="idx2" value="false">false</option>
            </select>
        );
    };

    return(
        <>
            <button className="actionBtn" id="deleteBtn" variant="outline-primary" onClick={handleShow}>삭제</button>
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header></Modal.Header>
                    <form className='inputBox'>
                        <SelectOs />
                        <input class="textBox"></input>
                        <SelectUpdatetype />
                        <textarea class="textBox" id="msg"></textarea>
                    </form>
                    <Modal.Footer>
                        <Button className="closeBtn" variant="secondary" onClick={handleClose}>취소</Button>
                        <Button type="submit" variant="secondary" onClick={handleClose} className="closeBtn" id="del">삭제</Button>
                    </Modal.Footer>
            </Modal>
        </>
    )
}
export default DeleteButton;