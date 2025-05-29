import { Dimensions, Text, View } from 'react-native';
import TipCalculator from './fromulario';
import Svg, { Path } from 'react-native-svg';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const ScreenContent = () => {
  return (
    <View className='grid place-content-center h-full bg-rose-500 pt-10'>
      
      <Svg height={100} width={Dimensions.get("screen").width} viewBox="0 0 1440 340">
        <FontAwesome5 name="raspberry-pi" size={32} color="black" className="self-center pt-2"/>
        <Path fill="#04ff00" fill-opacity="1" d="M0,128L17.1,149.3C34.3,171,69,213,103,224C137.1,235,171,213,206,224C240,235,274,277,309,293.3C342.9,309,377,299,411,250.7C445.7,203,480,117,514,85.3C548.6,53,583,75,617,122.7C651.4,171,686,245,720,277.3C754.3,309,789,299,823,277.3C857.1,256,891,224,926,192C960,160,994,128,1029,144C1062.9,160,1097,224,1131,224C1165.7,224,1200,160,1234,160C1268.6,160,1303,224,1337,218.7C1371.4,213,1406,139,1423,101.3L1440,64L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></Path>
      </Svg> 
      <TipCalculator/>
    </View>
  );
};