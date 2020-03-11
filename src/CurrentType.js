import React, { useEffect, useState } from 'react'
import MaterialIcon, { colorPalette } from 'material-icons-react'

const CurrentType = ({icon, name}) => {
    
    return (
        <div className= {"currentType "}  >
            <MaterialIcon key = {icon} icon={icon} size="tiny" />
            <p>{name}</p>
        </div>
    )
}

export default CurrentType