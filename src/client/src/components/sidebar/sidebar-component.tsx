import React from "react";
import {Box, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {Link, NavLink} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AppsIcon from '@material-ui/icons/Apps';

export class SidebarComponentProps {
    toggleDrawer?: () => void;
    drawerOpened?: boolean
}

export const SidebarComponent: React.FC<SidebarComponentProps> = ({toggleDrawer, drawerOpened}) => {
    return (
        <Drawer
            anchor='left'
            open={drawerOpened}
            onClose={toggleDrawer}
        >
            <Box
                sx={{width: 'auto'}}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
            >
                <List>
                    <ListItem component={NavLink} activeClassName="Mui-selected" to="/home">
                        <ListItemIcon>
                            <HomeIcon color="primary"/>
                        </ListItemIcon>
                        <ListItemText primary={"Главная"}/>
                    </ListItem>
                </List>
                <List>
                    <ListItem component={NavLink} activeClassName="Mui-selected" to="/guild">
                        <ListItemIcon>
                            <GroupIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Гильдия"}/>
                    </ListItem>
                </List>
                <List>
                    <ListItem component={NavLink} activeClassName="Mui-selected" to="/raiders">
                        <ListItemIcon>
                            <GroupIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Рейдеры"}/>
                    </ListItem>
                </List>
                <List>
                    <ListItem component={NavLink} activeClassName="Mui-selected" to="/timetable">
                        <ListItemIcon>
                            <EventIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Календарь"}/>
                    </ListItem>
                </List>
                <List>
                    <ListItem component={NavLink} activeClassName="Mui-selected" to="/statistics">
                        <ListItemIcon>
                            <EqualizerIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Статистика"}/>
                    </ListItem>
                </List>
                <List>
                    <ListItem component={NavLink} activeClassName="Mui-selected" to="/calculator">
                        <ListItemIcon>
                            <AppsIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Калькулятор рейда"}/>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};