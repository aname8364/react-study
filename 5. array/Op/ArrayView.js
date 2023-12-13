import React from "react"

function DataView({data, update}) {
    return (
        <div style={{
            cursor: "pointer",
            color : data.active ? "green" : "black"
        }}
        onClick = {() => update(data.name)}
        >
        {data.name}: {data.num}
        </div>
    )
}

function ArrayView({array, update}) {
    return (
        <div>
        {array.map((data, index) => (
            <DataView data={data} update={update} key={index}/>
        ))}
        </div>
    )
}

export default ArrayView