import React from 'react'

const TodosForms = ({title, handleChange, todo, handleSubmit}) => {
  return (
    <main id='formWrapper'>
        <form>
            <div className='form-group'>
                <label htmlFor="title">Title</label><br />
                <input type="text"
                id='title' 
                name='title'
                placeholder='enter title'
                value={title}
                onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor="todo">Todo</label><br />
                <input type="text"
                id='todo' 
                name='todo'
                placeholder='enter todo'
                value={todo}
                onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <button onClick={handleSubmit}>ADD TODO</button>
            </div>
        </form>
   
    </main>
  )
}

export default TodosForms
