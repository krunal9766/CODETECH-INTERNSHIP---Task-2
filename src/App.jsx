import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove } from '@fortawesome/free-solid-svg-icons'


function App() {
  let [todoList, setTodoList] = useState([])

  let saveToDoList = (event) => {
    event.preventDefault()

    let todoname = event.target.todoname.value
    if (!todoList.includes(todoname)) {
      let finalToDoList = [...todoList, todoname]
      setTodoList(finalToDoList)
    }
    else {
      alert("todo has already been added")
    }
  }
  return (
    <div className='toDoApp'>
      <h2 style={{margin:'auto'}}>To Do App</h2>
      <form onSubmit={saveToDoList}>
        <input
          type='text'
          placeholder='Enter a Todo Task'
          name='todoname'
        ></input>
        <button >ADD</button>
      </form>

      <div className='todolist'>
        <ul>
          {todoList.map((element, index) => {
            return (
              <ToDoListItem value={element} key={index} indexNumber={index}
                todoList={todoList}
                setTodoList={setTodoList}
              ></ToDoListItem>
            )
          })

          }
        </ul>
      </div>
    </div>
  );
}

export default App;



function ToDoListItem({ value, indexNumber, todoList, setTodoList }) {
  let [status,setStatus] = useState(false)
  let deleteRow = () => {
    alert(indexNumber)

    let finalList = todoList.filter((element, index) => {
      return index != indexNumber
    })

    setTodoList(finalList)
    alert(finalList)
  }

  let checkStatus = ()=>{
      setStatus(true)
  }


  return (
    <li className={(status) ? 'completeToDo' : ''} onClick={checkStatus}>{value} 
    <span onClick={deleteRow}> <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></span> </li>
  )
}