import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import React from "react";
import styles from ".//home-page.module.scss";

export const HomePage = () => {
    const dispatch = useAppDispatch();


    const test = () => {
        dispatch(Actions.home.homeOpened({text: "piska!"}));
    };

    return (
        <div className={styles.hello}>
            Hello im Home Page!
            <button onClick={test}>Click me</button>
        </div>
    );
};