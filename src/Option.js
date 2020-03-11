import React, { useEffect, useState } from 'react'
import MaterialIcon, { colorPalette } from 'material-icons-react'
import Nanoid from 'nanoid'


const Option = ({ editOption, editable, type, optionText, number, removeOption, id, isActive, addActive}) => {
    const [option, setOption] = useState("Option")

    function handleEdit(e){
        setOption(e.target.value)
        editOption(id, e.target.value)
    }

    useEffect(() => {
        setOption(optionText)
    }, [])
    return (
        <div>
            <div key={isActive} className="option">
                {(type && type[0] === "Multiple Choice") && <p className={"circle " + (isActive && "active ")} onClick = {() => addActive(id)}></p>}
                {(type && type[0] === "Checkboxes") && <p className={"box " + (isActive && "active ")} onClick = {() => addActive(id)}></p>}
                {(type && type[0] === "Dropdown") && <p className="number">{number}.</p>}

                {editable && <input style = {{borderBottom: "1px dotted #aaaaaa"}} value={option} className="optionName" placeholder={option} onChange={e =>handleEdit(e)}></input>
                    }
                {!editable && type[0] !== "Free Answer" && <p style = {{margin: "5px"}}>{option}</p>}
                {type[0] === "Free Answer" && !editable && <input style = {{borderBottom: "1px dotted #aaaaaa"}} className="optionName" placeholder="Type in an answer" onChange={e =>handleEdit(e)}></input>}
                {editable && <span className="close" onClick={() => removeOption(id)}>
                    <MaterialIcon icon="close" size="tiny" /> 
                </span>}
            </div>

        </div>
    )
}

export default Option