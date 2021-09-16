import React from "react";
import styles from "./pages-button-select-component.module.scss"
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Button from '@material-ui/core/Button';


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
            <Button variant="contained" color="primary" disabled={(page <= 1)} onClick={clickBack} startIcon={<NavigateBeforeIcon/>}>Назад</Button>
            <span className={styles.number}>{page}</span>
            <Button variant="contained" color="primary" onClick={clickOnWard} endIcon={<NavigateNextIcon>Вперед</NavigateNextIcon>}>Вперед</Button>
        </div>
    );
};



