import React from 'react'
import "./Component.css"
import { FcFullTrash } from "react-icons/fc";
export default function Template(props) {
  return (
    <div className='container'>
      <div className='full'>
        <h3 >{props.Title}</h3>
        <p >{props.Content}</p>
        </div>
        <div>
        <FcFullTrash onClick={(e)=>props.Delete(props.index)}/>
        </div>
    </div>
    
  )
}
