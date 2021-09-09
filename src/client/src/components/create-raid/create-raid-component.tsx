import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Actions} from "../../store/actions";
import {ButtonComponent} from "../shared/button/button";
import {Raid} from "../../models/raidEvent";

export const CreateRaidComponent: React.FC<any> = () => {
    const [raidDate, setRaidDate] = useState<Date | null>(null);
    const [description, setDescription] = useState<string | null>(null);
    const [raidHours, setRaidHours] = useState<number | null>(null);
    const [raidMinutes, setRaidMinutes] = useState<number | null>(null);
    const [raidDateTimeComputed, setRaidDateTimeComputed] = useState<Date|null>(null);
    const [showDescription, setShowDescription] = useState<boolean>(false);

    const dispatch = useDispatch();
    const create = () => {
        let d = new Date(raidDate.setHours(raidHours, raidMinutes));
        setRaidDateTimeComputed(d);
        let newRaid: Raid = new Raid(d, description);
        console.log("создаем событие", newRaid);
        dispatch(Actions.raidEvent.createRaid.success(newRaid));
        setShowDescription(true);
    };

    const DataChange = (event) => {
        setRaidDate(new Date(event.target.value))
    };

    const DescriptionChange = (event) => {
        setDescription(event.target.value)
    };

    const HoursChange = (event) => {
        setRaidHours(parseInt(event.target.value))
    };

    const MinutesChange = (event) => {
        setRaidMinutes(parseInt(event.target.value))
    };

    return (
        <>
            <div>
                <p>Дата: <input type="Date" onChange={DataChange}/></p>
                <p>Час: <select onChange={HoursChange}>
                    {["Не выбрано",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map((n:number) =>
                        <option value={n}>{n}</option>)}
                </select>
                </p>
                <p>Минуты: <select onChange={MinutesChange}>
                    {["Не выбрано",5,10,15,20,25,30,35,40,45,50,55].map((n:number) =>
                        <option value={n}>{n}</option>)}
                </select>
                </p>
                <p>Описание: <input type="string" onChange={DescriptionChange}/></p>
            </div>
            <div>
                {raidDateTimeComputed?.toString()}
            </div>
            <div>
                {showDescription ? description: null}
            </div>
            <ButtonComponent disabled={(description == null) ||
            (raidDate == null) ||
            (raidMinutes == null) ||
            (raidHours == null)} onClick={create} title={'Создать событие'}/>
        </>
    )
};