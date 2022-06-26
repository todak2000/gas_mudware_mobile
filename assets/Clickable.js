import React from 'react'
import { StyleSheet, View} from 'react-native'
import Svg, { Path, Rect} from 'react-native-svg';

 function Clickable(props){
     const {color} = props
    return (

        <View>
            <Svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Rect x="0.5" y="0.5" width="131" height="131" rx="19.5" fill="#F6F6FD" stroke={color}/>
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M65.829 87.1117C61.9538 82.9876 55.0965 74.381 52.9011 63.2682H78.7868C76.5649 74.2567 69.6985 82.9396 65.829 87.1117ZM65.8532 93C65.8532 93 83.7075 77.6496 83.7075 56.2543C83.7075 46.7252 75.3826 39 65.8532 39C56.3246 39 48 46.7248 48 56.2543C48 77.9968 65.8532 93 65.8532 93Z" fill={color}/>
            </Svg>

        </View>
        
    )
}
export default Clickable
