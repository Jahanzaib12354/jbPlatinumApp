import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const slides = [
  {
    image: require('../../../assets/img1.png'),
    title: 'CHICAGO STEPPIN CULTURE',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
  },
  {
    image: require('../../../assets/img2.png'),
    title: 'FIND YOUR EVENTS',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
  },
  {
    image: require('../../../assets/img3.png'),
    title: 'JOIN THE COMMUNITY',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
  },
];

const HomeScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const isLast = index === slides.length - 1;

  const handleNext = () => {
    if (isLast) {
      navigation.replace('LoginScreen');
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <LinearGradient
      colors={['#102326', '#020204', '#30052F']}
      locations={[0, 0.55, 1]}
      style={styles.container}
    >
      <StatusBar hidden />

      {/* Image Card */}
      <View style={styles.imageFrame}>
        <Image
          source={slide.image}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Title + Description */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{slide.title}</Text>
        <Text style={styles.description}>{slide.description}</Text>
      </View>

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, index === i && styles.activeDot]}
          />
        ))}
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.85}
        onPress={handleNext}
      >
        <Text style={styles.buttonText}>
          →   {isLast ? 'GET STARTED' : 'NEXT'}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default HomeScreen;