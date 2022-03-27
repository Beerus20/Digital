import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerMenu from './DrawerMenu'
import { Home, Achat, Inscription, CoverPage, Tarifs, Autre_Prestation, Conditions, Stats, Settings, Compte, RegistrationStep, Login } from '../../Screens/index'
const Stack = createStackNavigator();

const Stacks = ({ params }) => (
    <Stack.Navigator initialRouteName="CoverPage">
        <Stack.Screen
            name="CoverPage"
            component={CoverPage}
            options={{

                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Home"
            component={DrawerMenu}
            options={{

                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Tarifs"
            component={Tarifs}
            options={{

                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Autre_Prestation"
            component={Autre_Prestation}
            options={{

                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Conditions"
            component={Conditions}
            options={{

                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Stats"
            component={Stats}
            options={{

                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Settings"
            component={Settings}
            options={{

                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Compte"
            component={Compte}
            options={{

                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Achat"
            component={Achat}
            options={{

                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Login"
            component={Login}
            options={{

                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Inscription"
            component={Inscription}
            options={{

                headerShown: false,
            }}
        />
        <Stack.Screen
            name="RegistrationStep"
            component={RegistrationStep}
            options={{

                headerShown: false,
            }}
        />
        

    </Stack.Navigator>
);

export default Stacks;
