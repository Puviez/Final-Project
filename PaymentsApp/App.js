import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Button from './components/Buttons.js';

class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Main Page</Text>
        <Button text={"Log In"} />
        <Button text={"Sign Up"} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
});
export default App;
