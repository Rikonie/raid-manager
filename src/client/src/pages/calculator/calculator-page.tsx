import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Item from "@material-ui/core/Grid";
import styles from ".//calculator.module.scss"
import {useAppDispatch} from "../../store/app-dispatch";
import {Actions} from "../../store/actions";
import {useSelector} from "react-redux";
import {raidersSelector} from "../../selectors/rader-selector";
import {Raider} from "../../models/raider";
import {CalculatorComponent} from "../../components/calculator-page/calculator-page-component";


export const CalculatorPage = () => {

    let raiders = useSelector(raidersSelector) as Raider[];
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(Actions.raider.raiderOpened());
    }, [dispatch]);

    return (<div className={styles.text}>
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <div>Калькулятор рейда</div>
            </Grid>
            <CalculatorComponent countGroup={4} countRaiderOnGroup={5} raiders={raiders}/>
            <Grid item xs={12}>
                <Item>Баффы</Item>
            </Grid>
        </Grid></div>)
};