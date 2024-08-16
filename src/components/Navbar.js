import React, { useState } from 'react'

function Navbar({ onadditem }) {
    const [data, setData] = useState({ name: '', age: '' })
    // const [item, setItem] = useState([])
    // console.log('item:', item)

    const handsubmit = () => {
        onadditem(data)
        setData({ name: '', age: '' })
        // let n = [...arr]
        // n.push(data)
        // let item([...n])
        // setItem(prve => [
        //     ...prve, data
        // ])
    }

    const handChange = (e) => {
        console.log('e', e.target.name)
        console.log('e', e.target.value)
        setData(prve => ({ ...prve, [e.target.name]: e.target.value }))

    }

    return (
        <div className='boxinput'>
            <div className='boxinput-name'>
                <p>ชื่อ</p>
                <input type='text' value={data.name} name='name' onChange={handChange}></input>
            </div>
            <div className='boxinput-age'>
                <p>อายุ</p>
                <input type='number' value={data.age} name='age' onChange={handChange}></input>
            </div>
            <button className='boxinput-button' onClick={handsubmit}>Add</button>
        </div>
    )
}

export default Navbar