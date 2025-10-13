import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs initialRouteName='start-workout' screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: 'History',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="clock-o" color={color} />,
                }}
            />
            <Tabs.Screen
                name="start-workout"
                options={{
                    title: 'Start Workout',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={color} />,
                }}
            />
            <Tabs.Screen
                name="exercises"
                options={{
                    title: 'Exercises',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="male" color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
        </Tabs>
    );
}
