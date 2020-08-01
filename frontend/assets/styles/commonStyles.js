import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  emptyField: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorIcon: {
    position: 'relative',
    right: 35,
    top: 12,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
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
    // paddingTop: 5,
    // paddingBottom: 15,
  },
  flexrow: {
    flexDirection: 'row',
  },
  errorIcon: {
    position: 'relative',
    right: 35,
    top: 12,
  },
  button: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 1,
    color: 'white',
  },
});

export {commonStyles};
