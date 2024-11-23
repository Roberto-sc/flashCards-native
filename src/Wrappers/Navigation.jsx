import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { ROUTES } from '../constants/navigation.constant';
import SignUp from '../screens/SignUp.screen';



const Stack = createStackNavigator();

function Navigation(params){

    return 
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen component={SignUp} name={ROUTES.signUp}>

            </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>

}

export default Navigation;