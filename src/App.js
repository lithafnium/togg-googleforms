import React, { useState, useEffect } from 'react'
import MaterialIcon, {colorPalette} from 'material-icons-react'
import Question from './Question'
import Header from './Header'
import './main.css'
import Nanoid from 'nanoid'



const App = () => {

  const [todos, addTodo] = useState([])
  const [edit, toggleEdit] = useState(true)
  const [questions, setQuestions] = useState([{id: Nanoid(), options: [{id: Nanoid(), text: "Option", isActive: false}]}])

  function addQuestion(question){
    setQuestions(questions => [...questions, question])
  }

  function add(name) {
    addTodo([...todos, name])
  }

  function remove(id) {
    addTodo(todos.filter(rem => rem.id !== id));
  }

  return (
    <div>
      <header>
        <div className = "folder">
          <span contenteditable="true" className = "formName">Untitled Form</span>
          
          <span className = "matIcon">
            <MaterialIcon icon = "folder_open" size = "small"/>
          </span>
          <span className = "matIcon">
            <MaterialIcon icon = "star_border" size = "small"/>
          </span>

        </div>
        <div className = "buttonNav">
          <span className = "matIcon">
            <MaterialIcon icon="brush" size = "small" />
          </span>
          <span className = "matIcon">
            <MaterialIcon icon="visibility" size = "small" />
          </span>
          <span className = "matIcon">
            <MaterialIcon icon="settings" size = "small"/>
          </span>
          <button className = 'send' onClick = {() => toggleEdit(!edit)}>{edit ? "Submit" : "Edit"}</button>

          <img src = "/propic.jpg"/>
        </div>
      </header>
      <div style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        flexWrap: "wrap"
      }}>
        <div className="container vcenter">
          <div className="row card headerCard" tabindex="0">
            <Header editable = {edit} addQuestion = {addQuestion}/>
          </div>
            {questions.map((question, index) => {
              return <div className = "card">
                <Question editable = {edit} optionsArray = {question.options}/>
                </div>
            })}
        </div>
      </div>
    </div>
  );
}

export default App
