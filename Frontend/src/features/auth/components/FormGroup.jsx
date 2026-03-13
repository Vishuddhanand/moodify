import React from 'react'

const FormGroup = ({ placeholder, value, onChange, name, type }) => {
    return (
        <input
            value={value}
            onChange={onChange}
            type={type} name={name} placeholder={placeholder} required />
    )
}

export default FormGroup
