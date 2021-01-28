import { Action } from "redux";
import iTask from "../../../model/interface/iTask";

export interface iTaskListReducer {
    tasks: Array<iTask>
}

export interface ActionType extends Action {
    type: string,
    taskId: string
    task: iTask
}