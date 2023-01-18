import {StyleSheet} from 'react-native';
import {Colors, Measurements} from '../../constants';

const {black, white} = Colors;
const {mediumHeight, padding, borderRadius} = Measurements;
export default StyleSheet.create({
  button: {
    backgroundColor: black,
    height: mediumHeight,
    alignItems: 'center',
    justifyContent: 'center',
    padding,
    borderRadius,
    marginLeft: 10,
  },
  buttonTitle: {
    color: white,
  },
});
