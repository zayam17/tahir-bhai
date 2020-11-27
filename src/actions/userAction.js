import * as types from './actionTypes';
import axios from 'axios';

export function loadUsersSuccess(users){
    return{
        type:types.LOAD_USERS_SUCCESS, users
    };
}

export function addUserSuccess(users){
    return{
        type:types.ADD_USER_SUCCESS, users
    };
}

export function loadUsers(){
    return function(dispatch){
        return axios.get('https://jsonplaceholder.typicode.com/users').then(users =>{
            dispatch(loadUsersSuccess(users))
        }).catch(error => {
            throw(error);
        });
    };  
}

/*
export const loadUsers =()=> async dispatch => {
    const response =await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type:types.LOAD_USERS_SUCCESS,
        payload:response.data})
};

export function addUser(user){
    return function(dispatch,getState){
        return axios.post('https://jsonplaceholder.typicode.com/users')
        .then(users=>{
            dispatch(addUserSuccess(users));
        }).catch(error =>{
            throw(error);
        });
    };
}
*/

export const addUser =(users)=>async dispatch => {
    const response =await axios.get('https://jsonplaceholder.typicode.com/users',users);
    dispatch({
        type:types.LOAD_USERS_SUCCESS,
        users:response})
};

/*
export function deleteUser(user){
    return function(dispatch,getState){
        return UserApi.deleteUser(id)
        .then(user=>{
            dispatch(deleteUserSuccess(id));
        }).catch(error =>{
            throw(error);
        });
    };
}

/*
let currentID=0;
export function addUser(user){
    return{
        type:actionTypes.ADD_USER,
        id: currentID++,
        name:user.name,
        
    };
}
export function deleteUser(id){
   return{
        type:actionTypes.DELETE_USER,
   
   };
   
}
*/