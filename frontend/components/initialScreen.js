import React, {Component} from 'react';
import {Text, Image, View, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const InitialScreen = ({navigation}) => {
  let screenWidth = Math.round(Dimensions.get('window').width) - 60;
  return (
    <View style={styles.loginContainer}>
      <Image
        source={require('../assets/images/icon.png')}
        style={styles.icon}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.btnPadding}>
          <TouchableOpacity
            style={[
              styles.button,
              {width: screenWidth, backgroundColor: '#4B8DEE'},
            ]}>
            <Text style={styles.buttonText}>Connect with Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnPadding}>
          <TouchableOpacity
            style={[
              styles.button,
              {width: screenWidth, backgroundColor: '#6AC6E9'},
            ]}>
            <Text style={styles.buttonText}>Connect with Phone</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnPadding}>
          <TouchableOpacity
            style={[
              styles.button,
              {width: screenWidth, backgroundColor: '#EA5E49'},
            ]}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text>
          Don't have account ?{' '}
          <Text
            style={styles.boldText}
            onPress={() => navigation.navigate('signup')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 200,
    height: 200,
  },
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 18,
    letterSpacing: 1,
    color: 'white',
    alignSelf: 'center',
  },
  btnPadding: {
    paddingBottom: 15,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default InitialScreen;
