import React,{ useState } from 'react'
import Count from './count.jsx';
import './App.css'
const App=()=>{

  // const [ num , setNum ]=useState(0);
  // const azalt=()=> {
  //   setNum(num-1);
  // }
  // const coxalt=()=> {
  //   setNum(num+1);
  // }

  // return (
  //   <div>
  //     <Count number={num}/>
  //     <button onClick={azalt}>azalt</button>
  //     <button onClick={coxalt}>coxalt</button>
  //   </div>
  // );


const [todos,setTodos]=useState([
  {id:0,todo:"Derse Bax",isDone:true},
  {id:2,todo:"Dersi yaz",isDone:false}
]);
  const changeDone=(TodoId)=>{
    const newTodos=todos.map((todo)=>{
      if(todo.id===TodoId){
        todo.isDone=!isDone;
      }
      return todo;
    });
    
    setTodos(newTodos);

  };
  return(
    <div>
      <ul>
          {todos.map(({id,todo,isDone})=>{
            return (
        
          <li key={id}
            style={{
              backgroundColor:isDone ? 'green' :'red',
              color:"white",
              display:'flex',
              gap:"30px",
              padding:"10px",
              margin:"15px",
              fontSize:"20px",
            }}>{todo}
            <button onClick={()=>changeDone(id)}>{isDone?'undone':'done'}</button>
            
            </li>
            )
          })}
      </ul>
    </div>
  );

};

export default App
