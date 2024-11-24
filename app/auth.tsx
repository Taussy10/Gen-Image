import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Client, Account, ID, Models } from 'react-native-appwrite';
import { useState , useEffect} from 'react';
import { Endpoint, ProjectID, Platform } from '@/env';
import { Redirect  } from 'expo-router';

let client = new Client();
client
  .setEndpoint(Endpoint)
  .setProject(ProjectID)
  .setPlatform(Platform);

export let account = new Account(client);

// for the deleting the session basiclly logout
// const sessionId = account.get();
// console.log(sessionId);


// export const result = account.deleteSession(
//   '<SESSION_ID>' // sessionId
  
  
// );


export default function Auth() {
const [loggedInUser, setLoggedInUser] = useState<Models.User<Models.Preferences> | null>(null);
  // for checking whether user is login/signup or not 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
const [loading, setLoading] = useState(true)



  // By checking session you can 
  useEffect(() => {
    const checkSession = async () => {
      try {
        const user = await account.get(); // Fetch current logged-in user
        setLoggedInUser(user);
      } catch (error) {
        // console.log('No active session:', error);
        setLoggedInUser(null);
  
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);




  async function login(email: string, password: string) {
    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();
      
      setLoggedInUser(user);
     
    } catch (error) {
      console.error('Login error:', error);
    }
  }

 
  async function register(email: string, password: string, name: string) {
    try {
      await account.create(ID.unique(), email, password, name);
      const user = await account.createEmailPasswordSession(email, password);
      setLoggedInUser(user);
    } catch (error) {
      console.error('Register error:', error);
    }
  }

  // You can't export async funtion so let's export it's parameter
   const logout = async() => {
    try {
    await account.deleteSession('current');
        setLoggedInUser(null);
      } catch (error) {
        console.error('Logout error:', error);
      }
  }
  // async function logout() {

  // }

  // Redirect logic
  // if (loggedInUser) {
  //   return <Redirect href="/(tabs)/home" />;
  // }
  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (loggedInUser) {
    return <Redirect href="/(tabs)/home" />;
  }
  console.log(loggedInUser?.name , "Name");
  

  return (
    <View style={styles.root}>
      <Text>
        {
          loggedInUser ? `Hello ${loggedInUser.name}`
          
          :"Hello"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.button} onPress={() => login(email, password)}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => register(email, password, name)}>
        <Text>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
          
    </View>
    
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 40,
    marginBottom: 40,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
