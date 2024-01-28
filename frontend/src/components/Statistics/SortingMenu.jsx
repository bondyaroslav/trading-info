import React from "react"
import Select from "../../UI/select/Select"
import constants from "../../constants"

const SortingMenu = ({handleChange}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            marginTop: 20
        }}>
            <Select selectName={"currency pairs"}
                    value={"none"}
                    selectValues={constants.currencyPairs}
                    onChange={(value) => {handleChange("currency pairs", value)}}
                    flexDirection={"column"}/>

            <Select selectName={"capital size"}
                    value={"none"}
                    selectValues={constants.numericalData}
                    onChange={(value) => {handleChange("capital size", value)}}
                    flexDirection={"column"}/>

            <Select selectName={"credit leverage"}
                    value={"none"}
                    selectValues={constants.numericalData}
                    onChange={(value) => {handleChange("credit leverage", value)}}
                    flexDirection={"column"}/>

            <Select selectName={"strategy type"}
                    value={"none"}
                    selectValues={constants.strategyType}
                    onChange={(value) => {handleChange("strategy type", value)}}
                    flexDirection={"column"}/>

            <Select selectName={"transaction type"}
                    value={"none"}
                    selectValues={constants.transactionType}
                    onChange={(value) => {handleChange("transaction type", value)}}
                    flexDirection={"column"}/>

            <Select selectName={"start date"}
                    value={"none"}
                    selectValues={constants.date}
                    onChange={(value) => {handleChange("start date", value)}}
                    flexDirection={"column"}/>

            <Select selectName={"endDate"}
                    value={"none"}
                    selectValues={constants.date}
                    onChange={(value) => {handleChange("end date", value)}}
                    flexDirection={"column"}/>
        </div>
    )
}

export default SortingMenu