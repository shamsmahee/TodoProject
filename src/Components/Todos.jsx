import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    console.log(props.todos);

    return (
        <div>
            <section>
                {
                    props.todos.map((todo) => <Todo send={todo} key={todo.id} />)
                }
            </section>
        </div>
    );
};

export default Todos;