import iTask from "../../../../model/interface/iTask";

export interface ModalProps {
    onSaveTask: (task: iTask) => void,
    onDeleteTask: (id: string) => void,
}

export interface ModalHandles {
    openModal: () => void,
    setTask: (task: iTask) => void,
}