import React, { Component } from "react";
import { AppRegistry, View, StyleSheet } from "react-native";
import { Input } from "@youi/react-native-youi";

export default class YiReactApp extends Component {
  constructor(props) {
    super(props);

    this.messageNumber = 1;
    this.inputListeners = [];
  }

  componentDidMount() {
    this.addAllInputListeners();
  }

  componentWillUnmount() {
    this.removeAllInputListeners();
  }

  addAllInputListeners = () => {
    this.addInputListeners(["Select", "Enter"], this.onSelectPressed);
  };

  addInputListeners = (keys, callback) => {
    keys.forEach((key) => {
      this.addInputListener(key, callback);
    });
  };

  addInputListener = (key, callback) => {
    Input.addEventListener(key, callback);

    this.inputListeners.push({
      key,
      callback,
    });
  };

  removeAllInputListeners = () => {
    this.inputListeners.forEach(({key, callback}) => {
      Input.removeEventListener(key, callback);
    });

    this.inputListeners.length = 0;
  };

  removeInputListener = (key, callback) => {
    Input.removeEventListener(key, callback);

    this.inputListeners = this.inputListeners.filter(({listenerKey, listenerCallback}) => {
      return listenerKey !== key &&
              listenerCallback !== callback;
    });
  };

  onSelectPressed = () => {
    console.log(`Test message #${this.messageNumber++}, please ignore!`);
  };

  render() {
    return (
      <View style={styles.mainContainer} />
    );
  }
}

AppRegistry.registerComponent("YiReactApp", () => YiReactApp);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "blue"
  }
});
