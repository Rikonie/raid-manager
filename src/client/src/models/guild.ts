export class Guild {
    id: number;
    faction: string;
    name: string;
    realm: string;

    constructor(id: number, guildFaction: string, guildName: string, guildRealm: string) {
        this.faction = guildFaction;
        this.name = guildName;
        this.realm = guildRealm;
        this.id = id;
    }

}