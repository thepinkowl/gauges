export class TaskInterface {
    id: string;
    gid: string;
    name: string;
    executions: Date[];
    repeat: number;
    category: string;
}

export default class Task extends TaskInterface {
    static today = Date.now();
    static HOUR = 60 * 60 * 1000;
    static DAY = 24 * Task.HOUR;
    static WEEK = 7 * Task.DAY;

    lastDone: Date;
    progress: number;

    static createEmpty(): Task {
        return new Task({
            name: '',
            gid: '',
            id: '',
            repeat: 7,
            executions: [new Date()],
            category: '',
        });
    }

    constructor(task: TaskInterface) {
        super();
        Object.assign(this, task);
        this.computeProgress();
    }

    public computeProgress() {
        this.executions.sort((a: Date, b: Date) => (b.getTime() - a.getTime()));
        this.lastDone = this.executions[0];
        const lastDoneDuration = (Task.today - this.lastDone.getTime());
        const referenceDuration = Math.floor(Task.DAY * Math.max(this.repeat, 1) * 1.20);
        this.progress = this.rangePercentage(Math.floor((referenceDuration - lastDoneDuration) / referenceDuration * 100));
    }

    public hasCategory() {
        return this.category && this.category !== '';
    }

    private rangePercentage(value: number, min = 0, max = 100) {
        return Math.min(Math.max(value, min), max);
    }
}
