import React from 'react'

const Select = ({selectName, selectValues, onChange, flexDirection}) => {
    const handleSelectChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: flexDirection,
            minWidth: 150,
            justifyContent: "space-between"
        }}>
            <p>{selectName}</p>
            <select onChange={handleSelectChange}>
                <option>none</option>
                {selectValues.map(optionValue => (
                    <option value={optionValue} key={optionValue}>{optionValue}</option>
                ))}
            </select>
        </div>
    )
}

export default Select