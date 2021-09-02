import React from "react";

class raiderPageProps {
    page: number;
    pageChange: (a:number) => void
}

export const RaiderPageComponent: React.FC<raiderPageProps> = ({page, pageChange}) => {
    let clickBack = (a: any) => {
        pageChange(page - 1)
    };

    let clickOnWard = (a: any) => {
        pageChange(page + 1)
    };

    return (
        <div>
            <button disabled={(page <= 1)} onClick={clickBack}>Назад</button>
            {page}
            <button onClick={clickOnWard}> Вперед</button>
        </div>
    );
};