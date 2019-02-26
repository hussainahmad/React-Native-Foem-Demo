/* @flow */

import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput, Button} from 'react-native-paper';


export default class App extends React.Component {
  static title = 'TextInput';

  state = {
    name: '',
    lastName:'',
    phone:'',
    email:'',
    states:'',
    password:'',
    repeatPassword:'',
  };

  render() {

    return (
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior="padding"
        keyboardVerticalOffset={80}
      >
        <ScrollView
          style={[styles.container, { backgroundColor: '#bdda' }]}
          keyboardShouldPersistTaps={'always'}
          removeClippedSubviews={false}
        >
          <TextInput
            style={styles.inputContainerStyle}
            label="First Name"
            placeholder="Type First Name"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            returnKeyType={"next"}
            onSubmitEditing={() => { this.lastName.focus() }}
            blurOnSubmit={false}
          />

          <TextInput
            style={styles.inputContainerStyle}
            label="Last Name"
            placeholder="Type Last Name"
            value={this.state.lastName}
            onChangeText={lastName => this.setState({ lastName })}
            ref={(input) => { this.lastName = input; }}
            onSubmitEditing={() => { this.phone.focus() }}
            returnKeyType={"next"}
            blurOnSubmit={false}
          />

          <TextInput
            style={styles.inputContainerStyle}
            label="Phone"
            placeholder="Type Phone"
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
            ref={(input) => { this.phone = input; }}
            onSubmitEditing={() => { this.email.focus() }}
            returnKeyType={"next"}
            blurOnSubmit={false}
          />

          <TextInput
            style={styles.inputContainerStyle}
            label="Email"
            placeholder="Type Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            ref={(input) => { this.email = input; }}
            onSubmitEditing={() => { this.states.focus() }}
            returnKeyType={"next"}
            blurOnSubmit={false}
            
          />

          <TextInput
            style={styles.inputContainerStyle}
            label="State"
            placeholder="Type State"
            value={this.state.states}
            onChangeText={states => this.setState({ states })}
            ref={(input) => { this.states = input; }}
            onSubmitEditing={() => { this.password.focus() }}
            returnKeyType={"next"}
            blurOnSubmit={false}
          />

          <TextInput
            style={styles.inputContainerStyle}
            label="Password"
            placeholder="Type Password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            ref={(input) => { this.password = input; }}
            onSubmitEditing={() => { this.repeatPassword.focus() }}
            returnKeyType={"next"}
            blurOnSubmit={false}
          />

          <TextInput
            style={styles.inputContainerStyle}
            label="Repeat Password"
            placeholder="Type Repeat Password"
            secureTextEntry={true}
            value={this.state.repeatPassword}
            onChangeText={repeatPassword => this.setState({ repeatPassword })}
            ref={(input) => { this.repeatPassword = input; }}
            returnKeyType={"done"}
            blurOnSubmit={true}
          />

          <Button onPress={() => alert('I am pressed :P-')} style={{marginTop:20}}>
              Submit
            </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    marginTop:40,
  },
  wrapper: {
    flex: 1,
  },
  inputContainerStyle: {
    margin: 8,
  },
});