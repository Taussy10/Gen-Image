import { Stack } from "expo-router";
import { ClerkProvider , ClerkLoaded } from "@clerk/clerk-expo";

// _layout.tsx is just a global provider and layout things 

// so what happend in expo: that each page creates it's own route
// and inex.ts is the index route as '/'

export default function RootLayout() {
  
// const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

// if (!publishableKey) {
//   throw new Error(
//     'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
//   )
// }

  return(
    // screenOptions={{headerShown:false }}

  //   <ClerkProvider publishableKey={publishableKey}>
  // <ClerkLoaded>
    
<Stack screenOptions={{headerShown:false }}  >
    {/* just write the name  not it's route it will automatically maps to it route*/}
    {/* it will map to /index this is main/index route  */}
  <Stack.Screen  name="index"/>
  {/* you can also make index one as tab just remove add name = "(tabs)"
  not doing becaause let it be beginner friendly
  */}
  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

  {/* it will map to /LoginScreen/login
   make sure if you make a file in directory then add it's name also 
   this is called nested routes */}
  <Stack.Screen  name="LoginScreen/login"  />
  {/* it will map to /auth this is called flat route */}
  <Stack.Screen  name="auth"  />
</Stack>
// </ClerkLoaded>
// </ClerkProvider>
  ) 

}
