import React, {Component} from 'react';
import {Text, ImageBackground, View, StyleSheet, CheckBox} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginMethod: props.route.params.loginMethod,
    };
  }

  render() {
    return (
      <View style={styles.loginContainer}>
        <ImageBackground
          source={require('../assets/images/login.jpg')}
          imageStyle={{borderBottomLeftRadius: 76, borderBottomRightRadius: 76}}
          style={styles.image}>
          <Text style={styles.loginHeading}>Login</Text>
        </ImageBackground>
        <View style={[styles.inputContainer]}>
          <View style={styles.card}>
            <TextInput
              placeholder={'Enter your email'}
              style={[styles.loginInput, styles.mb14]}
            />
            <TextInput
              placeholder={'Enter your password'}
              style={styles.loginInput}
            />
            <View style={styles.cardBottomText}>
              <Text style={styles.label}>No Account ? Sign up</Text>
              <Text style={styles.label}>Forget Password?</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EFECEC',
  },
  loginHeading: {
    fontSize: 36,
    letterSpacing: 2,
    textAlign: 'center',
  },
  image: {
    flex: 2,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  inputContainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 14,
  },
  loginInput: {
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 30,
    borderColor: '#DEDBDB',
  },
  mb14: {
    marginBottom: 14,
  },
  cardBottomText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    marginTop: 6,
  },
  loginButton: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    position: 'relative',
    bottom: 15,
  },
  loginText: {
    fontSize: 30,
  },
});

export default Login;
