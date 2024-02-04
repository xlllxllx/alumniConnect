

export class Courses {
    title: string;
    subtitle: string;
    duration: string;
    weeklyHours: string;
    programDateFrom: string;
    programDateTo: string;
    about: string;
    instructors: string;
    image: string;
    imagePath!: string;
    id: string;
    

    constructor(title: string, subtitle: string, duration: string, weeklyHours: string, programDateFrom: string, programDateTo: string, about: string, instructors: string, image: string, id: string) {
        this.title = title;
        this.subtitle = subtitle;
        this.duration = duration;
        this.weeklyHours = weeklyHours;
        this.programDateFrom = programDateFrom;
        this.programDateTo = programDateTo;
        this.about = about;
        this.instructors = instructors;
        this.image = image;
        this.id = id;
    }
}


