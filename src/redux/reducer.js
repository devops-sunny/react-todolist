import  * as types  from "./actionType"

const initialState ={ 
    users:[],                          
    user :{},                          
    loading :true
}

const todoReducers =(state = initialState,action) =>{
    switch(action.type){
        case types.GET_Todo:
            return{
                ...state,
                users:action.payload,
                loading :false
            };
            case types.DELETE_Todo:
            return{
                ...state,
                loading :false
            };
            case types.ADD_Todo:
            return{
                ...state,
                 loading :false
            };
            case types.GET_SINGLE_Todo:
             return{
                    ...state,
                 user:action.payload,
                 loading :false
            };

            case types.UPDATE_Todo:
            return{
                  ...state,
                  loading :false
            };        
        default:
         return state;
    }
}

export default  todoReducers;