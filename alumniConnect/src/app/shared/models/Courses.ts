

export class Courses {
    coursename: string;
    duration: number;
    image: string;
    id: string;

    constructor(coursename: string, duration: number, image: string, id?: string) {
        this.coursename = coursename;
        this.duration = duration;
        this.image = image;
        this.id = id!;
    }
}


