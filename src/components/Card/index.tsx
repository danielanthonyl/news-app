import {Text, View} from 'react-native';
import styles from './styles';
import {ICardProps} from './types';

export const Card = ({
  author,
  content,
  description,
  publishedAt,
  // source,
  // urlToImage,
  title,
  url,
}: ICardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.content}>{content}</Text>
      <Text style={styles.url}>{url}</Text>
      <Text style={styles.publishedAt}>{publishedAt}</Text>
    </View>
  );
};
