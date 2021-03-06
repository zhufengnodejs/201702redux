import * as actionTypes from '../action-types';
//actionCreator 创建action
export default {
    addTodo(content){
        return {
            type:actionTypes.ADD_TODO,
            content
        }
    },
    delTodo(id){
        return {
            type:actionTypes.DEL_TODO,
            id
        }
    },
    toggle(id){
        return {
            type:actionTypes.TOGGLE_TODO,
            id
        }
    }
}

/*
{
    addTodo(content){
        dispatch({
            type:actionTypes.ADD_TODO,
            content
        })
    }
}*/
