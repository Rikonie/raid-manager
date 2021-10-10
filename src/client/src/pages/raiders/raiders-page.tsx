import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {createRaiderStatusSelector, raiderCountSelector, raidersSelector} from "../../selectors/rader-selector";
import {Raider} from "../../models/raider";
import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import {RaidersComponent} from "../../components/raiders/raiders-page-component";
import Button from '@material-ui/core/Button';
import {Box, MenuItem, Modal, Paper, TableContainer, Typography} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import {style} from "../../styles/modal";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export const RaidersPage = () => {

    let [page, setPage] = useState(1);
    let [pageSize, setPageSize] = useState(10);

    let raiders = useSelector(raidersSelector) as Raider[];
    let countRaiders = useSelector(raiderCountSelector) as number;
    let deleteRaiderStatus = useSelector(createRaiderStatusSelector);

    let selectArray = [10, 20, 30, 40, 50];

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(Actions.raider.raiderOpened())
    }, [dispatch]);

    let pageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(Actions.raider.loadRaiders.request({page: value, size: pageSize}));
        setPage(value);
    };
    let deleteRaider = (raider) => {
        dispatch(Actions.raider.deleteRaider.request(raider.id))
    };
    let clear = () => {
        dispatch(Actions.raider.clearCreateRaider());
    };
        let onSelect = (event) => {
            dispatch(Actions.raider.loadRaiders.request({page: 1, size: (parseInt(event.target.value))}
                )
            );
            console.log(event.target.value);
            setPageSize(parseInt(event.target.value));
            setPage(1);
        };

        return (
            <TableContainer component={Paper}>
                <Pagination count={(Math.floor(countRaiders / pageSize) + 1)} color="primary" page={page}
                            onChange={pageChange}/>
                <FormControl>
                    <InputLabel id="count">Количество</InputLabel>
                    <Select defaultValue={10} onChange={onSelect}
                            labelId="count"
                            id="count" label="Количество">
                        {(selectArray.map((n: number) =>
                            <MenuItem value={n}>{n}</MenuItem>))}
                    </Select>
                </FormControl>
                <div>Рейдовый состав</div>
                {raiders ? <div>
                    <RaidersComponent raiders={raiders} deleteRaiderClick={deleteRaider}/>
                </div> : <div>loading</div>}
                <Modal onClose={clear} open={!!deleteRaiderStatus}
                       aria-labelledby="modal-modal-title"
                       aria-describedby="modal-modal-description">
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">{deleteRaiderStatus}</Typography>
                    <Button variant="contained" color="primary" onClick={clear}>Ok</Button>
                    </Box>
                </Modal>
            </TableContainer>
        );
    };