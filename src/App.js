import React, { useState } from 'react';
import './App.css';
import Form from './Component/to-do-form';
import Nav from './Component/navbar';
import Template from './Component/template';
function App() {
  const [Content,setContent]=useState([]);
  
  function addList(input){
    if(Content.length<20){
    setContent([...Content,input]);
    }
  }
  function dlete(id){
    let newListTodo = [...Content];
    newListTodo.splice(id,1)
    setContent([...newListTodo])
  }
  return (
  <>
  <Nav/>
    <div className="App">
      <div className='right'>
      <Form addList={addList} />
      </div>
      <div className='left'>
       {Content.map((e,i)=>{
        return <Template key={i} index={i} Title={e.Title} Content={e.content} Delete={dlete}/>
       })}
      </div>
      
    </div>
    </>
  );
}

export default App;
