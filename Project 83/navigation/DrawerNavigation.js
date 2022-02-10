import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator(); 

const DrawerNavigation = () => {
    return (
        <Drawer.Navigation>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigation>
    );
};

export default DrawerNavigation;