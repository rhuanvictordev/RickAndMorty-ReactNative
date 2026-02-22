import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../app/pages/home";
import Episodes from "./pages/episodes";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function Routes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Personagens" component={Home} />
            <Drawer.Screen name="Episódios" component={Episodes} />
        </Drawer.Navigator>
    )
}