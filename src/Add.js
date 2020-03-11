import React, {useState} from 'react'; 
import Nanoid from 'nanoid'; 

const Add = (props) => {
    const [todo, input] = useState(""); 
    const [desc, descInput] = useState(""); 
    let colors = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"]; 

    function handleTitle(event){
        input(event.target.value); 
    }

    function handleDesc(event){
        descInput(event.target.value); 
    }

    function add(){
        input(""); 
        descInput(""); 
        props.addTodo({
                name: todo, 
                desc: desc, 
                id: Nanoid(), 
                color: colors[Math.floor(Math.random()*colors.length)]
            }); 
    }

    return(
        <>
              <input onChange = {handleTitle} className = "addInput" type="text" name="firstname" placeholder = "Add Todo"></input>
              <input onChange = {handleDesc} className = "addInput" type="text" name="firstname" placeholder = "Description"></input>
              <button onClick = {() => add()}className = "addButton">Add Todo</button>

        </>
    ); 
}

export default Add; 