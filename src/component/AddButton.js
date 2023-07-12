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
                <option value="none" hidden></option>
                <option key="os" value="android">android</option>
                <option key="os" value="ios">ios</option>
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
                    <div className='inputBox'>
                        <SelectOs />
                        <input></input>
                        <SelectUpdatetype />
                        <input id="msg"></input>
                    </div>
                    <Modal.Footer>
                        <Button className="closeBtn" variant="secondary" onClick={handleClose}>취소</Button>
                        <Button className="closeBtn" variant="secondary" onClick={handleClose}>확인</Button>
                    </Modal.Footer>
               
            </Modal>
        </div>
    )
}
export default AddButton;