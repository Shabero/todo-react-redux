import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, editTodo, getTodos} from "./redux/action/todoAction";
import Edit from "./Components/Edit";

function App() {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState({})
    const todoArray = useSelector(state => state.todos)

    useEffect(() => {
        dispatch(getTodos(todos))
    }, []);

    const handleAddTodo = () => {
        const data = {id: todoArray.length + 1, title: todo.title, complete: false}
        dispatch(addTodo(data))
        setTodo({})
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    const handleEdit = (todo) => {
        dispatch(editTodo(todo))
    }


    console.log(todoArray)
    return (
        <div className={'container pt-5 d-flex   flex-column justify-content-end'}>
            <div className={'change-buttons '}>
                <input  className={''}
                        type="text"
                        value={todo.title || ''}
                        onChange={(e) => setTodo({...todo, title: e.target.value})}
                />
                <button onClick={handleAddTodo} className={'btn btn-primary'}>Add</button>
            </div>
            <Edit />
            {
                todoArray.map(todo =>
                    <div key={todo.id} className={'todo-list'}>
                        <h3>{todo.title}</h3>
                            <input type="checkbox" checked={todo.complete}/>
                            <button onClick={() => handleDelete(todo.id)} className={'btn btn-danger '}>Delete</button>
                            <button onClick={() => handleEdit(todo)} className={'btn btn-warning'}>Edit</button>
                    </div>
                )
            }
        </div>
    );
}

export default App;

const todos = [
    {
        id: 1,
        title: 'Buy Milk',
        complete: false
    },
    {
        id: 2,
        title: 'Buy eggs',
        complete: false
    },
    {
        id: 3,
        title: 'Buy Milk',
        complete: false
    },
]