import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import React, {useEffect} from "react";
import styles from ".//home-page.module.scss";

export const HomePage = () => {
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch(Actions.home.homeOpened({text: "piska!"}));
    // }, [dispatch]);

    return (
        <div className={styles.hello}>
            Hello im Home Page!
        </div>
    );
};