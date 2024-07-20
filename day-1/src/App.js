import Modal from './Components/Modal';
import './App.css';
import { useState } from 'react';

function App() {
 const [show , setShow] = useState(false);
 function handleclose(){
  setShow(false)
 }

  return (
    <div className="App">
      <h1>Day-1</h1>

      <button onClick={()=>setShow(true)} className='btn'>Show the modal</button>
      <h2>Modal</h2>
     
     {
      show?<Modal  handleclose= {handleclose}/> :null
     }  
    </div>
  );
}

export default App;
