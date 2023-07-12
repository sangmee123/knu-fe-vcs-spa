import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

import './AppTestButton.css';

function AppTestButton() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <button className="apptestBtn" variant="outline-primary" onClick={handleShow}>App Test</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Client Ver</Modal.Title>
                </Modal.Header>
                <Modal.Body>Server Result</Modal.Body>
                <Modal.Footer>
                    <Button className="btn_close" variant="secondary" onClick={handleClose}>
                        확인
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default AppTestButton;