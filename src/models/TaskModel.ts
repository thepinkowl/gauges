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

    get progress() {
        return Math.round(Math.random() * 100);
    }

    public static isValid(task: any): boolean {
        const { title, when, last } = task;
        if (!title || !when || !last) return false;
        return title !== "" && when.length > 0 && last !== "";
    }
}