import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {todos, handleDelete, handleEdit} = props
    
    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard key={`list1-${todoIndex}`} children={todo} idx={todoIndex} handleDelete={handleDelete} handleEdit={handleEdit}/>
                )
            })}
            {/* {someotherlist.map((todo, todoIndex) => {
                return (
                    <TodoCard key={`list2-${todoIndex}`}>
                        
                    </TodoCard>
                )
            })} */}
        </ul>
    )
}
