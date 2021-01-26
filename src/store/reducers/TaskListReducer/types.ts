import iTask from "../../../model/interface/iTask";

export interface iTaskListReducer {
    tasks: Array<iTask>
}

export interface ActionType {
    type: string
}