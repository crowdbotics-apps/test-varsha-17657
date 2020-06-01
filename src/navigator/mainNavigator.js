import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList56430Navigator from '../features/ArticleList56430/navigator';
import ArticleList56413Navigator from '../features/ArticleList56413/navigator';
import ArticleList56412Navigator from '../features/ArticleList56412/navigator';
import ArticleList56411Navigator from '../features/ArticleList56411/navigator';
import ArticleList56379Navigator from '../features/ArticleList56379/navigator';
import ArticleList56378Navigator from '../features/ArticleList56378/navigator';
import ArticleList56377Navigator from '../features/ArticleList56377/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList56430: { screen: ArticleList56430Navigator },
ArticleList56413: { screen: ArticleList56413Navigator },
ArticleList56412: { screen: ArticleList56412Navigator },
ArticleList56411: { screen: ArticleList56411Navigator },
ArticleList56379: { screen: ArticleList56379Navigator },
ArticleList56378: { screen: ArticleList56378Navigator },
ArticleList56377: { screen: ArticleList56377Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
