import React, { useEffect, useRef, useState } from 'react';
import Option from './Option'
import QuestionType from './QuestionType'
import MaterialIcon, { colorPalette } from 'material-icons-react'
import CurrentType from './CurrentType'
import AddOption from './AddOption'
import DropdownItem from './DropdownItem'
import Nanoid from 'nanoid'
import CurrentOption from './CurrentOption'

const Question = ({editable, optionsArray}) => {
  const wrapperRef = useRef(null);
  const [title, setTitle] = useState("Untitled Question")
  const [options, setOptions] = useState([{id: Nanoid(), text: "Choose", isActive: false}, {id: Nanoid(), text: "Option", isActive: false}])
  const [showTypes, toggleTypes] = useState(false)
  const [current, setCurrent] = useState(["Multiple Choice", "adjust"])
  const [others, setOthers] = useState([["Checkboxes", "check_box"], ["Dropdown", "arrow_drop_down_circle"], ["Free Answer", "format_align_left"]])
  const [currentOption, setCurrentOption] = useState(options[0])
  const [otherOptions, setOtherOptions] = useState([options[1]])
  const [showDropdown, toggleDropdown] = useState(false)
  
  useEffect(() => {
    // setOptions(optionsArray)
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  function editOption(id, value){
    const findOption = e => e.id === id
    let copy = [...options]
    const index = copy.findIndex(findOption)
    copy[index].text = value
    setOtherOptions(copy)
    setOptions(copy)
  }

  function addActive(id){
      console.log(id)
    const findOption = e => e.id === id
    let copy = [...options]
    if (current[0] === "Multiple Choice") {
        
        copy.forEach(e => e.isActive = false)
        const index = copy.findIndex(findOption)
        copy[index].isActive = true
        setOptions(copy)
    } else if (current[0] === "Checkboxes"){
        const index = copy.findIndex(findOption)
        copy[index].isActive = !copy[index].isActive
        setOptions(copy)
    }
  }

  function removeOption(id){
      const removed = options.filter(e => e.id != id)
      setOptions(removed)
  }

  function changeCurrent(type, icon){
    if(type !== current[0]){
        const changeOthers = others.filter(e => e[0] != type)
        changeOthers.push(current)
        setOthers(changeOthers)
        setCurrent([type, icon])
    }
  }

  function setOption(id){
      if(id !== currentOption.id){
        
        let copy = [...options]
        const findOption = e => e.id === id

        const index = copy.findIndex(findOption)
        const current = copy[index]
        const changeOption = otherOptions.filter(e => e.id != id)
        console.log(changeOption)
        
        console.log(current)
        changeOption.push(current)
        setOtherOptions(changeOption)
        setCurrentOption(current)
      }

  }

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      toggleTypes(false)
      toggleDropdown(false)
    }
  };

  function addOption(option){
      setOptions(options => [...options, option])
      setOtherOptions(otherOptions => [...otherOptions, option])
  }
  
  return (
    <div style = {{width: "100%"}}>
      <div style = {{display: "flex", marginBottom: "15px"}}>
        <div className = "question">
            {editable ? <input className = "questionTitle" placeholder = {title} onChange = {e => setTitle(e.target.value)}></input> : 
                <h3>{title}</h3>}
            {editable && <div className = {"questionType " + (showTypes && "currentBackground")}  onClick={() => toggleTypes(!showTypes)} ref={wrapperRef}>
                <CurrentType icon = {current[1]} name = {current[0]}/>
                <MaterialIcon icon = "arrow_drop_down" size = "small"/>
                <div className = {"questionTypes " + (showTypes && "showTypes")}>
                    <QuestionType setCurrent = {changeCurrent} icon = {current[1]} name = {current[0]}/>
                    {others.map((type, index) => {
                        return <QuestionType setCurrent = {changeCurrent} icon = {type[1]} name = {type[0]}/>
                    })}
                   
                </div>
            </div>}

        </div>
      </div>
      {!editable && current[0] === "Dropdown" &&
        <div className = {"dropdown " + (showDropdown && " currentBackground")}onClick = {() => toggleDropdown(!showDropdown)} ref={wrapperRef}>
            <CurrentOption text = {currentOption.text} id = {currentOption.id}/>
            <MaterialIcon icon = "arrow_drop_down" size = "small"/>
            <div className = {"dropdownItems " + (showDropdown && "showOptions")}>
                {otherOptions.map((option, index) => {
                    return <DropdownItem setOption = {setOption} text = {option.text} id = {option.id}/>
                })}
            </div>
            
        </div>
      }
      {(current[0] !== "Dropdown" || editable) && options.map((option, index) => {
          if(option.text !== "Choose"){
          return <Option editOption = {editOption} editable = {editable} removeOption = {removeOption} 
                         number = {index} type = {current} optionText = {option.text} 
                         id = {option.id} isActive = {option.isActive} add = {false} addActive = {addActive}/>
        }})}
      {current[0] !== "Free Answer" && <AddOption type = {current} addOption = {addOption} add = {editable}/>
}
    </div>
  );
}

export default Question