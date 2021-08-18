import React from "react";
import styles from ".//authorization.module.scss";
import { Link } from "react-router-dom";

export const AuthorizationComponent = () => {
    return (
        <div className={styles.authorization}>
        <Link to="/authorization">Авторизация</Link>
        </div>
    );
}