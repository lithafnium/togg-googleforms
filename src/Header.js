import React, { useEffect, useState } from 'react';
import Question from './Question'
import Nanoid from 'nanoid'


const Header = ({editable, addQuestion}) => {
  const [title, setTitle] = useState("Untitled Form")
  const [description, setDescription] = useState("Form Description")

  return (
    <div style = {{width: "100%"}}>
      <h2 className = "title" contentEditable = {editable} onChange = {e => setTitle(e.target.value)}>{title}</h2>
      {editable && <hr/>}
      <p className = "formDescription" contentEditable = {editable} onChange = {e => setDescription(e.target.value)} >{description}</p>
      {editable && <button onClick = {() => addQuestion({options: [{id: Nanoid(), options: {id: Nanoid(), text: "Option"}}]})} className = "addQuestion">Add Question</button>}
    </div>
  );
}

export default Header; 