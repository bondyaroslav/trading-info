import React from 'react'

const Select = ({selectName, options}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            minWidth: 150,
            justifyContent: "space-between"
        }}>
            <p>{selectName}</p>
            <select name={selectName}>
                {
                    options.map(option => (
                        <option>{option}</option>
                        )
                    )
                }
            </select>
        </div>
    )
}

export default Select