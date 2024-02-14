export class UserProfile {
    username: string;
    contact: number;
    email: string;
    resume?: string;
    employment?: boolean;
    id: string;

    constructor(username: string, contact: number, email: string, emplyoment?: boolean,id?: string) {
        this.username = username;
        this.contact = contact;
        this.email = email;
        this.employment = emplyoment;
        this.id = id;
    }
}