import React from 'react'
import Nanoid from 'nanoid'

const AddOption = ({ type, addOption, add }) => {
    return (
        <div>
            {add && <div className="option">
                {(type && type[0] === "Multiple Choice") && <p className="circle"></p>}
                {(type && type[0] === "Checkboxes") && <p className="box"></p>}
                <input onClick={() => addOption({ id: Nanoid(), text: "Option", isActive: false})} className="optionName" placeholder="Add Option"></input>
            </div>}
        </div>
    )
}

export default AddOption