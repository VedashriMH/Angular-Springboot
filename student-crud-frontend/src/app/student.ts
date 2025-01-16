export class Student {
    id?: number;
    name: string;
    email: string;
    course: string;

    constructor( name: string, email: string, course: string,id?:number) {
        //this.id = id;
        this.name = name;
        this.email = email;
        this.course = course;
        if (id) {
              this.id = id;  // Set id if available (for updates)
            }
    }
}
