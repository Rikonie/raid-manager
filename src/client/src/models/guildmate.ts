class GuildMate {
    id: number;
    classId: number;
    name: string;
    rank: number;

    constructor(id: number, classId: number, name: string, rank: number) {
        this.name = name;
        this.id = id;
        this.classId = classId;
        this.rank = rank;
    }
}