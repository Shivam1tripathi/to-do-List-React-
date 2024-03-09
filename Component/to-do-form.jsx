import React, { useState } from 'react';
import "./Component.css";

 function Form(props){
  
  const [input,setInput]=useState({
    Title:"",
    content:""
  },);

  return (
<div className='form'>
  <h1>To-Do</h1>
    <div >
        <h3>Title</h3>
        <input type="text" value={input.Title} maxLength={13} onChange={(e)=>{
          setInput({Title:e.target.value});
       
        }} />
    </div>
    <div>
        <h3>Content</h3>
        <textarea cols="20" value={input.content} maxLength={57}  rows="2" onChange={(e)=>{
          setInput({...input, content: e.target.value});
        
        }}></textarea>
        
    </div>  
        <button onClick={()=>{
          if(input.content!==""&&input.Title!==""){
          props.addList(input);
          setInput({content:"",
        Title:""});}
        }}>Submit</button>
</div>
  )
}

export default Form;