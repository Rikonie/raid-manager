import React from "react";
import styles from '../pagination/button.module.scss'


class pageProps {
    page: number;
    pageChange: (a:number) => void
}
export const PageComponent: React.FC<pageProps> = ({page, pageChange}) => {
    let clickBack = (a:any) => {
        pageChange (page-1)

    };

    let clickOnWard = (a:any) => {
        pageChange (page+1)
    };

    return (
    <div>
            <button className={styles.button} disabled={(page <= 1)} onClick={clickBack}>Назад</button>
            {page}
            <button className={styles.button} onClick={clickOnWard}>Вперед</button>
        </div>
    );
};



