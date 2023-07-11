import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mainBtn">
        <button className="mainBtn">ADD</button>
        <button className="mainBtn">App Test</button>
      </div>
      
      <table>
        <tr id="title">
          <th>idx</th><th>os</th><th>ver</th><th>updatetype</th>
          <th>message</th><th>package</th><th>regdate</th><th>action</th>
        </tr>

        <tr className="list">
          <td>1</td><td>ios</td><td>1.0</td><td>true</td><td>null</td>
          <td>com.test.myapp</td><td>2023/05/05 12:00:00</td>
          <td>
            <button className="actionBtn" id="testBtn">Test</button>
            <button className="actionBtn" id="updateBtn">수정</button>
            <button className="actionBtn" id="deleteBtn">삭제</button>
          </td>
        </tr>
        <tr>
        <td>2</td><td>ios</td><td>1.0</td><td>true</td><td>null</td>
          <td>com.test.myapp</td><td>2023/05/05 12:00:00</td>
          <td>
            <button className="actionBtn" id="testBtn">Test</button>
            <button className="actionBtn" id="updateBtn">수정</button>
            <button className="actionBtn" id="deleteBtn">삭제</button>
          </td>
        </tr>
        <tr>
        <td>3</td><td>ios</td><td>1.0</td><td>true</td><td>null</td>
          <td>com.test.myapp</td><td>2023/05/05 12:00:00</td>
          <td>
            <button className="actionBtn" id="testBtn">Test</button>
            <button className="actionBtn" id="updateBtn">수정</button>
            <button className="actionBtn" id="deleteBtn">삭제</button>
          </td>
        </tr>
        <tr>
        <td>4</td><td>ios</td><td>1.0</td><td>true</td><td>null</td>
          <td>com.test.myapp</td><td>2023/05/05 12:00:00</td>
          <td>
            <button className="actionBtn" id="testBtn">Test</button>
            <button className="actionBtn" id="updateBtn">수정</button>
            <button className="actionBtn" id="deleteBtn">삭제</button>
          </td>
        </tr>
        <tr>
        <td>5</td><td>ios</td><td>1.0</td><td>true</td><td>null</td>
          <td>com.test.myapp</td><td>2023/05/05 12:00:00</td>
          <td>
            <button className="actionBtn" id="testBtn">Test</button>
            <button className="actionBtn" id="updateBtn">수정</button>
            <button className="actionBtn" id="deleteBtn">삭제</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
