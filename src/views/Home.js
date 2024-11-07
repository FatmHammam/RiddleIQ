import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Modal,
  Linking,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [exitModalVisible, setExitModalVisible] = useState(false)
  const openLink = () => {
    Linking.openURL('https://www.google.com')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          RiddlIq
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Level')}
        >
          <Icon name="play-arrow" size={24} color="#F5F5F5" style={styles.icon}/>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Levels')}
        >
          <Icon name="layers" size={24} color="#F5F5F5" style={styles.icon}/>
          <Text style={styles.buttonText}>Levels</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="settings" size={24} color="#F5F5F5" style={styles.icon}/>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setExitModalVisible(true)}
        >
          <Icon name="exit-to-app" size={24} color="#F5F5F5" style={styles.icon}/>
          <Text style={styles.buttonText}>Exit</Text>
        </TouchableOpacity>
      </View>

      {/* Setting Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Settings</Text>
            <TouchableOpacity
              style={styles.restartBtn}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Icon name="refresh" size={20} color="#F5F5F5" style={styles.icon} />
              <Text style={styles.buttonText}>Restart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.adSettingBtn}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Icon name="ad-units" size={20} color="#F5F5F5" style={styles.icon} />
              <Text style={styles.buttonText}>Ad Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openLink()}
        >
              <Text style={styles.linkText}>Follow Us</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Icon name="close" size={20} color="#F5F5F5" style={styles.icon} />
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Exit Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={exitModalVisible}
        onRequestClose={() => {
          setExitModalVisible(!exitModalVisible)
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure ?</Text>
            <View style={styles.modalExitView}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setExitModalVisible(!exitModalVisible)}
            >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.exitBtn}
                onPress={() => setExitModalVisible(!exitModalVisible)}
            >
                <Text style={styles.buttonText}>Exit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

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
  cancelBtn: {
    backgroundColor: '#229799',
    width: 120,
    paddingVertical: 10,
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
  restartBtn: {
    backgroundColor: '#424242',
    width: 180,
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  adSettingBtn: {
    backgroundColor: '#888',
    width: 180,
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  closeBtn: {
    backgroundColor: '#424242',
    width: 120,
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  linkText: {
    textAlign: 'center',
    color: '#229799',
    fontSize: 18,
    marginVertical: 2,
    textDecorationLine: 'none',
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
})

export default Home
