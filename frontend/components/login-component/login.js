import React, {Component} from 'react';
import EmailLogin from './emailLogin';
import PhoneLogin from './phoneLogin';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginMethod: props.route.params.loginMethod,
    };
  }

  render() {
    if (this.state.loginMethod == 'email') {
      return <EmailLogin />;
    } else {
      return <PhoneLogin />;
    }
  }
}

export default Login;
