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
            arr.push(<option key="ver">{data[i].os}-{data[i].ver}</option>);
        }
        return arr;
    }

    const SelectBox = () => {
        return (
            <select>
                {versionList(data)}
            </select>
        );
    };

    const Message = () => {
        return (
            <textarea className="textBox" id="msg"></textarea>
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
                        <Button className="closeBtn" onClick={handleClose}>확인</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}
export default AppTestButton;