import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {

  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const hs = e => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    })

    setInput('')
  }

  return (
    <form className='todoForm' onSubmit={hs}>
      {props.edit ? (
      <>
        <input
          type="text"
          className="todoInput edit"
          placeholder='Update your item'
          value={input}
          onChange={e => {
            setInput(e.target.value)
          }}
          ref={inputRef}
        />
        <button className="todoButton edit">Update</button>
      </>
      ) :
      (
      <>
        <input
          type="text"
          className="todoInput"
          placeholder='Add to todo'
          value={input}
          onChange={e => {
            setInput(e.target.value)
          }}
          ref={inputRef}
        />
        <button className="todoButton">Add Todo</button>
      </>
      )}
    </form>
  )
}

export default TodoForm
