import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AppTestButton from './AppTestButton';

function App() {
  const [data, setData]= useState('');

  // ajax, jquery 형태의 서버 통신 
  useEffect(() => {
    const getConfigData = async () => {
        try {
          const response = await axios.get('');
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
      arr.push(
        <tr className="list">
          <td>{data[i].id}</td><td>{data[i].os}</td><td>{data[i].ver}</td><td>{data[i].updateType}</td>
          <td>{data[i].message}</td><td>{data[i].package}</td><td>{data[i].regdate}</td>
          <td>
            <button className="actionBtn" id="testBtn">Test</button>
            <button className="actionBtn" id="updateBtn">수정</button>
            <button className="actionBtn" id="deleteBtn">삭제</button>
          </td>
        </tr>
      )
    }
    return arr;
  }

  return (
    <div className="App">
      <div className="mainBtn">
        <button className="addBtn">ADD</button>
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
