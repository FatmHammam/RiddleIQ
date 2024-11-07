import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const NextLevel = () => {
  const [answer, setAnswer] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const handleButtonPress = (number) => {
    setAnswer((prevAnswer) => prevAnswer + number)
    setIsEditing(true) // Keeps editing state as true when number is pressed
  }

  const handleInputPress = () => {
    setIsEditing(true) // Set editing state to true when input is clicked
  }

  const handleBlur = () => {
    if (answer === '') {
      setIsEditing(false) // Reset editing state if no answer
    }
  }

  return (
    <View style={styles.container}>
      <Text>Quiz Completed</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#424242',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: 550,
    height: 150,
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '80%',
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    color: '#000',
  },
  placeholder: {
    color: '#888',
    fontSize: 16,
  },
  numberButtonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
  },
  btn: {
    backgroundColor: '#229799',
    // width: '22%',
    marginVertical: 6,
    borderRadius: 5,
    paddingVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#F5F5F5',
    fontWeight: 'bold',
    fontSize: 18,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '80%',
  },
  optionsBtns: {
    backgroundColor: '#229799',
    width: '30%',
    marginVertical: 6,
    borderRadius: 5,
    paddingVertical: 8,
    alignItems: 'center',
  },
})

export default NextLevel
