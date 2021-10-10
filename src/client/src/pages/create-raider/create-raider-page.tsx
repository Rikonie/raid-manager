import React from "react";
import {CreateRaiderComponent} from "../../components/create-raider/create-raider-component";
import {useSelector} from "react-redux";
import {createRaiderStatusSelector} from "../../selectors/rader-selector";
import {Actions} from "../../store/actions";
import {useAppDispatch} from "../../store/app-dispatch";
import Button from '@material-ui/core/Button';
import {Box, Modal, Typography} from "@material-ui/core";
import {style} from "../../styles/modal";

export const CreateRaiderPage = () => {

    const dispatch = useAppDispatch();
    let createRaiderStatus = useSelector(createRaiderStatusSelector);
    let clear = () => {
        dispatch(Actions.raider.clearCreateRaider());
    };

    return (
        <div>
            <CreateRaiderComponent/>
            <Modal onClose={clear} open={!!createRaiderStatus}
                   aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description">
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">{createRaiderStatus}</Typography>
                <Button variant="contained" color="primary" onClick={clear}>Ok</Button>
                </Box>
            </Modal>
        </div>)};