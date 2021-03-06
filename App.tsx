import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

import { Audio } from 'expo-av';

import * as Font from 'expo-font';

class Barry extends React.Component {
  public hello: Audio.Sound;

  public sounds: string[];

  async componentDidMount() {
    this.hello = new Audio.Sound();
  }

  async playBruh() {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./assets/sounds/effects/bruh.mp3'));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }

  render() {
    return (

    
      <TouchableWithoutFeedback onPress={this.playBruh}>
        <View>
          
  
          <Image 
            style={styles.barry}
            source={require('./assets/images/Barry.png')} />
  
        </View>
      </TouchableWithoutFeedback>
    );
  } 
}

export default class App extends React.Component {

  state = {
    fontLoaded: false,
    soundLoaded: false,
  };

  public hello: Audio.Sound;
  private urmom: number;
  
  async componentDidMount() {
    await Font.loadAsync({
      'Ruluko': require('./assets/fonts/Ruluko-Regular.ttf'),
    });
    
    
    

    this.setState({ fontLoaded: true, soundLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.fontLoaded ? (
            <Text style={styles.header}>Vary Barry</Text>
          ) : null
        }

        <Barry />
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    width: 324,
    height: 95,
    top: 100,
    fontFamily: 'Ruluko',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 72,
    lineHeight: 83,
    textAlign: 'center',
    color: '#000'
  },
  barry: {
    top: -69,
    width: 250,
    height: 325
  }
});
