import React from 'react'
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native'


const Home = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        RiddlIq
      </Text>
    </View>
    <View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Levels')}
      >
        <Text style={styles.buttonText}>Levels</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Levels')}
      >
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Exit</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#424242',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    color: '#F5F5F5',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 40,
  },
  btn: {
    backgroundColor: '#229799',
    alignSelf: 'center',
    width: 180,
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomColor: '#48CFCB',
    borderBottomWidth: 4,
  },
buttonText: {
    textAlign: 'center',
    color: '#F5F5F5',
    fontWeight: 'bold',
    fontSize: 18,
  },
})

export default Home
