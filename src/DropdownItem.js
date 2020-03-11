import React from 'react'

const DropdownItem = ({setOption, text, id}) => {
    return(
        <div key = {text} className = "dropdownOption" onClick = {() => setOption(id)} >
            <p>{text}</p>
        </div>
    )
}

export default DropdownItem