
import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Keyboard,
  Alert,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import WebView from 'react-native-webview';

import styles from './styles';

const WebViewScreen = ({navigation}) => {
  const [url, setUrl] = useState('https://www.lipsum.com/');
  const [currentUrl, setCurrentUrl] = useState('https://www.lipsum.com/');

  const openWebsite = () => {
    Keyboard.dismiss();

    let website = url.trim();

    if (!website) {
      Alert.alert('Error', 'Please enter website URL');
      return;
    }

    if (!/^https?:\/\//i.test(website)) {
      website = `https://${website}`;
    }

    setUrl(website);
    setCurrentUrl(website);
  };

  return (
    <LinearGradient
      colors={['#24444D', '#050A0C', '#000000', '#4B0F57']}
      style={styles.container}>

      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        
        <TouchableOpacity onPress={() => navigation.goBack()}>
  <Icon name="arrow-back" size={23} color="#FFFFFF" />
</TouchableOpacity>

        <Text style={styles.headerTitle}>Web Browser</Text>
      </View>

      {/* URL Input */}
      <View style={styles.urlContainer}>
        <View style={styles.urlInputContainer}>
          <TextInput
            style={styles.urlInput}
            placeholder="Enter website URL"
            placeholderTextColor="#AAB2D5"
            value={url}
            onChangeText={setUrl}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="url"
            returnKeyType="go"
            onSubmitEditing={openWebsite}
          />
        </View>

        <TouchableOpacity
          style={styles.openButton}
          onPress={openWebsite}>
          <Icon name="arrow-forward" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* WebView */}
      <View style={styles.webViewContainer}>
        <WebView
          source={{uri: currentUrl}}
          style={styles.webView}
          javaScriptEnabled
          domStorageEnabled
        />
      </View>

    </LinearGradient>
  );
};

export default WebViewScreen;
