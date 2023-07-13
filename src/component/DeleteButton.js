import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/CommonPopup.css'; 
import '../styles/ActionButton.css';

function DeleteButton({ onRemove }) {

    const [data, setData]= useState('');

    // ajax, jquery 형태의 서버 통신 
    useEffect(() => {
        const getConfigData = async () => {
            try {
            const response = await axios.get('http://localhost:8080/vercontrol/getConfigAll');
            setData(response.data);
            console.log(response.data);
            } catch(e) {
            console.log(e);
            }
        };
        getConfigData();
    }, []); 


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Os = () => {
        return (
            <select>
                <option value="none">{data[4].os}</option>
            </select>
        );
    };
    const Version = () => {
        return (
            <div className="textBox">{data[4].ver}</div>
        );
    };
    const Updatetype = () => {
        return (
            <select>
                <option value="none">{(data[4].updatetype === 1) ? 'true': 'false' }</option>
            </select>
        );
    };
    const Message = () => {
        return (
            <textarea className="textBox" id="msg" value={(data[4].message) === '' ? 'null': data[4].message}></textarea>
        );
    };
    
    return(
        <>
            <button className="actionBtn" id="deleteBtn" variant="outline-primary" onClick={handleShow}>삭제</button>
            <Modal show={show} onHide={handleClose}>
                <form>
                    <Modal.Header></Modal.Header>
                    <div className='inputBox'>
                        <Os />
                        <Version />
                        <Updatetype />
                        <Message />
                    </div>
                    <Modal.Footer>
                        <Button className="closeBtn" onClick={handleClose}>취소</Button>
                        <Button type="submit" onClick={handleClose} className="closeBtn" id="del">삭제</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}
export default DeleteButton;