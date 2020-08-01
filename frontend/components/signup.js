import React, {Component} from 'react';
import {Text, ImageBackground, StyleSheet, View, TextInput} from 'react-native';

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
        style={styles.backgroundImage}
        source={require('../assets/images/signupBackground.jpg')}>
        <View style={styles.card}>
          <Text style={styles.signupHeader}>Sign Up</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: 'white',
  },
  signupHeader: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Signup;
