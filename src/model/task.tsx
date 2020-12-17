export default class Task {
    name: string;
    isDone: boolean;
    id: number;

    constructor(name: string){
        this.name = name;
        this.isDone = false;
        this.id = Math.random();
    }
}