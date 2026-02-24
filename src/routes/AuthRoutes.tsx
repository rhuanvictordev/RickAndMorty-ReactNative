import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginPage from "../app/pages/Login";
import RegisterPage from '../app/pages/Register';

const Drawer = createDrawerNavigator();

export default function AuthRoutes(){

    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Login" component={LoginPage} options={{headerShown:false}}/>
            <Drawer.Screen name="Register" component={RegisterPage} options={{headerShown:false}}/>
        </Drawer.Navigator>
    )
}