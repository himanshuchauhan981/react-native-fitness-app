import {StyleSheet} from 'react-native';

const signupStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#009688',
  },
  signupHeader: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingHorizontal: 25,
    paddingBottom: 25,
  },
  title: {
    fontSize: 40,
    color: 'white',
  },
  subTitle: {
    fontSize: 20,
    marginTop: 5,
    color: '#E9E7E7',
  },
  card: {
    flex: 6,
    backgroundColor: 'white',
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  label: {
    marginLeft: 5,
    fontSize: 16,
  },
});

export {signupStyles};
