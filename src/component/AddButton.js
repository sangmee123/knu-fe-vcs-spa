import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AddButton.css';

function AddButton() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const SelectOs = () => {
        return (
            <select>
                <option key="idx1" value="idx1">android</option>
                <option key="idx2" value="idx2">ios</option>
            </select>
        );
    };

    const SelectUpdatetype = () => {
        return (
            <select>
                <option key="idx1" value="idx1">true</option>
                <option key="idx2" value="idx2">false</option>
            </select>
        );
    };

    return(
        <div>
            <button className="addBtn" variant="outline-primary" onClick={handleShow}>ADD</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header></Modal.Header>

                <SelectOs />
                <input id="version"></input>
                <SelectUpdatetype />
                <input id="version"></input>

                <Modal.Header></Modal.Header>
                
                <Modal.Footer>
                    <Button className="closeBtn" variant="secondary" onClick={handleClose}>취소</Button>
                    <Button className="closeBtn" variant="secondary" onClick={handleClose}>확인</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default AddButton;