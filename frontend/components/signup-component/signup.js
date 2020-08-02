import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {signupStyles} from './signupStyles';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {commonStyles} from '../../assets/styles/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        error: '',
      },
      email: {
        value: '',
        error: '',
      },
      number: {
        value: '',
        error: '',
      },
      password: {
        value: '',
        error: '',
      },
    };
    this.validate = this.validate.bind(this);
  }

  validate() {
    const {name, email, password, number} = this.state;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name.value == '') {
      name.error = 'Required';
      this.setState({name});
    }
    if (email.value == '') {
      email.error = 'Required';
      this.setState({email});
    }
    if (number.value == '') {
      number.error = 'Required';
      this.setState({number});
    }
    if (password.value == '') {
      password.error = 'Required';
      this.setState({password});
    }
  }

  render() {
    return (
      <View style={signupStyles.container}>
        <View style={signupStyles.signupHeader}>
          <Text style={signupStyles.title}>Hey, get on board</Text>
          <Text style={signupStyles.subTitle}>Sign up to continue</Text>
        </View>
        <View style={signupStyles.card}>
          <Text style={signupStyles.label}>Full name</Text>
          <TextInput
            placeholder="Enter full name"
            style={[
              commonStyles.input,
              this.state.name.error
                ? commonStyles.emptyField
                : commonStyles.cardBottomText,
            ]}
            onChangeText={(name) => {
              let oldState = this.state.name;
              oldState.value = name;
              if (oldState.error == 'Required') oldState.error = '';
              if (oldState.value == '') oldState.error = 'Required';
              this.setState(oldState);
            }}
          />
          <Text style={commonStyles.errorText}>
            {this.state.name.error ? this.state.name.error : null}
          </Text>
          <Text style={signupStyles.label}>Email address</Text>
          <TextInput
            placeholder="Enter Email ID"
            style={[
              commonStyles.input,
              this.state.email.error
                ? commonStyles.emptyField
                : commonStyles.cardBottomText,
            ]}
            onChangeText={(email) => {
              let oldState = this.state.email;
              oldState.value = email;
              if (oldState.error == 'Required') oldState.error = '';
              if (oldState.value == '') oldState.error = 'Required';
              const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              let test = re.test(String(email).toLowerCase());
              if (!test && email != '') oldState.error = 'Invalid email';
              else if (test && email != '') oldState.error = '';
              this.setState(oldState);
            }}
          />
          <Text style={commonStyles.errorText}>
            {this.state.email.error ? this.state.email.error : null}
          </Text>
          <Text style={signupStyles.label}>Mobile number</Text>
          <TextInput
            placeholder="Enter mobile number"
            style={[
              commonStyles.input,
              this.state.number.error
                ? commonStyles.emptyField
                : commonStyles.cardBottomText,
            ]}
            onChangeText={(number) => {
              let oldState = this.state.number;
              oldState.value = number;
              let re = /^((\+){0,1}91(\s){0,1}(\-){0,1}(\s){0,1}){0,1}98(\s){0,1}(\-){0,1}(\s){0,1}[1-9]{1}[0-9]{7}$/;
              let test = re.test(number);
              if (oldState.value == '') oldState.error = 'Required';
              if (!test && number != '')
                oldState.error = 'Invalid mobile number';
              else if (test && number != '') oldState.error = '';
              this.setState(oldState);
            }}
          />
          <Text style={commonStyles.errorText}>
            {this.state.number.error ? this.state.number.error : null}
          </Text>
          <Text style={signupStyles.label}>Password</Text>
          <TextInput
            placeholder="Enter password"
            style={[
              commonStyles.input,
              this.state.password.error
                ? commonStyles.emptyField
                : commonStyles.cardBottomText,
            ]}
            onChangeText={(password) => {
              let oldState = this.state.password;
              oldState.value = password;
              if (oldState.value == '') oldState.error = 'Required';
              this.setState(oldState);
            }}
          />
          <Text style={commonStyles.errorText}>
            {this.state.password.error ? this.state.password.error : null}
          </Text>
          <TouchableOpacity style={commonStyles.button} onPress={this.validate}>
            <Text style={commonStyles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              paddingVertical: 14,
              fontSize: 17,
              color: '#A8A5A5',
            }}>
            Or you can use
          </Text>
          <TouchableOpacity style={commonStyles.googleButton}>
            <Icon name="google" size={16} />
            <Text style={commonStyles.googleButtonText}>
              {' '}
              SIGNUP WITH GOOGLE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Signup;
