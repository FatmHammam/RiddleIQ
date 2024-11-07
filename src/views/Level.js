import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native'
import { Questions } from '../assets/Questions'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Level = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [typedAnswer, setTypedAnswer] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const handleButtonPress = (number) => {
    setTypedAnswer((prevAnswer) => prevAnswer + number)
    setIsEditing(true)
  }

  const handleInputPress = () => {
    setIsEditing(true)
  }

  const handleBlur = () => {
    if (typedAnswer === '') {
      setIsEditing(false)
    }
  }

  const handleAnswerCheck = () => {
    if (Number(typedAnswer) === Questions[currentQuestionIndex].answer) {
      console.log('Correct Answer')
      const nextIndex = currentQuestionIndex + 1

      if (nextIndex < Questions.length) {
        setCurrentQuestionIndex(nextIndex)
        setTypedAnswer('')
      } else {
        console.log('Quiz completed!')
        // Optionally, navigate to a completion screen or reset quiz
        navigation.navigate('QuizCompleted')
      }
    } else {
      console.log('Wrong Answer')
      console.log('typedAnswer', typedAnswer)
    }
  }

  return (
    <View style={styles.container}>
      {Questions[currentQuestionIndex].question ? (
        <Text style={{ color: '#F5F5F5' }}>{Questions[currentQuestionIndex].question}</Text>
) : (
  <Image
    source={Questions[currentQuestionIndex].questionSrc}
    style={styles.image}
  />
)}
      <TouchableOpacity
        activeOpacity={1}
        onPress={handleInputPress}
        style={styles.inputContainer}
      >
        {!isEditing && typedAnswer === '' ? (
          <Text style={styles.placeholder}>Enter your answer</Text>
        ) : (
          <TextInput
            style={styles.input}
            value={typedAnswer}
            onChangeText={() => setTypedAnswer(typedAnswer)}
            editable={false}
            onBlur={handleBlur}
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
          onPress={() => setTypedAnswer('')}
        >
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={handleAnswerCheck}
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
  inputContainer: {
    width: '80%',
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  image: {
    width: 550,
    height: 150,
    resizeMode: 'contain',
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
