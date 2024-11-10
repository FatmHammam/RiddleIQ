import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './src/views/Home'
import Levels from './src/views/Levels'
import Settings from './src/views/Settings'
import Level from './src/views/Level'

const Stack = createNativeStackNavigator()

const App = () => (
  <NavigationContainer >
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}

      />
      <Stack.Screen name="Levels" component={Levels}
        options={{
          title: 'Levels',
          headerStyle: {
            backgroundColor: '#424242',
          },
          headerTintColor: '#fff',
        }}
        />
      <Stack.Screen name="Level" component={Level}
        options={{
          title: 'Level 1',
          headerStyle: {
            backgroundColor: '#424242',
          },
          headerTintColor: '#fff',
        }}
        />
      {/* <Stack.Screen name="QuizCompleted" component={NextLevel} /> */}
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}

      />
    </Stack.Navigator>
  </NavigationContainer>
)


export default App
