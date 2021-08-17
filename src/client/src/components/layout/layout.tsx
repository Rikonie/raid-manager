import React from "react";
import styles from '../layout/layout.module.scss'
export interface LayoutComponentProps {
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({children}) => {
    const per = 1234;

    return (
        <>
            <div className="App">
                <div className={styles.header}> Header here </div>
                <main>{children}</main>
            </div>
        </>
    );
};