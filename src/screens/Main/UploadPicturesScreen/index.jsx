
import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Alert,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

import { launchImageLibrary } from 'react-native-image-picker';

import styles from './styles';

const UploadPicturesScreen = ({ navigation }) => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Open Phone Gallery
  const openGallery = async () => {

    try {

      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.8,
        selectionLimit: 1,
      });

      if (result.didCancel) {
        return;
      }

      if (result.errorCode) {
        Alert.alert('Error', result.errorMessage);
        return;
      }

      if (result.assets && result.assets.length > 0) {
        setSelectedImage(result.assets[0].uri);
      }

    } catch (error) {
      Alert.alert('Error', 'Unable to open gallery');
    }

  };

  // Upload Image
  const handleUpload = () => {

    if (!selectedImage) {
      Alert.alert(
        'No Image',
        'Please select an image first'
      );
      return;
    }

    setLoading(true);

    navigation.navigate({
      name: 'EventDetailsScreen',
      params: {
        uploadedImage: selectedImage,
      },
      merge: true,
    });

    setLoading(false);
  };

  return (

    <View style={styles.container}>

      <StatusBar
        backgroundColor="#100B14"
        barStyle="light-content"
      />

      <View style={styles.mainContainer}>

        {/* Header */}

        <View style={styles.header}>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            ADD EVENT PICTURE
          </Text>

          <View style={styles.emptySpace} />

        </View>

    

        

        {/* Image Preview */}

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={openGallery}
          style={styles.imagePicker}
        >

          {selectedImage ? (

            <Image
              source={{ uri: selectedImage }}
              style={styles.previewImage}
            />

          ) : (

            <View style={styles.placeholderContainer}>

              <View style={styles.uploadIconContainer}>
                <Text style={styles.uploadIcon}>+</Text>
              </View>

              <Text style={styles.chooseText}>
                Tab to upload pictures
              </Text>

            

            </View>

          )}

        </TouchableOpacity>

        {/* Image Selected Text */}

        {selectedImage && (
          <Text style={styles.selectedText}>
            Image selected successfully!
          </Text>
        )}

        {/* Select Button */}

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={openGallery}
          style={styles.selectButton}
        >

          <Text style={styles.selectButtonText}>
            Select From Gallery
          </Text>

        </TouchableOpacity>

        {/* Upload Button */}

        <TouchableOpacity
          activeOpacity={0.8}
          disabled={loading}
          onPress={handleUpload}
          style={styles.uploadButton}
        >

          {loading ? (

            <ActivityIndicator color="#FFFFFF" />

          ) : (

            <Text style={styles.uploadButtonText}>
              Upload Image
            </Text>

          )}

        </TouchableOpacity>

         <TouchableOpacity
            activeOpacity={0.8}
             onPress={() => navigation.navigate('NotificationScreen')}
                style={styles.notificationButton}
       >

                <Text style={styles.notificationButtonText}>
                Go to Notifications
                   </Text>

             </TouchableOpacity>

        {/* Bottom Text */}

        <Text style={styles.bottomText}>
          Supported format: JPG, PNG, JPEG
        </Text>

      </View>


      {/* Notification Button */}

       

    </View>

  );

};

export default UploadPicturesScreen;
