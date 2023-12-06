import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addTodo, deleteTodo, editTodo, getTodos} from "./redux/action/todoAction";

const App = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState({});
    const todosArray = useSelector(state => state.todos);
    const edit = useSelector(state => state.todos)


    useEffect(() => {
        dispatch(getTodos(todos))
    }, []);

    const handleAddTodos = () => {
        const data = {id: todosArray?.length + 1, title: todo.title, completed: false}
        dispatch(addTodo( data))
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    const handleEdit = () => {
        dispatch(editTodo(todo))
        setTodo({})

    }

    return (
        <div>
            <input type="text"
                   value={todo.title || ''}
                   onChange={(e) => setTodo({...todo, title: e.target.value})}
            />
            <button
                onClick ={handleAddTodos}
            >Add</button>
            {
                todosArray?.map(todo =>
                    <div key={todo.id} style={{display: 'flex', gap:'10px', alignItems: 'center' }}>
                        <h1>{todo.title}</h1>
                        <input type="checkbox" checked={todo.completed}/>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                        <button onClick={() => handleEdit()}>Edit</button>
                    </div>
                )
            }
        </div>
    );
}

export default App;


const todos =[
    {
        id: 1,
        title: 'Todo 1',
        completed: false
    },
    {
        id: 2,
        title: 'Todo 2',
        completed: false
    },
    {
        id: 3,
        title: 'Todo 3',
        completed: false
    },
    {
        id: 4,
        title: 'Todo 4',
        completed: false
    }
]