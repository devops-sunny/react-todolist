import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux'
import { addTodo, } from '../redux/actions';
import "./app.css"

const Add = () => {

   const [state, setState] = useState({
    title:"",
    description:"",
    date:"",
    time:""
   })

   const [error,setError] =useState("");
   

   let  dispatch = useDispatch()

   let history= useHistory();

   const {title, description,date ,time } =state;

  const handleInputChange =(e) =>{
      
    let {name ,value} =e.target;

      setState({...state,[name]:value});
  } 

  const handleSubmit=(e)=>{
     e.preventDefault();
    if(!title || ! description ||!date|| !time  ){
        setError("plz filed data")
    }else{
        dispatch(addTodo(state))
        history.push("/");
        setError("")
    }
  }

  return (
        <>
        <div class="mr-5 p-3">
        <button onClick={()=>history.push("/")}class="btn btn-primary">show  card</button>
    
        </div>
        {error && <h2 style={{colour:"red"}}>{error}</h2>}
        <div>




 <form   onSubmit={handleSubmit}>
    <div class="mb-3">
    <label for="title" class="form-label">title</label>
    <input type="text" id="title" value={title}  onChange={handleInputChange} name="title"/>  <br/> <br/>
   </div>

   <div class="mb-3">
    <label for="description" class="form-label">description</label>
    <textarea id="description" value={description} onChange={handleInputChange} name="description"> </textarea>
   </div>
  
   <div class="mb-3">
   <label for="birthday">date:</label>
   <input type="date" id="date" value={date}  onChange={handleInputChange} name="date"/> 
   </div>
  
   <div class="mb-3">
   <label for="time">Choose a time </label>
   <input type="time" id="time"  value={time} onChange={handleInputChange} name="time"/>  
   </div>
   <button type="submit" value="Submit"class="btn btn-primary">Submit</button>

    </form> 
        </div>
        </>
    )
}

export default Add
