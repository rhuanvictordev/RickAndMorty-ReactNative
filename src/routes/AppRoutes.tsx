import { createDrawerNavigator } from '@react-navigation/drawer';
import HelpPage from '../app/pages/Help';
import ListCharacterPage from '../app/pages/listCharacter';
import ListEpisodePage from '../app/pages/listEpisode';
import LogadoPage from '../app/pages/PageModel';

const Drawer = createDrawerNavigator();

export default function AppRoutes(){
    
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Episódios" component={ListEpisodePage} />
            <Drawer.Screen name="Personagens" component={ListCharacterPage} />
            <Drawer.Screen name="Ajuda" component={HelpPage} />
            <Drawer.Screen name="Informações" component={LogadoPage} />
        </Drawer.Navigator>
    )
}