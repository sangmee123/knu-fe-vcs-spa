import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/AddButton.css';

function AddButton() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const SelectBox = () => {
        return (
            <select>
                <option key="idx1" value="idx1">1-ios-1.0</option>
                <option key="idx2" value="idx2">2-android-1.0</option>
                <option key="idx3" value="idx3">3-android-1.5</option>
            </select>
        );
    };

    return(
        <div>
            <button className="apptestBtn" variant="outline-primary" onClick={handleShow}>App Test</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Client Ver</Modal.Title>
                </Modal.Header>
                <SelectBox />
                <Modal.Header>
                <Modal.Title>Server Result</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button className="closeBtn" variant="secondary" onClick={handleClose}>확인</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default AddButton;