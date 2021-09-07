import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Actions} from "../../store/actions";
import {ButtonComponent} from "../shared/button/button";

export class Raid {
    data: Date;
    description: string;

    constructor(data: Date, description: string) {
        this.data = data;
        this.description = description;
    }
}

export const CreateRaidComponent: React.FC<any> = () => {
    const [data, setData] = useState<Date>(new Date());
    const [description, setDescription] = useState<string>('');

    const dispatch = useDispatch();
    const create = () => {
        let newRaid: Raid = new Raid(data, description);
        console.log("создаем событие", newRaid);
        dispatch(Actions.home.createRaid(newRaid))
    };

    const DataChange = (event) => {
        console.log(event.currentTarget.value)
        setData(new Date(event.target.value))
    };

    const DescriptionChange = (event) => {
        setDescription(event.target.value)
    };

    return (
        <>
            <div>
                <p>Дата: <input type="Date" onChange={DataChange}/></p>
                <p>Описание: <input type="string" onChange={DescriptionChange}/></p>
            </div>
            <div>
                {data?.toDateString()}
            </div>
            <div>
                {description}
            </div>
            <ButtonComponent onClick={create} title={'Создать событие'}/>
        </>
    )
};