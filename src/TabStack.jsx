import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import NoteScreen from './screens/NoteScreen';
import SettingScreen from './screens/SettingScreen';
import Ionicons from '@expo/vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function TabStack() {
  return (
    <>
        <Tab.Navigator 
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
          
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Notes') {
                            iconName = focused ? 'book' : 'book-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'list' : 'list-outline';
                        }
          
                      // You can return any component that you like here!
                      return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#0F172A',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                    tabBarShowLabel:false,
                    tabBarStyle: {
                        height:50,
                        marginBottom:35,
                        marginLeft:50,
                        marginRight:50,      
                        borderRadius: 100,   
                        position: 'absolute'           
                    },
                })}
                
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Notes" component={NoteScreen} />
            <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
    </>
  );
}

