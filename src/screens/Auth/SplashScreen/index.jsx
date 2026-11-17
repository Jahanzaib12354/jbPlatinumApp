
// import React from 'react';

// import {
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';

// import styles from './styles';

// const SplashScreen = () => {
//   return (
//     <LinearGradient
//       colors={['#102326', '#020204', '#30052F']}
//       locations={[0, 0.55, 1]}
//       style={styles.container}
//     >
//       <StatusBar hidden />

//       {/* Logo and App Name */}
//       <View style={styles.centerContainer}>

//         <View style={styles.logoOuter}>
//           <View style={styles.logoInner}>
//             <Text style={styles.logoText}>JB</Text>
//           </View>
//         </View>

//         <Text style={styles.appName}>
//           JB PLATINIUM
//         </Text>

//       </View>

//       {/* Bottom Loading Line */}
//       <View style={styles.loadingContainer}>
//         <View style={styles.loadingBackground}>
//           <View style={styles.loadingProgress} />
//         </View>
//       </View>

//     </LinearGradient>
//   );
// };

// export default SplashScreen;


import React, { useEffect } from 'react';

import {
  View,
  Text,
  StatusBar,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#102326', '#020204', '#30052F']}
      locations={[0, 0.55, 1]}
      style={styles.container}
    >
      <StatusBar hidden />

      {/* Logo and App Name */}
      <View style={styles.centerContainer}>

        <View style={styles.logoOuter}>
          <View style={styles.logoInner}>
            <Text style={styles.logoText}>JB</Text>
          </View>
        </View>

        <Text style={styles.appName}>
          JB PLATINIUM
        </Text>

      </View>

      {/* Bottom Loading Line */}
      <View style={styles.loadingContainer}>
        <View style={styles.loadingBackground}>
          <View style={styles.loadingProgress} />
        </View>
      </View>

    </LinearGradient>
  );
};

export default SplashScreen;