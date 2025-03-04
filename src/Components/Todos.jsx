import React from 'react';
import Todo from './Todo';
import style from './Todos.module.css'

const Todos = (props) => {
    console.log(props.todos);

    return (
        <div>
            <section className={style.todos}>
                {
                    props.todos.map((todo) => <Todo send={todo} key={todo.id} />)
                }
            </section>
        </div>
    );
};

export default Todos;