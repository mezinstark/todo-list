import './App.css';
import { useState } from 'react';
import { TextField } from './components/TextField/textField.components';


function App() {

  const [todos, setTodos] =useState([]);
  const [check, setCheck] =useState([]);
  

  const addItem=(event)=>{
   event.preventDefault();
    const itemValue =event.target.item.value;
    if(itemValue!==""){
    setTodos(values=>[...values, itemValue]);
    setCheck(values=>[...values, false]);
    }
    else{
      alert(`PLease Type a task before Submiting`);
    }
  }

  const handleChange=(position)=>{
    const updatedChecked=check.map((item, index)=>
        index === position? !item :item
        );
        setCheck(updatedChecked);
  }
  
  return (
    <>
   <div className='todo-container'>
     <h1>TASK Tracker!</h1>
    <TextField 
    item={todos}
    checkItem={check}
    addItem={addItem}
    handleChange={handleChange}
    />
   </div>
   <div>
     
   </div>
   </>
  );
}

export default App;
