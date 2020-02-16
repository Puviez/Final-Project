import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Button extends React.Component {
   render () {
       return (
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
       )
   }
}

const styles = StyleSheet.create ({
  button: {
    padding:10,
	  backgroundColor: 'darkblue',
    borderRadius:5,
    width: 250,
    height: 48,
  },

  text: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
  }
})
export default Button