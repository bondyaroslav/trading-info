import React from 'react'

const Input = ({inputName, inputType, onChange}) => {
    const handleInputChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            minWidth: 150,
            justifyContent: "space-between"
        }}>
            <p>{inputName}</p>
            <input
                type={inputType}
                onChange={handleInputChange}
                style={{
                    width: 100
                }}
            />
        </div>
    )
}

export default Input