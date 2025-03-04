import { FaTrash } from "react-icons/fa";
import style from "./Todo.module.css"
import React from 'react';

const Todo = (props) => {
    const { title, desc, id } = props.send
    return (
        <div>
            <article className={style.todo}>
                <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
                <div>
                    <button className={style.btn}>
                        <FaTrash />
                    </button>
                </div>
            </article>
        </div>
    );
};

export default Todo;