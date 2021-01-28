import { BLUE } from '../ui/consts/colors';
import { createGuid } from '../utils/utils';
import iTask from './interface/iTask';

export default class Task implements iTask {
    name: string;
    isDone: boolean;
    id: string;
    color: string;

    constructor(name: string){
        this.name = name;
        this.isDone = false;
        this.id = createGuid();
        this.color = BLUE
    }
}