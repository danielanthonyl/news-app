import {Dimensions} from 'react-native';

export const height = (size: number) =>
  Dimensions.get('window').height * (size / 100);

export const width = (size: number) =>
  Dimensions.get('window').width * (size / 100);
