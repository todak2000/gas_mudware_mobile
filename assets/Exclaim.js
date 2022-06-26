import React from 'react'
import { StyleSheet, View} from 'react-native'
import Svg, { Path} from 'react-native-svg';

 function Exclaim(props){
     const {color} = props
    return (

        <View >
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M11 0V2C15.39 2.54 18.5 6.53 17.96 10.92C17.5 14.56 14.64 17.43 11 17.88V19.88C16.5 19.28 20.45 14.34 19.85 8.85C19.33 4.19 15.66 0.5 11 0ZM9.00005 0C7.04005 0.18 5.19005 0.95 3.67005 2.2L5.10005 3.74C6.22005 2.84 7.57005 2.26 9.00005 2.06V0.0599999V0ZM2.26005 3.67C1.00005 5.19 0.240049 7.04 0.0500488 9H2.05005C2.24005 7.58 2.80005 6.23 3.69005 5.1L2.26005 3.67ZM0.0600488 11C0.260049 12.96 1.03005 14.81 2.27005 16.33L3.69005 14.9C2.81005 13.77 2.24005 12.42 2.06005 11H0.0600488ZM5.06005 16.37L3.67005 17.74C5.18005 19 7.04005 19.79 9.00005 20V18C7.58005 17.82 6.23005 17.25 5.10005 16.37H5.06005ZM11 11V5H9.00005V11H11ZM11 15V13H9.00005V15H11Z" fill={color}/>
            </Svg>





        </View>
        
    )
}
export default Exclaim