import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/AppTestButton.css';
import '../styles/AppTestPopup.css';

function AppTestButton() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const SelectBox = () => {
        return (
            <select>
                <option key="total" value="idx1">1-ios-1.0</option>
                <option key="total" value="idx2">2-android-1.0</option>
                <option key="total" value="idx3">3-android-1.5</option>
            </select>
        );
    };

    const Message = () => {
        return (
            <textarea className="textBox" id="msg"></textarea>
        );
    };

    return(
        <div>
            <button className="apptestBtn" variant="outline-primary" onClick={handleShow}>App Test</button>

            <Modal show={show} onHide={handleClose}>
                <form>
                    <Modal.Header>Client Ver</Modal.Header>
                    <div className="inputBox">
                        <SelectBox />
                        </div>
                    <Modal.Header>Client Ver</Modal.Header>
                    <div className="inputBox">
                        <Message />
                    </div>
                    <Modal.Footer>
                        <Button className="closeBtn" onClick={handleClose}>확인</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}
export default AppTestButton;