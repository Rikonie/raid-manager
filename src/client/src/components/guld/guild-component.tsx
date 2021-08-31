import React from "react";

class guildProps {
    name: string;
    id: number;
    realm: string;
    faction: string
}

export const GuildComponent: React.FC<guildProps> = ({name, id, realm, faction}) => {
    return (
        <span>Гильдия: {name}, фракция: {faction}, реалм: {realm}, id: {id}</span>
    )
}