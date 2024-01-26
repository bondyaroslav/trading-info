import React from 'react'

const Select = ({selectName, value, selectValues, onChange, flexDirection}) => {
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
            <select name={selectName} defaultValue={value} onChange={handleSelectChange}>
                {selectValues.map(optionValue => (
                    <option value={optionValue} key={optionValue}>{optionValue}</option>
                ))}
            </select>
        </div>
    )
}

export default Select