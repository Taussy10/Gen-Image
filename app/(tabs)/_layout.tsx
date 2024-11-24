// for tabs create a folder named (tabs) why bracket? cause it is syntax
// then create _layout.tsx file for layouting the tabs
// then go to: https://docs.expo.dev/router/advanced/tabs/

// basic knowledege: you have to crete index.tsx only in by default layout 

import { Tabs } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false}}>
      <Tabs.Screen
        name="home"
        // name of tabs: it will be use in mapping: /home
        options={{
          title: 'Home',
        //   just a name of tab
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color="black" /> ,
        }}
      />
      <Tabs.Screen
        name="collections"
        options={{
          title: 'collections',
        //   tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
        //   tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
