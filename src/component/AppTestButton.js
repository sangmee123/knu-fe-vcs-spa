import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/AppTestButton.css';
import '../styles/AppTestPopup.css';

function AppTestButton() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /* ajax, jquery 형태의 서버 통신 - 전체 OS 버전 리스트 출력 */
    const [data, setData]= useState('');

    useEffect(() => {
        const getConfigData = async () => {
            try {
            const response = await axios.get('http://ec2-13-211-88-63.ap-southeast-2.compute.amazonaws.com:8080/vercontrol/getConfigAll');
            setData(response.data);
            } catch(e) {
            console.log(e);
            }
        };
        getConfigData();
    }, []); 

    function versionList(data) {
        let arr = [];
        for(let i = 0; i < data.length; i++) {
            arr.push(<option key={i} value={data[i].id}>{data[i].id}-{data[i].os}-{data[i].ver}</option>);
        }
        return arr;
    }

    const [selected, setSelected] = useState("");
    
    let idx = 0;
    let input = {};
    const handleSelect = (e) => {
        setSelected(e.target.value);
        idx = e.target.value;
        input = {
            "os": data[idx].os,
            "ver": data[idx].ver,
            "updatetype": data[idx].updatetype,
            "message": data[idx].message,
            "packageInfo": data[idx].packageInfo
            };
            console.log(input);
    }

    const SelectBox = () => {
        return (
            <select onChange={handleSelect} value={selected}>
                {versionList(data)}
            </select>
        );
    };

    /* ajax, jquery 형태의 서버 통신 - App Test에서 선택한 버전 POST */
    const [version, setVersion]= useState('');

    useEffect(() => {
        const postConfigData = async () => {
          try {
            const response = await axios.post(
              `http://ec2-13-211-88-63.ap-southeast-2.compute.amazonaws.com:8080/vercontrol/getConfig/${idx}`,
              input,
              setVersion(response.data),
              {}
            );
          } catch (e) {
            //console.log(e);
          }
        };
        postConfigData();
      }, []);

    const Message = () => {
        return (
            <div className="textBox" id="msg">{version[idx]}</div>
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
                        <Button className="closeBtn" onChange={handleSelect}>확인</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}
export default AppTestButton;