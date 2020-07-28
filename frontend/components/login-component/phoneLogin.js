import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
        style={styles.errorIcon}></Icon>
    );
    return (
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/images/mobileLogin.jpg')}
        style={styles.phoneImage}>
        <KeyboardAvoidingView>
          <Text style={styles.imageText}>
            Easy discover new places and travel around world with your family or
            friends
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              placeholder={'Enter your mobile number'}
              placeholderTextColor="white"
              style={[
                styles.mobileInput,
                this.state.mobileNumberError ? styles.emptyField : null,
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
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.floatingButton}>
              <Icon name="chevron-right" style={styles.chevronIcon}></Icon>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  phoneImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    paddingBottom: '10%',
  },
  imageText: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  mobileInput: {
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 30,
    borderColor: '#DEDBDB',
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
  buttonContainer: {
    flexDirection: 'row-reverse',
    paddingVertical: 30,
  },
  floatingButton: {
    padding: 10,
    backgroundColor: '#2EE9D1',
    width: 50,
    height: 50,
    justifyContent: 'center',
    borderRadius: 40,
    elevation: 10,
  },
  chevronIcon: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default PhoneLogin;
