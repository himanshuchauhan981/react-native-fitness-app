import React, {Component} from 'react';
import {Text, ImageBackground, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {emailLoginStyles} from './loginStyles';

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
        style={emailLoginStyles.errorIcon}></Icon>
    );
    return (
      <View style={emailLoginStyles.loginContainer}>
        <ImageBackground
          source={require('../../assets/images/login.jpg')}
          imageStyle={{borderBottomLeftRadius: 76, borderBottomRightRadius: 76}}
          style={emailLoginStyles.image}>
          <Text style={emailLoginStyles.loginHeading}>Login</Text>
        </ImageBackground>
        <View style={[emailLoginStyles.inputContainer]}>
          <View style={emailLoginStyles.card}>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                placeholder={'Enter your email'}
                style={[
                  emailLoginStyles.loginInput,
                  emailLoginStyles.mb14,
                  this.state.emailError
                    ? emailLoginStyles.emptyField
                    : emailLoginStyles.cardBottomText,
                ]}
                onChangeText={(email) => this.setState({email, emailError: ''})}
              />
              {this.state.emailError ? errorIcon : null}
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                placeholder={'Enter your password'}
                style={[
                  emailLoginStyles.loginInput,
                  this.state.passwordError
                    ? emailLoginStyles.emptyField
                    : emailLoginStyles.cardBottomText,
                ]}
                secureTextEntry={true}
                onChangeText={(password) =>
                  this.setState({password, passwordError: ''})
                }
              />
              {this.state.passwordError ? errorIcon : null}
            </View>
            <View style={emailLoginStyles.cardBottomText}>
              <Text style={emailLoginStyles.label}>
                No Account ? S
                <Text onPress={() => this.props.navigation.navigate('signup')}>
                  ign up
                </Text>
              </Text>
              <Text style={emailLoginStyles.label}>Forget Password?</Text>
            </View>
            <TouchableOpacity
              style={emailLoginStyles.loginButton}
              onPress={() => this.validate()}>
              <Text style={emailLoginStyles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default EmailLogin;
