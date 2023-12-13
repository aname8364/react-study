import React from "react"

function DataView({data}) {
  return (
    <div>
      <b>
        {data.number}, {data.boolean.toString()}, {data.string}
      </b>
    </div>
  )
}

function App() {
  const someArr = [1, 2, 3, 4, 5]
  const arr = [
    {number: 123, boolean: true , string: "abc"},
    {number: 2  , boolean: false, string: "hi"}
  ]

  return (
    <>
    <p>{someArr}</p>

    <p>data: {arr.map(data =>
      `(${data.number}, ${data.boolean}, ${data.string}) `
      )
    }</p>
    
    {arr.map((data, index) => <DataView data={data} key={index}/>)}

    </>
  )
}

export default App