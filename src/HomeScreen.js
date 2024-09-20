import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const HomeScreen = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Home Screen
      </Text>
    </View>
    <Separator />
    <View>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() =>  navigation.navigate('Profile')}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;