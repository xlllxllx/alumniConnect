export class Activity {
    title: string;
    count: number;
    id: string;

    constructor(title: string, count: number, id?: string) {
        this.title = title;
        this.count = count;
        this.id = id!;
    }
}