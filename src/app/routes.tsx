import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from "../app/pages/Home";
import HelpPage from "./pages/Help";
import ListCharacterPage from "./pages/listCharacter";
import ListEpisodePage from "./pages/listEpisode";

const Drawer = createDrawerNavigator();

export default function Routes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Início" component={HomePage} />
            <Drawer.Screen name="Episódios" component={ListEpisodePage} />
            <Drawer.Screen name="Personagens" component={ListCharacterPage} />
            <Drawer.Screen name="Ajuda" component={HelpPage} />
        </Drawer.Navigator>
    )
}