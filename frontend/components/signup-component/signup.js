import React, {Component} from 'react';
import {Text, ImageBackground, View} from 'react-native';
import {signupStyles} from './signupStyles';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {commonStyles} from '../../assets/styles/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      number: '',
      password: '',
      nameError: '',
      emailError: '',
      numberError: '',
      passwordError: '',
    };
    this.validate = this.validate.bind(this);
  }

  validate() {
    const {name, email, password, number} = this.state;
    if (name == '') {
      this.setState({
        nameError: 'Required',
      });
    }
    if (email == '') {
      this.setState({
        emailError: 'Required',
      });
    }
    if (number == '') {
      this.setState({
        numberError: 'Required',
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
        style={commonStyles.errorIcon}></Icon>
    );

    return (
      <ImageBackground
        resizeMode="cover"
        style={signupStyles.backgroundImage}
        source={require('../../assets/images/signupBackground.jpg')}>
        <View style={signupStyles.card}>
          <Text style={signupStyles.signupHeader}>Sign Up</Text>
          <View style={commonStyles.flexrow}>
            <TextInput
              placeholder="Enter full name"
              style={[
                commonStyles.input,
                commonStyles.mb14,
                this.state.nameError
                  ? commonStyles.emptyField
                  : commonStyles.cardBottomText,
              ]}
              onChangeText={(name) => this.setState({name, nameError: ''})}
            />
            {this.state.nameError ? errorIcon : null}
          </View>
          <View style={commonStyles.flexrow}>
            <TextInput
              placeholder="Enter Email ID"
              style={[
                commonStyles.input,
                commonStyles.mb14,
                this.state.nameError
                  ? commonStyles.emptyField
                  : commonStyles.cardBottomText,
              ]}
              onChangeText={(email) => this.setState({email, emailError: ''})}
            />
            {this.state.emailError ? errorIcon : null}
          </View>
          <View style={commonStyles.flexrow}>
            <TextInput
              placeholder="Enter mobile number"
              style={[
                commonStyles.input,
                commonStyles.mb14,
                this.state.numberError
                  ? commonStyles.emptyField
                  : commonStyles.cardBottomText,
              ]}
              onChangeText={(number) =>
                this.setState({number, numberError: ''})
              }
            />
            {this.state.numberError ? errorIcon : null}
          </View>
          <View style={commonStyles.flexrow}>
            <TextInput
              placeholder="Enter password"
              style={[
                commonStyles.input,
                commonStyles.mb14,
                this.state.passwordError
                  ? commonStyles.emptyField
                  : commonStyles.cardBottomText,
              ]}
              onChangeText={(password) =>
                this.setState({password, passwordError: ''})
              }
            />
            {this.state.passwordError ? errorIcon : null}
          </View>
          <TouchableOpacity style={commonStyles.button} onPress={this.validate}>
            <Text style={commonStyles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default Signup;
