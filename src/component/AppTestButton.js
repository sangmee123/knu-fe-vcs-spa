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

    const handleClose = () => {
        setShow(false);
        setSelected("");
        setResult("");
    };
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
    const [result, setResult] = useState([]);
    let idx = 0;
    let input = {};
    const handleSelect = (e) => {
        setSelected(e.target.value);
        idx = e.target.value;
        console.log(input);
        axios(
            {
                //url: 'http://ec2-13-211-88-63.ap-southeast-2.compute.amazonaws.com:8080/vercontrol/getConfig/'+idx,
                url: 'http://localhost:8080/vercontrol/getConfig/'+idx,
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                    }
                }
            ).then(function (response) {
                setResult(response.data);
                console.log(response.data);
                console.log(response.data.ver);
            });

        
    }

    const SelectBox = () => {
        return (
            <select onChange={handleSelect} value={selected}>
                {versionList(data)}
            </select>
        );
    };


    var check = false;
    const Message = () => {
        console.log(result);
        
        (result.ver == null) ? check = false : check = true;

        return (
            <div className="textBox" id="msg">{ check ? "ver :" + result.ver + " updatetype : " + result.updatetype : "버전을 선택해주세요."}</div>
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
                    <div className="inputBox" value = {result}>
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