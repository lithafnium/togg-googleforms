import React from 'react'
import MaterialIcon, { colorPalette } from 'material-icons-react'

const QuestionType = ({icon, name, setCurrent}) => {
    return(
        <div className = "questionOption" onClick = {() => setCurrent(name, icon)}>
            <MaterialIcon key = {icon} icon = {icon} size = "tiny"/>
            <p>{name}</p>
        </div>
    )
}

export default QuestionType