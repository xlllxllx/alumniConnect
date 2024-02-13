export class UserProfile {
    username: string;
    contact: number;
    email: string;
    resume: string;

    constructor(username: string, contact: number, email: string, resume?: string) {
        this.username = username;
        this.contact = contact;
        this.email = email;
        this.resume = resume!;
    }
}