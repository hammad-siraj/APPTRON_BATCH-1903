import {createAppContainer,createStackNavigator,createBottomTabNavigator,createDrawerNavigator} from 'react-navigation'
import ScreenList from '../gradle/components/screenlist';
import Screen from '../gradle/components/screen';
import TABA from '../gradle/components/tab_a';
import TABB from '../gradle/components/tab_b';
import TABC from '../gradle/components/tab_c';


const Stack = createStackNavigator({
    SCREENLIST:ScreenList,

    SCREEN:Screen,

})


const Tab = createBottomTabNavigator({
    TAB_A:TABA,
    TAB_B:TABB,
    TAB_C:TABC
})


const Drawer = createDrawerNavigator({
    STACK:Stack,
    TAB:Tab
})



export const AppContainer = createAppContainer(Drawer);