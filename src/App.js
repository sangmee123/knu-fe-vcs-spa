import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


import AppTestButton from './component/AppTestButton';
import TestButton from './component/TestButton';
import UpdateButton from './component/UpdateButton';
import DeleteButton from './component/DeleteButton';
import AddButton from './component/AddButton';


function App() {
  const [data, setData]= useState('');

  // ajax, jquery 형태의 서버 통신 
  useEffect(() => {
    const getConfigData = async () => {
        try {
          const response = await axios.get('http://ec2-13-211-88-63.ap-southeast-2.compute.amazonaws.com:8080/vercontrol/getConfigAll');
          setData(response.data);
        } catch(e) {
          //console.log(e);
        }
    };
    getConfigData();
  }, []); 

    /* 삭제 기능 */
    const onRemove = id => {
      // data.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
      // = data.id 가 id 인 것을 제거함
      setData(data.filter(data => data.id !== id));
  };

  function versionList(data) {
    let arr = [];

    for(let i = 0; i < data.length; i++) {
      arr.push(
        <tr className="list">
          <td>{data[i].id}</td>
          <td>{data[i].os}</td>
          <td>{data[i].ver}</td>
          <td>{(data[i].updatetype === 1) ? 'true': 'false' }</td>
          <td>{(data[i].message) === '' ? 'null' : (data[i].message)}</td>
          <td>{data[i].packageInfo}</td>
          <td>{data[i].regdate}</td>
          <td className="btnList">
            <TestButton />
            <UpdateButton data = {data[i]} />
            <DeleteButton onRemove={onRemove}/>
          </td>
        </tr>
      )
    }
    return arr;
  }

  return (
    <div className="App">
      <div className="mainBtn">
        <AddButton />
        <AppTestButton />
      </div>
      
      <table>
        <tr id="title">
          <th>idx</th><th>os</th><th>ver</th><th>updatetype</th>
          <th>message</th><th>package</th><th>regdate</th><th>action</th>
        </tr>
        {versionList(data)}
 
      </table>
    </div>
  );
}

export default App;
