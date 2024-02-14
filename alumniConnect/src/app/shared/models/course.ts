import firebase from 'firebase/app';
import 'firebase/firestore';

export class Course {
    title: string;
    subtitle: string;
    duration: string;
    weeklyHours: string;
    programDateFrom: firebase.firestore.Timestamp;
    programDateTo: firebase.firestore.Timestamp;
    about: string;
    instructors: string;
    image: string;
    imagePath!: string;
    id: string;

    constructor(title: string, subtitle: string, duration: string, weeklyHours: string, programDateFrom: firebase.firestore.Timestamp, programDateTo: firebase.firestore.Timestamp, about: string, instructors: string, image: string, id?: string) {
        this.title = title;
        this.subtitle = subtitle;
        this.duration = duration;
        this.weeklyHours = weeklyHours;
        this.programDateFrom = programDateFrom;
        this.programDateTo = programDateTo;
        this.about = about;
        this.instructors = instructors;
        this.image = image;
        this.id = id!;
    }
}