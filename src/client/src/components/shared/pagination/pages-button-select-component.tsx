import React from "react";
import styles from "./pages-button-select-component.module.scss"
import {ButtonComponent} from "../button/button";


class pageProps {
    page: number;
    pageChange: (a: number) => void
}

export const PageComponent: React.FC<pageProps> = ({page, pageChange}) => {
    let clickBack = () => {
        pageChange(page - 1)

    };

    let clickOnWard = () => {
        pageChange(page + 1)
    };

    return (
        <div>
            <ButtonComponent disabled={(page <= 1)} onClick={clickBack}>Назад</ButtonComponent>
            <span className={styles.number}>{page}</span>
            <ButtonComponent onClick={clickOnWard}>Вперед</ButtonComponent>
        </div>
    );
};



