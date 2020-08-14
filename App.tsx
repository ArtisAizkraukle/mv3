import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.miaDialogue}>
        <Text style={styles.h1}>Dialogs ar asistentu #MiaVoice</Text>
        <Image source={require('./img/mia-bg.jpg')} style={styles.ex}/>
      </View>
      <Text>1. Pamošanās 07:00 (ieplānots) 07:03 (izdarīts);</Text>
      <Text>2. Ūdens uzņemšana 07:05 (ieplānots) 07:04 (izdarītsg);</Text>
      <Text>3. Datora ieslēgšana, piebīdīšana 07:10 (ieplānots) 07:11 (izdarīts);</Text>
      <Text>4. Tējas dzeršana 07:15 (ieplānots) Artis: "Mija, es negribu tēju".  ??:?? (nav izdarīts, nav obligāti);</Text>
      <Text>5. Pnnnnozicionēšana no muguras uz labo sānu 07:45 (ieplānots) 07:50 (izdarīts);</Text>
      <Text>6. Brokastis 08:00 (ieplānots) Artis: "Negribu". ??:?? (nav izdarīts, pierakstīts kā atgādinājums 08:30);</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
width: undefined,//Dimensions.get('window').width,
//height: Dimensions.get('window').height
}
});
