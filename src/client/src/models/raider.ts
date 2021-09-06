export class Raider {
    id: number;
    classId: number;
    name: string;
    rank: number;

    constructor(id: number, name: string, classId: number, rank: number) {
        this.name = name;
        this.id = id;
        this.classId = classId;
        this.rank = rank;
    }
}