import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import myImage from './assets/mia-bg.jpg';
const { width, height } = Image.resolveAssetSource(myImage);

const win = Dimensions.get('window');
const ratio = win.width/580; //580 is actual image width

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.miaDialogue}>
        <Text style={styles.h1}>Dialogs ar asistentu #MiaVoice</Text>
        <Image source={require('./assets/mia-bg.jpg')} style={styles.image}/>
      </View>
      <Text hidden>1. Pamošanās 07:00 (ieplānots) 07:03 (izdarīts);</Text>
      <Text>2. Ūdens uzņemšana 07:05 (ieplānots) 07:04 (izdarītsg);</Text>
      <Text>3. Datora ieslēgšana, piebīdīšana 07:10 (ieplānots) 07:11 (izdarīts);</Text>
      <Text>4. Tējas dzeršana 07:15 (ieplānots) Artis: "Mija, es negribu tēju".  ??:?? (nav izdarīts, nav obligāti);</Text>
      <Text>5. Pnnnnozicionēšana no muguras uz labo sānu 07:45 (ieplānots) 07:50 (izdarīts);</Text>
      <Text>6. Brokastis 08:00 (ieplānots) Artis: "Negribu". ??:?? (nav izdarīts, pierakstīts kā atgādinājums 08:30);</Text>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 150, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 100, backgroundColor: 'steelblue'}} />
      </View>
      <StatusBar hidden/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  h1: {
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  miaDialogue: {
    width: Dimensions.get('window').width,
    //marginHorizontal: 12,
  },
  ex: {
//alignItems: 'stretch',//width: undefined,//Dimensions.get('window').width,
//height: Dimensions.get('window').height
},
  image: {
      flex: 1,
      alignSelf: 'stretch',
      width: win.width,
      height: 210 * ratio, //362 is actual height of image
  },
});
