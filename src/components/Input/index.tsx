import {TextInput} from 'react-native';
import {IInputProps} from './types';

export const Input = ({...rest}: IInputProps) => {
  return <TextInput {...rest} />;
};
