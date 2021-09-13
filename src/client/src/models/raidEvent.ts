export class Raid {
    raidDate: Date;
    description: string;
    id: number;

    constructor(raidDate: Date, description: string, id: number) {
        this.raidDate = raidDate;
        this.description = description;
        this.id = id;
    }
}
