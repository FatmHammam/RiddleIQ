import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

const Settings = ({navigation}) => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}
          >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#424242',
    paddingHorizontal: 10,
    flex: 1,
  },
  subContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: '#229799',
    width: '18%',
    marginVertical: 6,
    borderRadius: 5,
    paddingVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: '#F5F5F5',
    fontWeight: 'bold',
    fontSize: 18,
  },
})

export default Settings
