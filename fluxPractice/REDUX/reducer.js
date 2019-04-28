
import * as actionTypes from './actionTypes'


export const initialState ={
    counter:10,
}

export const Reducer =(state=initialState,action)=>{
switch(action.type){
case actionTypes.INCREMENT:
let addCounter = state.counter;
addCounter++;
return {...state,counter:addCounter}

case actionTypes.DECREMENT :
let minusCounter = state.counter;
minusCounter--;
return {...state,counter:minusCounter}

    default:
    return state;

}
}