import {StyleSheet} from 'react-native';
import {Colors, Measurements} from '../../constants';

const {black} = Colors;
const {fullWidth, padding, borderRadius, mediumHeight} = Measurements;
export default StyleSheet.create({
  input: {
    borderRadius,
    borderWidth: 1,
    borderColor: black,
    height: mediumHeight,
    width: fullWidth,
    padding,
  },
});
