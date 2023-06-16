import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TextComponent, FlatList, Button, TouchableHighlightBase, InputAccessoryView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { React, useState, useEffect } from 'react';

const Col = ({ numRows, children}) => {
  return (
    <View style={styles[`${numRows}col`]}>{children}</View>
  )
}

const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)

export default function App() {

  const [buttonTitle, setButtonTitle] = useState('Start');

  const changeTitle = () => {
    if(buttonTitle == 'Start'){
      setButtonTitle('Stop');
      startTimer();
      if(secondsOfWork < 10){
        
      }
      if(secondsOfBreak < 10){
        
      }
    }
    else{ 
      setButtonTitle('Start');
      stopTimer();
    }
  };

  const[isTextFieldVisible, setIsTextFieldVisible] = useState(true);
  const[isTimeVisible, setIsTimeVisible] = useState(false);

    const [minutesOfWork, setMinutesOfWork] = useState(0)
    const [minutesOfBreak, setMinutesOfBreak] = useState(0)
    const [secondsOfWork, setSecondsOfWork] = useState(0)
    const [secondsOfBreak, setSecondsOfBreak] = useState(0)

  const startTimer = () => {
    setIsTextFieldVisible(false);
    setIsTimeVisible(true);
    setMinutesOfWork(minutesOfWork)
    if(secondsOfWork < 10){
    setSecondsOfWork(secondsOfWork.toString().padStart(2, 0));
    }
    if(secondsOfBreak < 10){
    setSecondsOfBreak(secondsOfBreak.toString().padStart(2, 0));
    }
    }
  

  const stopTimer = () => {
    setIsTimeVisible(false);
    setIsTextFieldVisible(true);
  }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.app}>
      <Row>
        <Col numRows={1}>
          <Text style={styles.TitleText}>Pomodoro Timer</Text>
        </Col>
      </Row>
      <Row>
        <Col numRows={2}>
          <Text style={styles.WorkBreak}>Work</Text>
        </Col>  
        <Col numRows={2}>
          <Text style={styles.WorkBreak}>Break</Text>
        </Col>
      </Row>
      <Row>
        <Col numRows={3}>
          {isTextFieldVisible && (
          <TextInput style={styles.input} keyboardType="numeric" textAlign='center' placeholder='Minutes of Work' onChangeText={setMinutesOfWork} value={minutesOfWork}></TextInput>
          )}
          {isTimeVisible && (
            <Text style={styles.time} textAlign='center'>{minutesOfWork}:{secondsOfWork}</Text>
          )}
        </Col>
        <Col numRows={3}>
          {isTextFieldVisible && (
          <TextInput style={styles.input} keyboardType="numeric" textAlign='center' placeholder='Minutes of Break' onChangeText={setMinutesOfBreak} value={minutesOfBreak}></TextInput>
          )}
          {isTimeVisible && (
            <Text style={styles.time} textAlign='center'>{minutesOfBreak}:{secondsOfBreak}</Text>
          )}
        </Col>
      </Row>
      <Row>
        <Col numRows={4}>
          <Button title={buttonTitle} onPress={changeTitle}/>
        </Col>
      </Row>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );

}


const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#131313',
    alignItems: 'center',
    justifyContent: 'top',
    padding: '5%',
  },
  TitleText:{
    fontSize:50,
    color: '#fff',
    textAlign:'center'
  },
  WorkBreak:{
    color:'#fff',
    margin:'5%',
    fontSize:50
  },
  input:{
    backgroundColor: '#fff',
    width:'75%',
    height:'25%',
    margin:'15%',
    fontSize: 35,
    color:'#000000'
  },
  time:{
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
    marginTop: '25%',
  },
  row:{
    flexDirection: "row"
  },
  "1col":{
    color:'#fff',
    fontSize:50,
    flex:1
  },
  "2col":{
    width:'100%',
    height:100,
    alignItems:'center',
    backgroundColor:'#131313',
    flex:2
  },
  "3col":{
    width:'100%',
    height:500,
    backgroundColor:'#131313',
    flex:2
  },
  "4col":{
    flex:2,
    margin:'-25%',
  }
});
