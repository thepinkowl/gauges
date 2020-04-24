export class Day {
    id: number;
    symbol: string;

    constructor(id, symbol) {
        this.id = id;
        this.symbol = symbol;
    }
}

export const WeekDays = [
    new Day(1, "M"),
    new Day(2, "T"),
    new Day(3, "W"),
    new Day(4, "T"),
    new Day(5, "F"),
    new Day(6, "S"),
    new Day(0, "S"),
];