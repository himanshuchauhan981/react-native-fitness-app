import React, {Component} from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

class Login extends Component {
  static navigationOption = ({navigation}) => ({
    loginMethod: navigation.state.params.loginMethod,
  });
  constructor(props) {
    super(props);
    this.state = {
      loginMethod: props.route.params.loginMethod,
    };
  }

  render() {
    return <Text>Login</Text>;
  }
}

export default Login;
