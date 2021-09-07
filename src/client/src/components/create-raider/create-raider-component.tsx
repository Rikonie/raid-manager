import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Actions} from "../../store/actions";
import {Raider} from "../../models/raider";
import {ClassSelectComponent} from "../class-select/class-select-component";
import {ButtonComponent} from "../shared/button/button";
import {RankSelectComponent} from "../rank-select/rank-select-component";

export const CreateRaiderComponent: React.FC<any> = () => {
    const [name, setName] = useState<string>('');
    const [id, setId] = useState<number>(0);
    const [classId, setClassId] = useState<number>(0);
    const [rank, setRank] = useState<number>(-1);

    const dispatch = useDispatch();

    const create = () => {
        let newRaider: Raider = new Raider (id, name, classId, rank);
        console.log("new", newRaider);
        dispatch(Actions.raider.createRaider.request(newRaider))
    };

    const NameChange = (event) => {
        setName(event.currentTarget.value)
    };

    const IdChange = (event) => {
        setId(parseInt(event.currentTarget.value))
    };

    return <>
        <div>
            <p>Ник: <input type="text" placeholder="Введите ник" onChange={NameChange}/></p>
            <p>Класс: <ClassSelectComponent onSelect={(e) => {
                setClassId(e)
            }}/></p>
            <p>Звание: <RankSelectComponent defaultValue={-1} onSelect={(e) =>{
            setRank(e)
            }}/></p>
            <p>id: <input type="number" placeholder="Введите id" onChange={IdChange}/></p>
        </div>
        <ButtonComponent disabled={(classId == 0) || (rank == -1)}  onClick={create} title={'Создать рейдера'}/>
    </>
};