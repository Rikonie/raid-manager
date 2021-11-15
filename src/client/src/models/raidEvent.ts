export class Raid {
    raidDate: Date;
    description: string;
    name: string;
    id: number;

    constructor(raidDate: Date, description: string, id: number, name?: string) {
        this.raidDate = raidDate;
        this.description = description;
        this.id = id;
        this.name = name;
    }
}
