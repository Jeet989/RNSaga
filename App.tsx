import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Counter from './src/screens/Counter';


const App: React.FC = () => {

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App;