import {createAppContainer, createBottomTabNavigator, createStackNavigator} from "react-navigation";

import ReservationScreen from "../screens/main/reservations/ReservationScreen";

export enum ROUTES {
    MAINHOME = "MainHome",

    ROOTMAIN = "RootMain",

    ROOTMODAL = "RootModal"
}

const MainStack = createBottomTabNavigator(
    {
        [ROUTES.MAINHOME]: ReservationScreen
    },
    {
        initialRouteName: ROUTES.MAINHOME,
        lazy: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            tabStyle: {
                height: 120
            },
            activeTintColor: "#e91e63",
            inactiveTintColor: "navy",
            labelStyle: {
                fontSize: 17
            },
            style: {
                backgroundColor: "#ddd",
                display: "none"
            }
        }
    }
);
const RootStack = createStackNavigator(
    {
        [ROUTES.ROOTMAIN]: {
            screen: MainStack
        },
        [ROUTES.ROOTMODAL]: {
            screen: MainStack
        }
    },
    {
        initialRouteName: ROUTES.ROOTMAIN,
        mode: "card",
        headerMode: "none"
    }
);

const Navigation = createAppContainer(RootStack);
export default Navigation;