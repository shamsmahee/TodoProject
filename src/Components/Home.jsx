import React, { useState } from 'react';

import { v4 as uuidv4 } from "uuid";

import Todos from './Todos';
import style from './Home.module.css';
import NewTodo from './NewTodo';



const Home = () => {
    const [todos, setTodos] = useState([])
    const handleAddtodo = (todo) => {
        setTodos((prevtodos) => {
            return [...prevtodos, { id: uuidv4(), todo }]
        })
    }

    return (
        <div className={style.container}>
            <h1 className='intro'>Daily Task</h1>
            <NewTodo onAddtodo={handleAddtodo} />
            <Todos todos={todos} />
        </div>
    );
};

export default Home;