import firebase from 'firebase/app';
import 'firebase/firestore';

export class courseRequest {
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
    count: number;
    id: string;

    constructor(title: string, subtitle: string, duration: string, weeklyHours: string, programDateFrom: firebase.firestore.Timestamp, programDateTo: firebase.firestore.Timestamp, about: string, instructors: string, image: string, count: number, id?: string) {
        this.title = title;
        this.subtitle = subtitle;
        this.duration = duration;
        this.weeklyHours = weeklyHours;
        this.programDateFrom = programDateFrom;
        this.programDateTo = programDateTo;
        this.about = about;
        this.instructors = instructors;
        this.image = image;
        this.count = count;
        this.id = id!;
    }
}