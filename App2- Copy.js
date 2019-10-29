/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//komentar 1 baris
/* komentar banyak baris
*/

export default class App extends Component {
  // state = {
  //   myState: 'Ini Adalah komponen dibuat dg state'
  // }

  // updateState = () => this.setState({
  //   myState: 'Isi state berubah'
  // });

  state: { //mendeklarasikan variable
    password: String,
    isPasswordVisible: Boolean, //true or false
    toogleText: String,
  }

constructor(props: props) {
  super(props);
  this.state = { //memberi nilai awal
    password: '',
    isPasswordVisible: true,
    toggleText: 'Show'
  };
}

updateState = () => {
  const{isPasswordVisible} = this.state;
  if(isPasswordVisible) {
    this.setState({ isPasswordVisible: false});
    this.setState({ toogleText: 'Hide'});
  } else {
    this.setState({ isPasswordVisible: true});
    this.setState({ toogleText: 'Show'});
  }
}

  render() {
    return (
      <View style={styles.container}>
        {/* <Text onPress={this.updateState}>{this.state.myState}</Text> */}

        <TextInput
          secureTextEntry={this.state.isPasswordVisible}
          style={{width: 300, height: 50,
          backgroundColor: '#000000', color: 'white', fontSize: 20}}
        />

        <TouchableOpacity onPress={this.updateState}>
          <Text style={{fontSize: 20}}> {this.state.toogleText} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
