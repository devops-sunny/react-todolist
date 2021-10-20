import React, { useEffect } from 'react'
import './app.css'
import { useDispatch ,useSelector} from 'react-redux'
import { deleteTodo,  loadTodo,} from '../redux/actions'
import {useHistory} from "react-router-dom"


const Home = () => {
    let  dispatch = useDispatch()

    const {users} = useSelector(state => state.data)

    let history= useHistory();

    const handleDelete = (id) =>{
        if(window.confirm("are you sure wanted to delete"))
        dispatch(deleteTodo(id));
     }
     

    useEffect(() => {
      dispatch(loadTodo());
    },[])
    
    return (

        <>
        <div  class="mr-5 p-3">
        <button  onClick={()=>history.push("/add")}>
            ADD  TODO 
        </button>
        </div>
         
    <div class="row">
    {users.map ((row)=>(
    <div class="col-sm-4 mt-5 w-100">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{row.title}</h5>
        <p class="card-text">{row.description}</p>
        <p class="card-text">{row.date}</p>
        <p class="card-text">{row.time}</p>
        <button  class="mr-3" onClick={()=>handleDelete(row.id)}> Delete</button>
        <button onClick={()=>history.push(`edit/${row.id}`)}> Edit</button>
     </div>
    </div>
  </div>
   ))} 
 </div>
  </>
    )
}

export default Home;
