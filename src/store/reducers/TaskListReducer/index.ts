import { ActionType, iTaskListReducer } from "./types";

const initialState: iTaskListReducer = {
    tasks: [],
}

export const TaskListReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        default:
          return state;
      }
}