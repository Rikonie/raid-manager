import React from "react";
import styles from '../layout/layout.module.scss'
import logo from  "../../logo.png"
import { AuthorizationComponent } from "../../components/authorization/authorization-component";
import {CenterHeaderComponent} from "../../components/center-header/center-header-component"
import {SideBarComponent} from "../../components/sidebar/sidebar-component"
export interface LayoutComponentProps {
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({children}) => {
    const per = 1234;

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.hcontent}>
                        <div><AuthorizationComponent></AuthorizationComponent></div>
                        <div className={styles.centercontent}>
                            <CenterHeaderComponent></CenterHeaderComponent></div>
                        <div><img className={styles.logo} src={logo}></img></div>
                    </div>
                </div>
            <div className={styles.sidebar}> <div>
            <SideBarComponent></SideBarComponent>
            </div>
                
                </div>
                <div className={styles.content}>{children}</div>
            </div>
        </>
    );
};