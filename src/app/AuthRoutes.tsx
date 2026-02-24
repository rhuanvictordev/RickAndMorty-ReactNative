import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginPage from "./pages/Login";

const Drawer = createDrawerNavigator();

export default function AuthRoutes(){

    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Login" component={LoginPage} options={{headerShown:false}}/>
        </Drawer.Navigator>
    )
}