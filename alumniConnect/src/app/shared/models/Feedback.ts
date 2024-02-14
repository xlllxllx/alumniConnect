export class Feedback {
    question: string;
    description: string;
    category: string|undefined; 
    id: string;
    
    constructor(question: string, description: string, category: string, id?: string) {
        this.question = question;
        this.description = description;
        this.category = category;
        this.id = id!;
    }
}
