export class ActivityComments {
    title: string;
    id: string;

    constructor(title: string, id?: string) {
        this.title = title;
        this.id = id!;
    }
}