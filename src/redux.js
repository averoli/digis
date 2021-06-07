import {useState} from "react";



const [state, setState] = useState(0);

//Reducer - f, кот возвращает новое состояние, не изменяя текущее
const updateState = (state, action) => {


    if (action === 'PLUS'){
        return state + action.amount;
    } else if (action === 'MINUS'){
        return state - action.amount;
    } else {
        return state;
    }
}
//Вынесем action в отдельные переменные, чтобы каждый раз не писать объекты

const plusAction = (amount) => ({type: 'PLUS', amount})
const minusAction = (amount) => ({type: 'MINUS', amount})

 dispatch = (action) => {
state = updateState(state, action)
}

//если хотим изменить наше состояние на новое
state = updateState(state, plusAction(6));
console.log(state)

state = updateState(state, minusAction(3));
console.log(state)

state = updateState(state, {})
console.log(state)