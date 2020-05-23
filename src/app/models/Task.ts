export class TaskInterface {
    id: number;
    title: string;
    when: number[];
    executions: Date[];
}

export default class Task extends TaskInterface {
    static today = Date.now();
    static WEEK = 7 * 24 * 60 * 60 * 1000;

    static parseTasks(tasks: TaskInterface[]): Task[] {
        return tasks.map((t: TaskInterface) => new Task(t));
    }

    lastDone: Date;
    progress: number;

    constructor(task: TaskInterface) {
        super();
        Object.assign(this, task);
        this.executions.sort((a: Date, b: Date) => (b.getTime() - a.getTime()));
        this.lastDone = this.executions[0];
        this.computeProgress();
    }

    private computeProgress() {
        this.progress = Math.floor((Task.today - this.lastDone.getTime()) / Task.WEEK * 100);
    }
}