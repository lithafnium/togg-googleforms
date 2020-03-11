import React from 'react'

const CurrentOption = ({text, id, setOption}) => {   
    return(
        <div className = "currentOption" >
            <p>{text}</p>
        </div>
    )
}

export default CurrentOption