import React from 'react'
import { StyleSheet, View} from 'react-native'
import Svg, { Path} from 'react-native-svg';

 function LogoHeader(props){
     const {color} = props
    return (

        <View >
            <Svg width="36" height="54" viewBox="0 0 36 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd"  clipRule="evenodd" d="M18.1214 48.1117C14.2463 43.9876 7.38894 35.381 5.19358 24.2682L31.0793 24.2682C28.8574 35.2567 21.991 43.9396 18.1214 48.1117V48.1117ZM18.1457 54C18.1457 54 36 38.6496 36 17.2543C36 7.72521 27.6751 -8.04663e-06 18.1457 -8.04663e-06C8.61707 -8.04663e-06 0.292496 7.72478 0.292496 17.2543C0.292496 38.9968 18.1457 54 18.1457 54" fill={color}/>
            </Svg>


        </View>
        
    )
}
export default LogoHeader