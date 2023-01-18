import {RectButton} from 'react-native-gesture-handler';
import {Text} from 'react-native';
import {IButtonProps} from './types';
import styles from './styles';

export const Button = (props: IButtonProps) => {
  return (
    <RectButton style={styles.button} {...props}>
      <Text style={styles.buttonTitle}>{props.title}</Text>
    </RectButton>
  );
};
