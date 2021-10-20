import  * as types  from "./actionType"
import axios from "axios"

const getTodo =(users) =>({
   type:types.GET_Todo,
    payload :users,

});

const TodoDeleted =() =>({
   type:types.DELETE_Todo,
}); 



const TodoAdded =() =>({
    type:types.ADD_Todo,
 });

 const TodoUpdated =() =>({
    type:types.UPDATE_Todo,
 });

 const getSingleTodo =(user) =>({
    type:types.GET_SINGLE_Todo,
    payload :user,

 });
 
export  const loadTodo =() =>{
     return function (dispatch){
         axios.get("http://localhost:5000/user").then((resp)=>{
             dispatch(getTodo(resp.data))
         })
         .catch((error)=>console.log(error));
     }
}


export  const deleteTodo = (id) =>{
    return function (dispatch){
        axios.delete(`http://localhost:5000/user/${id}`).then((resp)=>{
            console.log(resp);
            dispatch(TodoDeleted());
            dispatch(loadTodo());
        })
        .catch((error)=>console.log(error));
    }
}

export  const addTodo =(user) =>{
    return function (dispatch){
        axios.post("http://localhost:5000/user",user).then((resp)=>{
            dispatch(TodoAdded(resp.data))
            dispatch(loadTodo());
        })
        .catch((error)=>console.log(error));
    }
}



export  const SingleTodo =(id) =>{
    return function (dispatch){
        axios.get(`http://localhost:5000/user/${id}`).then((resp)=>{
            dispatch(getSingleTodo(resp.data))
        })
        .catch((error)=>console.log(error));
    }
}


export  const updateTodo =(user ,id) =>{
    return function (dispatch){
        axios.put(`http://localhost:5000/user/${id}`,user).then((resp)=>{
            dispatch(TodoUpdated())
        })
        .catch((error)=>console.log(error));
    }
}
