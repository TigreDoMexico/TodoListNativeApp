import iTask from "../../../model/interface/iTask";
import { ActionType, iTaskListReducer } from "./types";

export const ADD_NEW = "TaskListReducer/ADD_NEW"
const CHANGE_STATUS = "TaskListReducer/CHANGE_STATUS"
const UPDATE = "TaskListReducer/UPDATE"
const DELETE = "TaskListReducer/DELETE"

const initialState: iTaskListReducer = {
    tasks: [],
}

export const TaskListReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_NEW:
            return {...state, tasks: [...state.tasks, action.task]}
        case CHANGE_STATUS:
            let task = state.tasks.filter(el => el.id === action.taskId)[0];

            task.isDone = !task.isDone

            return {...state, tasks: state.tasks.map((item: iTask) => item.id === task.id ? task : item)}
        case UPDATE:
            return {...state, tasks: state.tasks.map((item: iTask) => item.id === action.task.id ? action.task : item)}
        case DELETE:
            return {...state, tasks: state.tasks.filter((item: iTask) => item.id !== action.taskId)}
        default:
            return state;
      }
}

export const addNewTask = (newTask: iTask) => ({ type: ADD_NEW, task: newTask })
export const changeTaskStatus = (taskId: string) => ({type: CHANGE_STATUS, taskId: taskId})
export const updateTask = (updateTask: iTask) => ({ type: UPDATE, task: updateTask })
export const deleteTask = (taskId: string) => ({ type: DELETE, taskId: taskId })
