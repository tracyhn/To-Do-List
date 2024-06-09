import React from 'react'
import { useState } from "react"

export default function TodoCard(props) {
    const {children, idx, handleDelete, handleEdit} = props
    const [editFlag, setEditFlag] = useState(false)
    const [text, setText] = useState(children)

    return (
        <li className='todoItem' >
            {editFlag 
                ? <input className='editText' value={text} onChange={(e) => {
                    setText(e.target.value)
                }}/>
                : children
            }

            <div className='actionsContainer'>
                <button className="fa-solid fa-pen-to-square" onClick={() => {
                    console.log(text)
                    if (editFlag) {
                        handleEdit(idx, text)
                    }
                    setEditFlag(prev => {return !prev})
            }}/>

                <button className="fa-solid fa-trash-can" onClick={() => {
                    handleDelete(idx)
            }}/>
            </div>
        </li>
    )
}
