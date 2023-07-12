import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/CommonPopup.css'; 
import '../styles/ActionButton.css';

function UpdateButton() {

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
                <option key="idx1" value="idx1">true</option>
                <option key="idx2" value="idx2">false</option>
            </select>
        );
    };

    return(
        <>
            <button className="actionBtn" id="updateBtn" variant="outline-primary" onClick={handleShow}>수정</button>
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
                        <Button type="submit" className="closeBtn" variant="secondary" onClick={handleClose}>확인</Button>
                    </Modal.Footer>
            </Modal>
        </>
    )
}
export default UpdateButton;