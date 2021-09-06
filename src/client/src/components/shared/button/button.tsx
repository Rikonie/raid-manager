import React from "react";
import styles from "../button/button.module.scss";


export class ButtonComponentProps {
    title?: string;
    onClick?: () => void;
    disabled?: boolean
}

export const ButtonComponent: React.FC<ButtonComponentProps> =
    ({
         children,
         title,
         onClick = () => {
         },
         disabled = false
     }) => {
        return <button disabled={disabled} className={styles.button} onClick={() => onClick()}>
            {title || children || 'Button'}
        </button>
    };