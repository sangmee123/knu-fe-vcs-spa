import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [list, setList]= useState();

  function versionList(list) {
    let arr = [];
    for(let i = 1; i <= 5; i++) {
      arr.push(
        <tr className="list">
          <td>{i}</td><td>ios</td><td>1.0</td><td>true</td><td>null</td>
          <td>com.test.myapp</td><td>2023/05/05 12:00:00</td>
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
        <button className="main addBtn">ADD</button>
        <button className="main apptestBtn">App Test</button>
      </div>
      
      <table>
        <tr id="title">
          <th>idx</th><th>os</th><th>ver</th><th>updatetype</th>
          <th>message</th><th>package</th><th>regdate</th><th>action</th>
        </tr>
        {versionList(list)}
      </table>

    </div>
  );
}

export default App;
