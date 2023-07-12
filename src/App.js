import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  // let list = [
  //   {
  //     idx: "1",
  //     os: "ios", 
  //     ver: "1.0", 
  //     updateType: "true", 
  //     message: "null", 
  //     packageInfo: "com.test.myapp", 
  //     regdate: "2023/05/05 12:00:00"
  //   },
  //   {
  //     idx: "2",
  //     os: "ios", 
  //     ver: "1.0", 
  //     updateType: "true", 
  //     message: "null", 
  //     packageInfo: "com.test.myapp", 
  //     regdate: "2023/05/05 12:00:00"
  //   }, 
  //   {
  //     idx: "3",
  //     os: "android", 
  //     ver: "1.5", 
  //     updateType: "false", 
  //     message: "서비스 A가 업데이트 되었습니다.", 
  //     packageInfo: "com.test.myapp", 
  //     regdate: "2023/05/05 12:00:00"
  //   }, 
  //   {
  //     idx: "4",
  //     os: "android", 
  //     ver: "1.5", 
  //     updateType: "false", 
  //     message: "서비스 A가 업데이트 되었습니다.", 
  //     packageInfo: "com.test.myapp", 
  //     regdate: "2023/05/05 12:00:00"
  //   }, 
  //   {
  //     idx: "5",
  //     os: "ios", 
  //     ver: "2.0", 
  //     updateType: "true", 
  //     message: "신규서비스 출시 앱을 업데이트...", 
  //     packageInfo: "com.test.myapp", 
  //     regdate: "2023/05/05 12:00:00"
  //   }
  // ];
  // const [data, setData]= useState(list);

  // ajax, jquery 형태의 서버 통신 
  let arr = [];
  function getConfigData() {
    axios
    .get('http://localhost:8080/vercontrol/getConfigAll')
    .then(function (resonse) {
      // 성공한 경우 실행
      let data = resonse;
      console.log(data);
      for(let i = 0; i < data.length; i++) {
        arr.push(
          <tr className="list">
            <td>{data[i].id}</td><td>{data[i].os}</td><td>{data[i].ver}</td><td>{data[i].updateType}</td>
            <td>{data[i].message}</td><td>{data[i].packageInfo}</td><td>{data[i].regdate}</td>
            <td>
              <button className="actionBtn" id="testBtn">Test</button>
              <button className="actionBtn" id="updateBtn">수정</button>
              <button className="actionBtn" id="deleteBtn">삭제</button>
            </td>
          </tr>
        )
      }
      return arr;
    })
    .catch(function (error) {
      // 에러인 경우 실행
      console.log(error);
    })
    .then(function () {
      // 항상 실행
    });
  }

  // function versionList(data) {
  //   let arr = [];

  //   for(let i = 0; i < data.length; i++) {
  //     arr.push(
  //       <tr className="list">
  //         <td>{data[i].idx}</td><td>{data[i].os}</td><td>{data[i].ver}</td><td>{data[i].updateType}</td>
  //         <td>{data[i].message}</td><td>{data[i].package}</td><td>{data[i].regdate}</td>
  //         <td>
  //           <button className="actionBtn" id="testBtn">Test</button>
  //           <button className="actionBtn" id="updateBtn">수정</button>
  //           <button className="actionBtn" id="deleteBtn">삭제</button>
  //         </td>
  //       </tr>
  //     )
  //   }
  //   return arr;
  // }

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
        {/* {versionList(data)} */}
        {getConfigData()}
      </table>
    </div>
  );
}

export default App;
