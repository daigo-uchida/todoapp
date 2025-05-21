import { useState,useRef} from 'react';
import Todolist from './Todolist';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [todos, setTodo] = useState([]);  //usestuteはオブジェクトの初期値を設定する関数


const TodoNameRef = useRef(); //変数名を付けた場所から入力内容を取得


const  handleAppTodo = () =>{
  //タスクを追加する関数
  const taskname = TodoNameRef.current.value;
  if(taskname ==="") return;
  setTodo((prevTodos) => { //settodosを使うと
    return [...prevTodos,{ id : uuidv4(), name : taskname,comp : false}] 
  });
  TodoNameRef.current.value = null;
};

const toggleTodo =(id) => {
  //タスクの完了状態を変更する関数
const newTodos = [...todos]; //todosを直接変更しないようにコピーを作り変更する
const toggleTodo = newTodos.find((todo) => todo.id === id); //todoにある引数idと一致するtodo.idのみ取得する
toggleTodo.comp =!toggleTodo.comp; //toggleTodoにあるcmpを反転させる
setTodo(newTodos);
};

const hgandleClear = () => {
  const newTodos = todos.filter((todo) => !todo.comp);
  setTodo(newTodos);
};


  return (
    <>
    <p>hello React</p>
    <Todolist todos={todos} toggleTodo={toggleTodo}/> {/*todosという名前でオブジェクトであるtodosをtodolistに渡している*/}
    <input type="text" ref={TodoNameRef}/>
    <button onClick={handleAppTodo}>タスクを追加</button>
    <button onClick={hgandleClear}>完了したタスクの削除</button>
    <div>残りのタスク：{todos.filter((todo) => !todo.comp).length}</div> 
    {/*filterはオブジェクトから状態が一致したものだけを取りだす関数*/}
    </>
  )
};
export default App 
//プロジェクト内における主要なファイルであることを示す(import App from './App.jsx'などと書けるようになる)
//ようはどこからでも使えるようにする
