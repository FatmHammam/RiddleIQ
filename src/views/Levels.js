import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

const Levels = ({navigation}) => {
  const levels = Array.from({ length: 100 }, (_, i) => i + 1)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.subContainer}>
        {levels.map(level => (
          <TouchableOpacity
            key={level}
            style={styles.btn}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>{level}</Text>
          </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#424242',
    paddingHorizontal: 10,

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

export default Levels
