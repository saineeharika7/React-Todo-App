import  { useState , useEffect} from 'react';
import TodoList from "./components/TodoList"
import { Button, FormControl,  TextField } from '@mui/material'
import db from './Firebase';
import {  onSnapshot, collection, orderBy, query, doc, addDoc, updateDoc, serverTimestamp} from "firebase/firestore";
import "./App.css"
const q=query(collection(db,'todos'),orderBy('timestamp','desc'));

function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');

  

  useEffect(() => {
    onSnapshot(q,(snapshot)=>{
    setTodos(snapshot.docs.map(doc=>({
    id: doc.id,
    item: doc.data()
    })))
    })
    },[input]);


 
    const addTodo=(e)=>{
      e.preventDefault();
      addDoc(collection(db,'todos'),{
      todo:input || "",
      timestamp: serverTimestamp()
      })
      setInput('')
      };
      

      
  return (
    <div className="App">
     <h1>Things Todo ✅</h1>
     <form>
      <FormControl className ="form">
        <TextField id="outlined-basic" label="Write a Todo" variant="outlined" style={{margin:"0px 5px"}} size="small" value ={input || ""} onChange={e => setInput(e.target.value)} />
      </FormControl>
      
      <Button disabled ={!input}    
               type ="submit"
               variant="contained" 
               color ="primary" 
               onClick={addTodo}>Add Todo
      </Button>
      </form>

     <ul>
     {todos.map(item=> <TodoList key={item.id} arr={item} />)}
     </ul>
     
    </div>
  );
}

export default App;
