import {StyleSheet} from 'react-native';

const signupStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    elevation: 30,
    borderRadius: 12,
  },
  signupHeader: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export {signupStyles};
