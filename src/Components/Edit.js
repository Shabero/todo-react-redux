import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Edit = () => {
    const [editTitle, setEditTitle] = useState('')
    const todo = useSelector(s => s.editTodo)
    const dispatch = useDispatch()
    return (
        <div>
            <input
                onChange={(e) => setEditTitle(e.target.value)}
                defaultValue={todo.title}
                type="text"/>
            <button className={'btn btn-success'}>Save</button>
        </div>
    );
};

export default Edit;