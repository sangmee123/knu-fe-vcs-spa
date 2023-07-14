import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/CommonPopup.css'; 
import '../styles/ActionButton.css';

function DeleteButton(props) {

    // const [data, setData]= useState('');

    // useEffect(() => {
    //     const getConfigData = async () => {
    //         try {
    //         const response = await axios.get('http://ec2-13-211-88-63.ap-southeast-2.compute.amazonaws.com:8080/vercontrol/getConfigAll');
    //         setData(response.data);
    //         } catch(e) {
    //         //console.log(e);
    //         }
    //     };
    //     getConfigData();
    // }, []); 


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        
        
        setShow(false);
        var id = props.data.id;
        console.log(id);
        axios(
            {
                url: 'http://ec2-13-211-88-63.ap-southeast-2.compute.amazonaws.com:8080/vercontrol/deleteConfig/'+id,
                //url: 'http://localhost:8080/vercontrol/getConfig/'+idx,
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                    }
                }
            ).then(function (response) {
                console.log(response.data);
                console.log(response.data.ver);
                window.location.reload();
            });
            
    }

    const Os = () => {
        return (
            <select>
                <option value="none">{props.data.os}</option>
            </select>
        );
    };
    const Version = () => {
        return (
            <div className="textBox">{props.data.ver}</div>
        );
    };
    const Updatetype = () => {
        return (
            <select>
                <option value="none">{props.data.updatetype}</option>
            </select>
        );
    };
    const Message = () => {
        return (
            <textarea className="textBox" id="msg" value={props.data.message}></textarea>
        );
    };
    
    return(
        <>
            <button className="actionBtn" id="deleteBtn" variant="outline-primary" onClick={handleShow}>삭제</button>
            {/* <button className="actionBtn" id="deleteBtn" variant="outline-primary" onClick={handleSubmit}>삭제</button> */}
            <Modal show={show} onHide={handleClose}>
                <form>
                    <Modal.Header>
                        삭제하시겠습니까?
                    </Modal.Header>
                    <div className='inputBox'>
                        <Os />
                        <Version />
                        <Updatetype />
                        <Message />
                    </div>
                    <Modal.Footer>
                        <Button className="closeBtn" onClick={handleClose}>취소</Button>
                        <Button type="submit" onClick={handleSubmit} className="closeBtn" id="del">삭제</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}
export default DeleteButton;