import React from 'react'

const Select = ({selectName, selectValues, onChange}) => {
    const handleSelectChange = (event) => {
        onChange(event.target.value)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            minWidth: 150,
            justifyContent: "space-between"
        }}>
            <p>{selectName}</p>
            <select name={selectName} onChange={handleSelectChange}>
                {selectValues.map(value => (
                    <option value={value} key={value}>{value}</option>
                ))}
            </select>
        </div>
    )
}

export default Select