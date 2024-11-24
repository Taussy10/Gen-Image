// for tabs create a folder named (tabs) why bracket? cause it is syntax
// then create _layout.tsx file for layouting the tabs
// then go to: https://docs.expo.dev/router/advanced/tabs/

// basic knowledege: you have to crete index.tsx only in by default layout 

import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../Constants/Colors';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.PRIMARY , headerShown: false}}>
      <Tabs.Screen
        name="home"
        // name of tabs: it will be use in mapping: /home
        options={{
          title: 'Home',
        //   just a name of tab
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="collections"
        options={{
          title: 'collections',
          tabBarIcon: ({ color }) => <Ionicons name="folder-open-sharp" size={24}  color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          tabBarIcon: ({ color }) => <Ionicons name="people" size={24}  color={color} />,
        }}
      />
    </Tabs>
  );
}
