import React from 'react'

const FormGroup = ({ placeholder, value, onChange, name, type }) => {
    return (
        <input
            value={value}
            onChange={onChange}
            type={type || "text"} name={name} placeholder={placeholder} required />
    )
}

export default FormGroup
