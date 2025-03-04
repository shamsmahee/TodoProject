import React from 'react';
import style from './newtodo.module.css'
const NewTodo = () => {
    return (
        <div>
            <form className={style.form}>
                <div className={style["form-field"]}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id='title' name='title' />
                </div>
                <div className={style["form-field"]}>
                    <label htmlFor="desc">Description:</label>
                    <textarea type="text" id='desc' name='desc' />
                </div>
                <button type='submit'>Add Task</button>
            </form>
        </div>
    );
};

export default NewTodo;