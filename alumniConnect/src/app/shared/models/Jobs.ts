
export class Jobs {
    jobname: string;
    salary: number;
    description: string;
    image: string;
    id: string;

    constructor(jobname: string, salary: number, description: string, image: string, id?: string) {
        this.jobname = jobname;
        this.salary = salary;
        this.description = description;
        this.image = image;
        this.id = id!;
    }
}