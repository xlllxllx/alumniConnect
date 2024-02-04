export class Questions {
    question: string;
    description: string;
    category: string;
    score: number;
    
    constructor(question: string, description: string, category: string, score: number) {
        this.question = question;
        this.description = description;
        this.category = category;
        this.score = score;
    }
}
