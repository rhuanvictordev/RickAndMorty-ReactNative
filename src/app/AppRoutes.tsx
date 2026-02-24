import { createDrawerNavigator } from '@react-navigation/drawer';
import HelpPage from "./pages/Help";
import ListCharacterPage from "./pages/listCharacter";
import ListEpisodePage from "./pages/listEpisode";
import LogadoPage from './pages/PageModel';

const Drawer = createDrawerNavigator();

export default function AppRoutes(){
    
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Episódios" component={ListEpisodePage} />
            <Drawer.Screen name="Personagens" component={ListCharacterPage} />
            <Drawer.Screen name="Ajuda" component={HelpPage} />
            <Drawer.Screen name="Dados logados" component={LogadoPage} />
        </Drawer.Navigator>
    )
}