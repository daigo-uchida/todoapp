import React from 'react';
import Todo from './Todo';

function Todolist({ todos , toggleTodo }){      //渡されたtodosを表示 
       return todos.map(( todo ) => <Todo todo={ todo } key={todo.id} toggleTodo={toggleTodo}/>); //mapで一つずつ取り出す
};
export default Todolist;