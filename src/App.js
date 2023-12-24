import './App.css';
import {useState, useEffect} from 'react'
function App() {
  const [memberName, setMemberName] = useState("");
  const [memberList , setMemberList] = useState([]);

  console.log('current member name; ', memberName)
  console.log('intially member list: ', memberList)

  const addNewMember = () => {
    setMemberList((prevList) => [...prevList, memberName]);
    setMemberName("");    
  }
    
  const printText = (e) =>{
    console.log(e.target.value)
  }
 
  const handleKey = (event) => {
    console.log('press key is : ', event.key)
    if (memberName && event.key === 'Enter'){ 
      addNewMember(memberName);
    }
  }

  
  return (
    <main className="App">
      <div className = "add-input-btn"> 
        <input   onCopy = {e => printText(e)} onKeyDown={handleKey} onChange = {(e) => setMemberName(e.target.value)}className= "input "type= "text" value = {memberName}/>
        <button onClick = {addNewMember} className = "add-btn">+ Add new Member</button>
      </div>
      <div className = "container-of-family-member">
        {memberList.map((member, index) => <div className = "member"key = {index}>{member}</div>)}
      </div>       
    </main>
  );
}

export default App;
