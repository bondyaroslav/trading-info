import React from 'react'

const Input = ({inputName, inputType}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            minWidth: 150,
            justifyContent: "space-between"
        }}>
            <p>{inputName}</p>
            <input type={inputType}
                style={{
                    width: 100
                }}
            />
        </div>
    )
}

export default Input