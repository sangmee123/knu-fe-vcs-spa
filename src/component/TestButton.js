import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/ActionButton.css';
import '../styles/TestPopup.css';

function TestButton() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Message = () => {
        return (
            <textarea className="textBox" id="msg"></textarea>
        );
    };

    return(
        <>
            <button className="actionBtn" id="testBtn" variant="outline-primary" onClick={handleShow}>Test</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header></Modal.Header>
                <div className="inputBox">
                    <Message />
                </div>
                <Modal.Footer>
                    <Button className="closeBtn" variant="secondary" onClick={handleClose}>확인</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default TestButton;