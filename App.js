import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TextComponent, FlatList, Button} from 'react-native';
import { React } from 'react';

const Col = ({ numRows, children}) => {
  return (
    <View style={styles[`${numRows}col`]}>{children}</View>
  )
}

const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)

export default function App() {

  return (
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
          <TextInput style={styles.input} keyboardType="numeric" textAlign='center' placeholder='Minutes of Work'></TextInput>
        </Col>
        <Col numRows={3}>
          <TextInput style={styles.input} keyboardType="numeric" textAlign='center' placeholder='Minutes of Break'></TextInput>
        </Col>
      </Row>
      <Row>
        <Col numRows={4}>
          <Button title ="Start"/>
        </Col>
      </Row>
      <StatusBar style="auto" />
    </View>
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
    fontSize: 50,
    color:'#000000'
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
