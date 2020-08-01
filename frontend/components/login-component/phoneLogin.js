import React, {Component} from 'react';
import {Text, ImageBackground, KeyboardAvoidingView, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {phoneLoginStyles} from './loginStyles';

class PhoneLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: '',
      mobileNumberError: '',
    };
  }

  validate() {
    const {mobileNumber} = this.state;
    if (mobileNumber == '') {
      this.setState({
        mobileNumberError: 'Required',
      });
    }
  }
  render() {
    const errorIcon = (
      <Icon
        name="exclamation-triangle"
        size={20}
        color={'red'}
        style={phoneLoginStyles.errorIcon}></Icon>
    );
    return (
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/images/mobileLogin.jpg')}
        style={phoneLoginStyles.phoneImage}>
        <KeyboardAvoidingView>
          <Text style={phoneLoginStyles.imageText}>
            Easy discover new places and travel around world with your family or
            friends
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder={'Enter your mobile number'}
              placeholderTextColor="white"
              style={[
                phoneLoginStyles.mobileInput,
                this.state.mobileNumberError
                  ? phoneLoginStyles.emptyField
                  : null,
              ]}
              onChangeText={(mobileNumber) => {
                if (mobileNumber != '-' && mobileNumber != '.')
                  this.setState({mobileNumber});
              }}
              value={this.state.mobileNumber}
              keyboardType="number-pad"
              maxLength={10}
            />
            {this.state.mobileNumberError ? errorIcon : null}
          </View>
          <View style={phoneLoginStyles.buttonContainer}>
            <TouchableOpacity style={phoneLoginStyles.floatingButton}>
              <Icon
                name="chevron-right"
                style={phoneLoginStyles.chevronIcon}></Icon>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

export default PhoneLogin;
