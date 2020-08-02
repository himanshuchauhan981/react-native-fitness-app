import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  emptyField: {
    borderColor: 'red',
    borderBottomWidth: 1,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    fontWeight: '500',
    textAlign: 'right',
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 0,
    paddingTop: 5,
  },
  mb14: {
    marginBottom: 14,
  },
  cardBottomText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexrow: {
    flexDirection: 'row',
  },
  button: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginTop: 6,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 1,
    color: 'white',
  },
  googleButton: {
    elevation: 1,
    borderWidth: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
    borderColor: 'grey',
  },
  googleButtonText: {
    fontSize: 16,
    letterSpacing: 1,
  },
});

export {commonStyles};
