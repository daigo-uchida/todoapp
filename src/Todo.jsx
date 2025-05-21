import React from 'react'

const Todo = ({ todo , toggleTodo }) => {
  const handleTodoClick = () =>{
    toggleTodo(todo.id);  //タスクがあっているか確認し状態を変更させる
  }


  return (
    <div>
      <label>

        <input type="checkbox" 
          defaultChecked={todo.comp} /*チェックboxの表示と初期値の表示*/
          readOnly
          onChange={handleTodoClick}
        /> 

      </label>

      { todo.name }

      </div>
  )
}

export default Todo