import { useState } from "react";
import React from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {
    const [valueInput, setValueInput] = useState('');

    const handleInputChange =(e) =>{
        setValueInput(e.target.value)
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        if(valueInput.trim().length>2){
            setCategories((cats)=>[valueInput,...cats]);
            setValueInput('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={valueInput}
            onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
