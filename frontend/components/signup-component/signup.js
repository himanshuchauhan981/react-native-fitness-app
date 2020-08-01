import React, {Component} from 'react';
import {Text, ImageBackground, View} from 'react-native';
import {signupStyles} from './signupStyles';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }
  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        style={signupStyles.backgroundImage}
        source={require('../../assets/images/signupBackground.jpg')}>
        <View style={signupStyles.card}>
          <Text style={signupStyles.signupHeader}>Sign Up</Text>
        </View>
      </ImageBackground>
    );
  }
}

export default Signup;
