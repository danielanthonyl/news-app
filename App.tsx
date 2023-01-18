import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from './src/navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
