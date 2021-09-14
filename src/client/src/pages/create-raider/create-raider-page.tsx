import React from "react";
import {CreateRaiderComponent} from "../../components/create-raider/create-raider-component";
import {useSelector} from "react-redux";
import {createRaiderStatusSelector} from "../../selectors/rader-selector";
import {Actions} from "../../store/actions";
import {useAppDispatch} from "../../store/app-dispatch";
import Modal from "react-modal";
import styles from "../guild/guild-page.module.scss";
import Button from '@material-ui/core/Button';

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

export const CreateRaiderPage = () => {

    const dispatch = useAppDispatch();
    let createRaiderStatus = useSelector(createRaiderStatusSelector);
    let clear = () => {
        dispatch(Actions.raider.clearCreateRaider());
    };

    return (
        <div>
            <CreateRaiderComponent/>
            <Modal style={customStyles} onRequestClose={clear} isOpen={!!createRaiderStatus}>
                <div className={styles.error}>{createRaiderStatus}</div>
                <Button variant="contained" color="primary" onClick={clear}>Ok</Button>
            </Modal>
        </div>)};