import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Actions} from "../../store/actions";
import {Raider} from "../../models/raider";
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {Clazzes} from "../../models/enums/clazzes";
import Select from "@material-ui/core/Select/Select";
import {Box, MenuItem, TextField} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import {Ranks} from "../../models/enums/ranks";

export const CreateRaiderComponent: React.FC<any> = () => {
    const [name, setName] = useState<string | null>(null);
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

    const classNames: string[] = Object.keys(Clazzes).map(key => Clazzes[key])
        .filter(value => typeof value === 'string') as string[];

    const onClassSelect = (event) => {
        setClassId(parseInt(event.target.value));
    };

    const rankNames: string[] = Object.keys(Ranks).map(key => Ranks[key])
        .filter(value => typeof value === 'string') as string[];

    const onRankSelect = (event) => {
        setRank(parseInt(event.target.value));
    };

    return <>
        <div>
            <Box component="form">
            <p>Ник: <TextField id="filled-basic" label="Введите ник" variant="filled" size="small" defaultValue={null} onChange={NameChange}/></p>
            <p>Класс: <FormControl>
                <Select defaultValue={0} onChange={onClassSelect}>
                    {classNames.map((k: string) =>
                        <MenuItem value={Clazzes[k]}>{k}</MenuItem>
                    )}
                </Select>
            </FormControl>
            </p>
            <p>Звание: <FormControl>
                <Select defaultValue={-1} onChange={onRankSelect}>
                    {rankNames.map((k: string) =>
                        <MenuItem value={Ranks[k]}>{k}</MenuItem>
                    )}
                </Select>
            </FormControl></p>
            <p>id: <TextField id="filled-basic" label="Введите id" variant="filled" type="number" size="small" onChange={IdChange}/></p>
            </Box>
        </div>
        <Button variant="contained" color="primary"
                disabled={(classId == 0) || (rank == -1) || (name == "")}
                onClick={create} title={'Создать рейдера'} startIcon={<PersonAddIcon/>}>Создать
        </Button>
    </>
};