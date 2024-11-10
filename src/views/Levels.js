import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { Questions } from '../assets/Questions'

const Levels = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.subContainer}>
        {Questions.map((q , index)=> (
          <TouchableOpacity
            key={index}
            style={styles.btn}
            onPress={() => navigation.navigate('Level', { questionNo: q.questionNo })}
          >
            <Text style={styles.buttonText}>{q.questionNo}</Text>
          </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#424242',
    padding: 10,
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

export default Levels
