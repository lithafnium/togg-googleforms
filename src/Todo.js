import React, {useState} from 'react'; 

const Todo = (props) => {

    function erase(){
        props.remove(props.id); 
    }
    
    return(
        <div className = "todo" style = {{
                                        borderLeft: "5px solid" + props.color
        }}>
            <div className = "todoItem">
                <div className = "title">
                    <h4  style = {{marginBottom: "10px",
                                marginTop: "10px",
                                }}>{props.name}</h4>
                    <button onClick = {erase} className = "delete"><p>x</p></button>
                    <button onClick = {erase} className = "check"><p>&#x2713;</p></button>

                </div>
                <li style = {{listStyle: "none", 
                                padding: "0px 0px 0px 20px",
                                fontSize: "0.9em"}}>
                    {props.desc}
                </li>
            </div>
        </div>
    ); 

}

export default Todo; 