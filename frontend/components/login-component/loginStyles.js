import {StyleSheet} from 'react-native';

const emailLoginStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EFECEC',
  },
  loginHeading: {
    fontSize: 36,
    letterSpacing: 2,
    textAlign: 'center',
  },
  image: {
    flex: 2,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  inputContainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 14,
    elevation: 8,
  },
  loginInput: {
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 30,
    borderColor: '#DEDBDB',
  },
  mb14: {
    marginBottom: 14,
  },
  cardBottomText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 15,
  },
  label: {
    marginTop: 6,
  },
  loginButton: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 1,
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
});

const phoneLoginStyles = StyleSheet.create({
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

export {emailLoginStyles, phoneLoginStyles};
