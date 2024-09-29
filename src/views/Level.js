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

const Level = () => {
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
      <Image
        source={require('../assets/images/quiz.webp')}
        style={styles.image}
      />

      <TouchableOpacity
        activeOpacity={1}
        onPress={handleInputPress}
        style={styles.inputContainer}
      >
        {/* Show placeholder only when not editing and answer is empty */}
        {!isEditing && answer === '' ? (
          <Text style={styles.placeholder}>Enter your answer</Text>
        ) : (
          <TextInput
            style={styles.input}
            value={answer}
            onChangeText={setAnswer}
            editable={false} // Disable editing to prevent keyboard
            onBlur={handleBlur} // Call handleBlur when input loses focus
          />
        )}
      </TouchableOpacity>

      <View style={styles.numberButtonsContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => console.log('Hint')}
        >
          <Icon name="lightbulb-outline" size={24} color="#F5F5F5" />
        </TouchableOpacity>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <TouchableOpacity
            key={number}
            style={styles.btn}
            onPress={() => handleButtonPress(number.toString())}
          >
            <Text style={styles.buttonText}>{number}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.btn}
          onPress={() => setAnswer('')}
        >
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => setAnswer('')}
        >
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '80%',
  },
  btn: {
    backgroundColor: '#229799',
    width: '22%',
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
})

export default Level
