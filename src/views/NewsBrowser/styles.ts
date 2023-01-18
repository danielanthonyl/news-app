import {StyleSheet} from 'react-native';
import {Measurements} from '../../constants';

const {padding} = Measurements;
export default StyleSheet.create({
  form: {
    flexDirection: 'row',
    padding,
    justifyContent: 'center',
  },
});
