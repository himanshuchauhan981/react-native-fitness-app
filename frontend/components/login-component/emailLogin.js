import React, {Component} from 'react';
import {Text, ImageBackground, View, StyleSheet} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

class EmailLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    };
  }

  validate() {
    const {email, password} = this.state;
    if (email == '') {
      this.setState({
        emailError: 'Required',
      });
    }
    if (password == '') {
      this.setState({
        passwordError: 'Required',
      });
    }
  }

  render() {
    const errorIcon = (
      <Icon
        name="exclamation-triangle"
        size={20}
        color={'red'}
        style={styles.errorIcon}></Icon>
    );
    return (
      <View style={styles.loginContainer}>
        <ImageBackground
          source={require('../../assets/images/login.jpg')}
          imageStyle={{borderBottomLeftRadius: 76, borderBottomRightRadius: 76}}
          style={styles.image}>
          <Text style={styles.loginHeading}>Login</Text>
        </ImageBackground>
        <View style={[styles.inputContainer]}>
          <View style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                placeholder={'Enter your email'}
                style={[
                  styles.loginInput,
                  styles.mb14,
                  this.state.emailError
                    ? styles.emptyField
                    : styles.cardBottomText,
                ]}
                onChangeText={(email) => this.setState({email, emailError: ''})}
              />
              {this.state.emailError ? errorIcon : null}
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                placeholder={'Enter your password'}
                style={[
                  styles.loginInput,
                  this.state.passwordError
                    ? styles.emptyField
                    : styles.cardBottomText,
                ]}
                secureTextEntry={true}
                onChangeText={(password) =>
                  this.setState({password, passwordError: ''})
                }
              />
              {this.state.passwordError ? errorIcon : null}
            </View>
            <View style={styles.cardBottomText}>
              <Text style={styles.label}>
                No Account ? S
                <Text onPress={() => this.props.navigation.navigate('signup')}>
                  ign up
                </Text>
              </Text>
              <Text style={styles.label}>Forget Password?</Text>
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => this.validate()}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
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
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 14,
    elevation: 8,
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
    paddingTop: 5,
    paddingBottom: 15,
  },
  label: {
    marginTop: 6,
  },
  loginButton: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 1,
    color: 'white',
  },
  emptyField: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorIcon: {
    position: 'relative',
    right: 35,
    top: 12,
  },
});

export default EmailLogin;
