import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('')
  const [names, SetNames] = useState([])

  const handlesubmit = () => {

    if (name.trim() !== '') {
      SetNames((prevNames) => {
        const isNameExist = prevNames.find((item) => item.name === name)
        if (isNameExist) {
          alert('Name already exist')
          return [...prevNames]
        }
        else {
          return [...prevNames, { name: name, count: 0 }]
        }
      })
      setName('')
    }
  }

  const handleadd = (name) => {
    console.log("add")

    const updatedcount = names.map((item) => {
      return (item.name === name) ?
        { ...item, count: item.count + 1 } : item
    })
    console.log(updatedcount)
    SetNames(updatedcount);

  }

  const handlesub = (name) => {
    console.log("sub")

    const updatedcount = names.map((item) => {
      return (item.name === name) ?
        { ...item, count: item.count - 1 } : item
    })
    SetNames(updatedcount);
  }

  useEffect(() => {
    names.sort((a, b) => b.count - a.count)
  }, [names])

  return (
    <>
      <div>
        <input type="text"
          placeholder='enter the name'
          value={name}
          onChange={(e) => setName(e.target.value)
          }></input>
        <button onClick={handlesubmit}>Add name </button>
      </div>
      <h2>Name and count</h2>
      {names && names.map((item) => {
        return (
          <div key={item.name} className='countlist'>

            <h2>{item.name} : {item.count} </h2>
            <div className='countbtn'>
              <button
                onClick={() => handleadd(item.name)}
              >+</button>
              <button
                onClick={() => handlesub(item.name)}
              >-</button>
            </div>
          </div>
        )
      })
      }

    </>
  )
}

export default App
