import iTask from "../../../../model/interface/iTask";
import Task from "../../../../model/task";

export interface ModalProps {
    onSaveTask: (task: iTask) => void,
    onDeleteTask: (id: string) => void,
}

export interface ModalHandles {
    openModal: () => void,
    setTask: (task: Task) => void,
}