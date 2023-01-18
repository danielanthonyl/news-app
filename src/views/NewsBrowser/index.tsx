import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {Card, Input} from '../../components';
import {Button} from '../../components/Button';
import {fetchNewsService} from '../../services/fetchNews/fetchNewsService';
import styles from './styles';
import {ICardProps} from '../../components/Card/types';
import {FlatList} from 'react-native-gesture-handler';

export const NewsBrowser = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState<ICardProps[]>([]);

  const onPressHandler = async () => {
    const res = await fetchNewsService(
      `/everything?q=${input}&from=2023-01-18&sortBy=popularity`,
    );

    setData(res.articles);
  };

  return (
    <SafeAreaView>
      <View style={styles.form}>
        <Input value={input} onChangeText={setInput} />
        <Button onPress={onPressHandler} title="Search" />
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Card {...item} key={Date.now() * Math.random()} />
        )}
      />
    </SafeAreaView>
  );
};
