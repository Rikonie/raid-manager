import React, {useState} from "react";
import {createStyles} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import {Theme} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {SidebarComponent} from "../sidebar/sidebar-component";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export const LayoutComponent = ({children}) => {
    const classes = useStyles();
    const [drawerOpened, setDrawerOpened] = useState(false);
    const toggleDrawer = () => {
        setDrawerOpened(!drawerOpened);
    };

    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <div>
                            <IconButton edge="start" className={classes.menuButton} color="inherit"
                                        aria-label="menu" onClick={toggleDrawer}>
                                <MenuIcon/> Меню
                            </IconButton>
                            <SidebarComponent toggleDrawer={toggleDrawer} drawerOpened={drawerOpened}/>
                        </div>
                        <Typography variant="h6" className={classes.title}>
                        </Typography>
                        <Button component={Link} to="/authorization" color="inherit">Авторизация</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <div>{children}</div>
        </div>
    );
};