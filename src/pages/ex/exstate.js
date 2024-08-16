import React, { useState } from 'react'

function Exstate() {
    const [isTrue, setIstrue] = useState(false)
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    const [address, setAddress] = useState({ state: '', zipcode: '' })
    const [addresslist, setAddresslist] = useState([])

    const ontoggle = () => {
        setIstrue(!isTrue)
    }

    const oncount = (type) => {
        if (type === "plus") {
            setCount(prev => prev + 1)
        }
        if (type === "minus") {
            setCount(prev => prev - 1)
        }
    }

    const handChange = (event) => {
        setText(event.target.value)
    }

    const onAddstate = () => {
        setAddress({
            state: text,
            zipcode: count
        })
        setText('')
        setCount(0)
    }

    const onAddaddress = () => {
        setAddresslist(prev => [...prev, address])
        setAddress({ state: "", zipcode: "" })
    }

    const onDeleteaddress = (index) => {
        const temp = [...addresslist]
        temp.splice(index, 1)
        setAddresslist([...temp])
    }

    return (
        <div>
            <div >
                <button onClick={ontoggle}>
                    isTrue
                </button>
                <span>{isTrue ? "true" : "false"}</span>
            </div>
            <hr />
            <div >
                <button onClick={() => { oncount('minus') }}>
                    count-
                </button>
                <span>{count}</span>
                <button onClick={() => { oncount('plus') }}>
                    count+
                </button>
            </div>
            <hr />
            <div >
                <input value={text} onChange={handChange}></input>
                <button onClick={onAddstate}>
                    add state
                </button>
            </div>
            <hr />
            <div >
                <div>
                    <span>{"state"}</span>
                    <span>{address.state}</span>
                </div>
                <div>
                    <span>{"zipcode"}</span>
                    <span>{address.zipcode}</span>
                </div>
                <button onClick={onAddaddress}>
                    add addresslist
                </button>
            </div>
            <hr />
            <div>
                {addresslist.map((value, index) => (
                    <div style={{ display: "flax" }}>
                        <div>
                            <span>{"state"}</span>
                            <span>{value.state}</span>
                        </div>
                        <div>
                            <span>{"zipcode"}</span>
                            <span>{value.zipcode}</span>
                        </div>
                        <button onClick={() => onDeleteaddress(index)}>
                            delete
                        </button>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Exstate