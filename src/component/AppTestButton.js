import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/AppTestButton.css';
import '../styles/AppTestPopup.css';

var idx = 0;

function AppTestButton() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData]= useState('');

    // ajax, jquery 형태의 서버 통신 
    useEffect(() => {
        const getConfigData = async () => {
            try {
            const response = await axios.get('http://ec2-13-211-88-63.ap-southeast-2.compute.amazonaws.com:8080/vercontrol/getConfigAll');
            setData(response.data);
            console.log(response.data);
            } catch(e) {
            console.log(e);
            }
        };
        getConfigData();
    }, []); 
    
    function versionList(data) {
        let arr = [];

        for(let i = 0; i < data.length; i++) {
            arr.push(<option key="ver">{data[i].id}-{data[i].os}-{data[i].ver}</option>);
        }

        return arr;
    }

    const SelectBox = () => {
        const handleChange = (e) => {
            // event handler
            idx = Math.floor(e.target.value[0]-1);
            console.log(e.target.value);
            console.log(idx);
        };

        return (
            <select onChange={handleChange}>
                {versionList(data)};
            </select>
        );
    };

    const Message = () => {
        return (
            <div className="textBox" id="msg">{"[{os:"} {data[idx].os} {"},{ver:"}{data[idx].ver}{"},…]"}</div>
        );
    };

    return(
        <div>
            <button className="apptestBtn" variant="outline-primary" onClick={handleShow}>App Test</button>

            <Modal show={show} onHide={handleClose}>
                    <Modal.Header>Client Ver</Modal.Header>
                    <div className="inputBox">
                        <SelectBox />
                        </div>
                    <Modal.Header>Server Result</Modal.Header>
                    <div className="inputBox">
                        <Message />
                    </div>
                    <Modal.Footer>
                        <Button className="closeBtn" onClick={handleClose}>확인</Button>
                    </Modal.Footer>
            </Modal>
        </div>
    )
}
export default AppTestButton;