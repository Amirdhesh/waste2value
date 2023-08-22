import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const imagePicker= new ImagePicker();
  const handleImagePicker = async () => {
    try {
      const image = await imagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      setSelectedImage(image);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage.path }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <Button title="Pick an Image" onPress={handleImagePicker} />
    </View>
  );
};

export default ImageUpload;
