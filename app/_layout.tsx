import { Stack } from "expo-router";



// _layout.tsx is just a global provider and layout things 

// so what happend in expo: that each page creates it's own route
// and inex.ts is the index route as '/'

export default function RootLayout() {
  return(
    // screenOptions={{headerShown:false }}

<Stack screenOptions={{headerShown:false }}  >
    {/* just write the name  not it's route it will automatically maps to it route*/}
    {/* it will map to /index this is main/index route  */}
  <Stack.Screen  name="index"/>
  {/* it will map to /LoginScreen/login
   make sure if you make a file in directory then add it's name also 
   this is called nested routes */}
  <Stack.Screen  name="LoginScreen/login"  />
  {/* it will map to /auth this is called flat route */}
  <Stack.Screen  name="auth"  />

</Stack>
  ) 
  // <Stack />;
}
