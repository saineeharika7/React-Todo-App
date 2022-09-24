import { List, ListItem, ListItemAvatar, ListItemText, Modal } from '@mui/material'
import DeleteIcon  from '@mui/icons-material/Delete';
import { Button} from '@mui/material'

import React ,{useState} from 'react'
import "./TodoList.css"
import  db  from '../Firebase.js';
import { doc, deleteDoc , updateDoc,collection} from "firebase/firestore";


const TodoList=({arr})=>{
    const[open,setOpen] = useState(false);
    const[input ,setInput] = useState();
    
  const updateTodo  = async (e) => {
    e.preventDefault();
        const todoRef = doc(db, "todos", arr.id);
        await updateDoc(todoRef, {
          todo: input
        }, { merge: true});
    };


    
 
  return (
    <>
    <Modal
    open={open}
    onClose={e => setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
      <div>
      <h1>I am a model</h1>
      <input placeholder={arr.item.todo} value={input} onChange={event => setInput(event.target.value)} />
      <Button onClick ={updateTodo}>Update Todo</Button>
</div>
</Modal>
   <List className = "todo__list" >
  <ListItem>
  <ListItemAvatar />
  <ListItemText primary={arr.item.todo}  />
  </ListItem>
  <DeleteIcon fontSize="large" style={{opacity:0.9}} onClick={() => {deleteDoc(doc(db,'todos',arr.id))}} />  
  <button onClick ={e => setOpen(true)}>✍🏻</button>

  </List>
 </>
  )
  
}

export default TodoList;
