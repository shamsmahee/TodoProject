import { FaTrash } from "react-icons/fa";

import React from 'react';

const Todo = (props) => {
    const { title, desc } = props.send
    return (
        <div>
            <article>
                <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
                <div>
                    <button>
                        <FaTrash />
                    </button>
                </div>
            </article>
        </div>
    );
};

export default Todo;