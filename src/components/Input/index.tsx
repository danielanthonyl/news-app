import {TextInput, View} from 'react-native';
import {IInputProps} from './types';
import styles from './styles';

export const Input = ({...rest}: IInputProps) => {
  return (
    <View>
      <TextInput style={styles.input} {...rest} />
    </View>
  );
};
