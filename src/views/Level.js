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
  }
  const handleInputPress = () => {
    setIsEditing(true)
  }

  const handleBlur = () => {
    // Reset editing state and show placeholder if no answer is entered
    if (answer === '') {
      setIsEditing(false)
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/quiz.webp')}
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your answer"
        value={answer}
        onChangeText={setAnswer}
        keyboardType="numeric"
        editable={isEditing ? true : false} // This will prevent the keyboard from appearing
      />
      {/*
      <TouchableOpacity
        onPress={handleInputPress}
        onBlur={handleBlur}
        style={styles.input}
      >
        <Text style={styles.inputText}>
          {isEditing ? answer : 'Enter your answer'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleInputPress}
        onBlur={handleBlur}
        style={styles.input}
      >
        <Text style={styles.inputText}>
          {isEditing ? answer : (answer ? answer : 'Enter your answer')}
        </Text>
      </TouchableOpacity> */}

      <View style={styles.numberButtonsContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => console.log('Hint')}
        >
          <Icon name="lightbulb-outline" size={24} color="#F5F5F5" />
        </TouchableOpacity>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
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
          onPress={() => console.log('Enter pressed')}
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
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
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

