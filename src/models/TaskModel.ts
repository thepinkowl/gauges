const LAMBDA = 1.0;

export const dateToString = date => {
    return date.toISOString().split("T")[0];
};

export class TaskModel {
    id: number;
    title: string = '';
    when: number[] = [];
    executions: Date[];

    constructor() {
        this.executions = [new Date()];
    }

    fulfilment = (x, r) => {
        return 100 - (100 / (1 + Math.exp(LAMBDA * (r - x))))
    }

    get progress() {
        const now = new Date();
        const daysAgo = (now.getTime() - this.mostRecentExecution.getTime()) / 1000 / 60 / 60 / 24;

        return this.fulfilment(daysAgo, 1 / this.frequency);
    }

    get frequency() {
        return this.when.length / 7;
    }

    get mostRecentExecution() {
        return this.executions[0];
    }

    public static isValid(raw: any): boolean {
        const { title, when } = raw;
        if (!title || !when ) return false;
        return title !== "" && when.length > 0;
    }

    public static fromRaw(raw: any): TaskModel {
        const out = new TaskModel();
        out.id = raw.id;
        out.title = raw.title;
        out.executions = raw.executions.map(text => new Date(text)).sort((a,b)=> b - a);
        out.when = raw.when;
        return out;
    }
}
