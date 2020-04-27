const LAMBDA = 1.0;
export class TaskModel {
    id: number;
    title: string;
    last: Date;
    when: number[]

    constructor(raw: any) {
        this.id = raw.id;
        this.title = raw.title;
        this.last = new Date(raw.last);
        this.when = raw.when;
    }

    fulfilment = (x, r) => {
        return 100 - (100 / (1 + Math.exp(LAMBDA * (r - x))))
    }

    get progress() {
        const now = new Date();
        const daysAgo = (now.getTime() - this.last.getTime()) / 1000 / 60 / 60 / 24;
        
        return this.fulfilment(daysAgo, 1 / this.frequency);
    }

    get frequency() {
        return this.when.length / 7;
    }

    public static isValid(task: any): boolean {
        const { title, when, last } = task;
        if (!title || !when || !last) return false;
        return title !== "" && when.length > 0 && last !== "";
    }
}