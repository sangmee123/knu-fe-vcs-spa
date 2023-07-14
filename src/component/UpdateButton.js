import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/CommonPopup.css'; 
import '../styles/ActionButton.css';

function UpdateButton(props) {

    //const [data, setData]= useState('');

    // ajax, jquery 형태의 서버 통신 
    //let idx = 0;
    // useEffect(() => {
    //     const getConfigData = async () => {
    //         try {
    //         const response = await axios.get('http://ec2-13-211-88-63.ap-southeast-2.compute.amazonaws.com:8080//vercontrol/getConfig/{id}');
    //         idx = response.data.id;
    //         setData(response.data);
    //         console.log(response.data);
    //         } catch(e) {
    //         console.log(e);
    //         }
    //     };
    //     getConfigData();
    // }, []); 

    const [show, setShow] = useState(false);

    const [os, setOs] = useState(props.data.os);
    const [ver, setVer] = useState(props.data.ver);
    const [updatetype, setUpdatetype] = useState(props.data.updatetype);
    const [message, setMessage] = useState(props.data.message);

    const handleClose = () => {setShow(false);}
    const handleShow = () => setShow(true);
    const selectedOs = (e) => {
        setOs(e.target.value);
        console.log(e.target.value);
    }
    const selectedVer = (e) => {
        setVer(e.target.value);
        console.log(e.target.value);
    }
    const selectedUpdatetype = (e) => {
        setUpdatetype(e.target.value);
        console.log(e.target.value);
    }
    const selectedMessage = (e) => {
        setMessage(e.target.value);
        console.log(e.target.value);
    }
    const handleSubmit = () => {
        setShow(false);
        console.log(props.data.id);
        var id = props.data.id;
        axios(
            {
                //url: 'http://ec2-13-211-88-63.ap-southeast-2.compute.amazonaws.com:8080/vercontrol/getConfig/'+idx,
                url: 'http://ec2-13-211-88-63.ap-southeast-2.compute.amazonaws.com:8080/vercontrol/getConfig/' + id,
                method: 'put',
                data: {
                    "os": os,
                    "ver": ver,
                    "updatetype": updatetype,
                    "message": message
                }
                ,
                headers: {
                    'Content-Type': 'application/json'
                    }
                }
            ).then(function (response) {
                console.log(response.data);
                console.log(response.data.ver);
            });
    
    
    }

    const SelectOs = () => {
        return (
            <select onChange={selectedOs} value={os}>
                <option value='android'>{'android'}</option>
                <option value='ios'>{'ios'}</option>
            </select>
        );
    };
    // const Version = () => {
    //     return (
    //         <input type="text" onChange={selectedVer} className="textBox" value={ver}/>
    //     );
    // };
    const SelectUpdatetype = () => {
        return (
            <select onChange={selectedUpdatetype} value={updatetype}>                
                <option value="0">{'false'}</option>
                <option value="1">{'true'}</option>
            </select>
        );
    };
    // const Message = () => {
    //     return (
    //         <textarea className="textBox" onChange={selectedMessage} value={message} id="msg"></textarea>
    //     );
    // };

    return(
        <>
            <button className="actionBtn" id="updateBtn" variant="outline-primary" onClick={handleShow}>수정</button>
            <Modal show={show} onHide={handleClose}>
                <form>
                    <Modal.Header></Modal.Header>
                    <div className='inputBox'>
                        <SelectOs />
                        <input type="text" onChange={selectedVer} className="textBox" value={ver}/>
                        <SelectUpdatetype />
                        <textarea className="textBox" onChange={selectedMessage} value={message} id="msg"/>
                    </div>
                    <Modal.Footer>
                        <Button className="closeBtn" onClick={handleClose}>취소</Button>
                        <Button type="submit" className="closeBtn" onClick={handleSubmit}>확인</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}
export default UpdateButton;