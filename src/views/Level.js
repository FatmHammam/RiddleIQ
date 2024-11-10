import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
} from 'react-native'
import { Questions } from '../assets/Questions'
import Icon from 'react-native-vector-icons/MaterialIcons'

const MODAL_STATES = {
  CORRECT: 'CORRECT',
  WRONG: 'WRONG',
  HINT: 'HINT',
}

const Level = ({ navigation, route }) => {
  const { questionNo = 1 } = route.params || {}
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(questionNo - 1)
  const [modalVisible, setModalVisible] = useState(false)
  const [typedAnswer, setTypedAnswer] = useState('')
  const [answer, setAnswer] = useState('')
  const [modalState, setModalState] = useState(null)
  const [hint, setHint] = useState('')
  const question = Questions[currentQuestionIndex] || {}

  const handleButtonPress = (number) => {
    setTypedAnswer((prevAnswer) => prevAnswer + number)
  }

  const handleAnswerCheck = () => {
    if (Number(typedAnswer) === question.answer) {
      setModalState(MODAL_STATES.CORRECT)
    } else {
      setModalState(MODAL_STATES.WRONG)
    }
    setModalVisible(true)
  }

  const getNextQuestion = () => {
    if (modalState === MODAL_STATES.CORRECT) {
      const nextIndex = currentQuestionIndex + 1
      if (nextIndex < Questions.length) {
        setCurrentQuestionIndex(nextIndex)
        setTypedAnswer('')
      } else {
        navigation.navigate('QuizCompleted')
      }
    }
    setModalVisible(false)
    setTypedAnswer('')
    setHint('')
  }

  const handleHint = () => {
    setHint(question.hint)
    setModalState(MODAL_STATES.HINT)
    setModalVisible(true)
  }
  const getButtonText = () => {
    switch (modalState) {
      case MODAL_STATES.CORRECT:
        return 'Continue'
      case MODAL_STATES.WRONG:
        return 'Try Again'
      case MODAL_STATES.HINT:
        return 'Close Hint'
      default:
        return 'Close'
    }
  }

  const handleAnswer = () => {
    setModalState(MODAL_STATES.ANSWER)
    setAnswer(question.answer)
    setModalVisible(true)
  }
  return (
    <View style={styles.container}>
      <View style={styles.questionNo}>
        <Text style={styles.questionNoText}>
          {` Level ${Questions[currentQuestionIndex].questionNo}`}
        </Text>
      </View>
      {Questions[currentQuestionIndex].question ? (
        <Text style={styles.question}>{Questions[currentQuestionIndex].question}</Text>
      ) : (
        <Image
          source={Questions[currentQuestionIndex].questionSrc}
          style={styles.image}
        />
      )}
      <View>
        <View style={styles.hintSection}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.inputContainer}
          >
            {typedAnswer === '' ? (
              <Text style={styles.placeholder}>Enter your answer</Text>
            ) : (
              <TextInput
                style={styles.input}
                value={typedAnswer}
                editable={false}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.hintOrAnswer}
            onPress={handleHint}
          >
            <Icon name="lightbulb-outline" size={24} color="#F5F5F5" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.hintOrAnswer}
            onPress={handleAnswer}
          >
            <Text style={styles.buttonText}>Answer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numberButtonsContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 0, 'Enter'].map((button, index) => (
            <TouchableOpacity
              key={index}
              style={styles.btn}
              onPress={() => {
                if (button === 'Enter') {handleAnswerCheck()}
                else if (button === 'X') {setTypedAnswer('')}
                else {handleButtonPress(button.toString())}
              }}
            >
              <Text style={styles.buttonText}>{button}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <ModalContent modalState={modalState} hint={hint} answer={answer}/>
            <TouchableOpacity
              style={styles.continueBtn}
              onPress={getNextQuestion}
            >
              <Text style={styles.buttonText}>
                {getButtonText()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const ModalContent = ({ modalState, hint, answer }) => {
  switch (modalState) {
    case MODAL_STATES.CORRECT:
      return (
        <>
          <Icon name="check-circle" size={48} color="green" />
          <Text style={styles.modalText}>Correct!</Text>
        </>
      )
    case MODAL_STATES.WRONG:
      return (
        <>
          <Icon name="highlight-off" size={48} color="red" />
          <Text style={styles.modalText}>Wrong Answer!</Text>
        </>
      )
    case MODAL_STATES.HINT:
      return (
        <>
          <Text style={styles.modalText}>{hint}</Text>
        </>
      )
    case MODAL_STATES.ANSWER:
        return (
          <>
            <Text style={styles.modalText}>{answer}</Text>
          </>
        )
    default:
      return null
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#424242',
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
  question: {
    color: '#F5F5F5',
    fontSize: 24,
    textAlign: 'center',
  },
  inputContainer: {
    width: '48%',
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  hintSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
  btn: {
    backgroundColor: '#229799',
    width: '30%',
    marginBottom: 15,
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  hintOrAnswer: {
    backgroundColor: '#229799',
    width: '22%',
    marginBottom: 15,
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  modalExitView: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueBtn: {
    backgroundColor: '#229799',
    width: 120,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 'auto',
  },
  exitBtn: {
    backgroundColor: '#424242',
    width: 120,
    paddingVertical: 10,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  questionNo: {
    backgroundColor: '#229799',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  questionNoText: {
    color: '#F5F5F5',
    fontSize: 26,
    fontWeight: 'bold',
  },
})

export default Level
