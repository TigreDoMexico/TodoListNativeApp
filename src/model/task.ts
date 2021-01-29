import { BLUE } from '../ui/consts/colors';
import { createGuid } from '../utils/utils';
import iTask from './interface/iTask';

export default class Task implements iTask {
    private _id: string;
    private _name: string;
    private _color: string;

    isDone: boolean;

    get id(){
        return this._id
    }

    get name(): string {
        return this._name
    }

    set name(value: string){
        if(value)
            this._name = value;
    }

    get color(): string {
        return this._color
    }

    set color(_value: string){
        if(_value)
            this._color = _value;
    }

    constructor(name: string){
        this._id = createGuid();
        this._name = name ? name : '';
        this._color = BLUE
        this.isDone = false;
    }
}