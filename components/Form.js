import React, {useState} from 'react'
import { Text,StyleSheet, View, TouchableOpacity, TextInput} from 'react-native'
import LogoHeader from "../assets/LogoHeader";
import BackButton from '../assets/BackButton';
import Exclaim from '../assets/Exclaim';
import Dot from '../assets/Dot';
import { Formik } from 'formik';
import { gasBasedAI } from '../Logic/GasBasedAI';
export default function Form({route, navigation}) {
  const [showResult, setShowResult] = useState(false)
  const [answer, setAnswer] = useState('');
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <BackButton color={route.params.color}/>
        </TouchableOpacity>
        <View style={styles.logoDiv}>
          <LogoHeader color={route.params.color}/>
          <Text style={styles.headerTextYellow}>Gas Viscosity</Text>
        </View>
          {
            showResult ? 
            <View style={styles.result}>
              <View style={route.params.color === "#4473B7" ? styles.resultCardBlue:styles.resultCardYellow}>
                <Text style={route.params.color === "#4473B7" ? styles.resultfinalBlue:styles.resultfinalYellow}> <Dot color={route.params.color}/> Gas Viscosity</Text>
                <Text style={route.params.color === "#4473B7" ? styles.resultcpBlue:styles.resultcpYellow}>{answer}  <Text style={route.params.color === "#4473B7" ? styles.resultcpaBlue:styles.resultcpaYellow}>cP</Text></Text>
              </View>
            </View>
            :
            <>
              <View style={styles.topTextDiv}>
            <Exclaim color={route.params.color}/>
            <Text style={styles.topText}>Kindly check that the units are exact and correspond accordingly</Text>
          </View>

          <Formik
            initialValues={{ pressure: '', temperature:'', den:''}}
            onSubmit={values => {
              if(values.pressure !=='' & values.temperature !=='' & values.den !==''){
                const data = {
                  pressure: values.pressure,
                  temperature: values.temperature,
                  den: values.den,
                }
                setShowResult(true)
                console.log(gasBasedAI(values.pressure,values.temperature,values.den), "oil based result")
                setAnswer(gasBasedAI(values.pressure,values.temperature,values.den))
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <View>
                  <Text style={styles.formText}>Pressure (psi)</Text>
                  <TextInput
                    onChangeText={handleChange('pressure')}
                    onBlur={handleBlur('pressure')}
                    value={values.pressure}
                    style={styles.formInput}
                    placeholder="e.g. 1035"
                    maxLength={5}
                    autoCapitalize='none'
                    autoCorrect={false}
                  />
                </View>

                <View>
                  <Text style={styles.formText}>Temperature (F)</Text>
                  <TextInput
                    onChangeText={handleChange('temperature')}
                    onBlur={handleBlur('temperature')}
                    value={values.temperature}
                    style={styles.formInput}
                    placeholder="e.g. 90"
                    maxLength={5}
                    autoCapitalize='none'
                    autoCorrect={false}
                  />
                </View>

                <View>
                  <Text style={styles.formText}>Density (gm/ml)</Text>
                  <TextInput
                    onChangeText={handleChange('den')}
                    onBlur={handleBlur('den')}
                    value={values.den}
                    placeholder="e.g. 3.5"
                    style={styles.formInput}
                    maxLength={7}
                    autoCapitalize='none'
                    autoCorrect={false}
                  />
                </View>

                  {route.params.color == "#4473B7"?
                    <TouchableOpacity 
                      disabled={values.den == '' || values.pressure == '' || values.temperature == '' ? true : false}
                      style={values.den == '' || values.pressure == '' || values.temperature == '' ? styles.buttonContainerAsh : styles.buttonContainer}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.buttonText}>Calculate</Text>
                  </TouchableOpacity>
                    :
                    <TouchableOpacity 
                      disabled={values.den == '' || values.pressure == '' || values.temperature == '' ? true : false}
                      style={values.den == '' || values.pressure == '' || values.temperature == '' ? styles.buttonContainerAsh : styles.buttonContainerYellow}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.buttonText}>Calculate</Text>
                    </TouchableOpacity>
                  }
                    {/* <Text style={styles.switchText}>Switch to <Text style={route.params.color == "#4473B7"? styles.oilText :styles.waterText} onPress={()=>{navigation.navigate("Form",{color: route.params.color == "#4473B7"? "#B7447B" :"#4473B7"})}}>{route.params.color == "#4473B7"? "Oil" :"Water"}-based mud</Text></Text> */}
              </View>
              
            )}
          </Formik>

            </>
          }
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#fff",
      padding:"10%",
      paddingTop:"10%"
    },
    logoDiv:{
      marginTop:"5%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center"
    },
    result:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center",
      height:"70%",
    },
    topTextDiv:{
      marginTop:"5%",
      display:"flex",
      flexDirection:"row",
      alignContent:"center",
      alignItems:"center"
    },
   topText:{
      fontSize:13,
      color: "#061428",
      marginLeft:20,
    },
  
    headerTextBlue:{
      fontSize:18,
      color: "#4473B7",
    },
    headerTextYellow:{
      fontSize:18,
      color: "#B7447B",
    },
    buttonContainer: {
      width:"70%",
      marginTop:30,
      height:60,
      backgroundColor:"#4473B7",
      borderRadius: 5,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:"center",
      marginLeft:"auto",
      marginRight:"auto",
    },
    buttonContainerYellow: {
      width:"70%",
      marginTop:30,
      height:60,
      backgroundColor:"#B7447B",
      borderRadius: 5,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:"center",
      marginLeft:"auto",
      marginRight:"auto",
    },
    buttonContainerAsh: {
      width:"70%",
      marginTop:30,
      height:60,
      backgroundColor:"#E5E5E5",
      borderRadius: 5,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:"center",
      marginLeft:"auto",
      marginRight:"auto",
    },

    buttonText:{
      color:"#fff",
      fontSize: 16,
    },
    formText:{
      fontSize: 15,
      marginTop:15
    },
    formInput:{
      backgroundColor: "#FFFFFF",
      borderWidth: 1,
      borderColor:"#DADCE0",
      borderRadius: 4,
      height: 60,
      padding:10,
      paddingLeft: 30,
      fontSize: 18,
      color:"#818181",
      marginTop:10
    },
    switchText:{
      color:"#818181",
      fontSize: 14,
      textAlign:"center",
      marginTop:30
    },
    oilText:{
      color:"#E5AA33",
      fontWeight:"500"
    },
    waterText:{
      color:"#4473B7",
      fontWeight:"500"
    },
    resultCardBlue:{
      backgroundColor: "#EBF2FC",
      borderRadius: 20,
      padding:"5%",
      paddingTop:"10%",
      paddingBottom:"10%",
    },
    resultCardYellow:{
      backgroundColor: "#E1D6DB",
      borderRadius: 20,
      padding:"5%",
      paddingTop:"10%",
      paddingBottom:"10%",
    },
    resultfinalBlue:{
      fontSize:20,
      color:"#4473B7",
      marginBottom:15,
    },
    resultfinalYellow:{
      fontSize:20,
      color:"#B7447B",
      marginBottom:15,
    },
    resultcpBlue:{
      fontSize:50,
      color:"#4473B7",
      fontWeight:"bold"
    },
    resultcpYellow:{
      fontSize:50,
      color:"#B7447B",
      fontWeight:"bold"
    },
    resultcpaBlue:{
      fontSize:30,
      color:"#4473B7",
      fontWeight:"300"
    },
    resultcpaYellow:{
      fontSize:30,
      color:"#B7447B",
      fontWeight:"300"
    }
  });