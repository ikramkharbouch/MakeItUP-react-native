import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Container,
  StatusBar
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      status: true
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          margin: 10
        }}
      >
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <Text
          style={{
            marginBottom: 30,
            color: "pink",
            fontSize: 40
          }}
        >
          MakeItUp
        </Text>
        <TextInput
          placeholder="Username"
          style={styles.input}
          onChangeText={text => this.setState({ username: text })}
          value={this.state.username}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <TextInput
            secureTextEntry={this.state.status}
            placeholder="Password"
            style={[styles.input, { width: "70%" }]}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
          />
          <Text
            onPress={() => {
              this.setState({ status: !this.state.status });
            }}
          >
            Show/Hide
          </Text>
        </View>
        <View style={{ width: "100%", marginTop: 20 }}>
          <Button
            title="Submit"
            color="pink"
            onPress={() => {
              alert(
                "Username: " +
                  this.state.username +
                  ", Password: " +
                  this.state.password
              );
            }}
            style={styles.button}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    borderColor: "#D3D3D3",
    borderRadius: 5
  },
  button: {
    borderRadius: 5
  }
});
