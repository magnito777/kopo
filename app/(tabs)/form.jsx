import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import { Stack } from "expo-router";
const { width } = Dimensions.get('window');

const images = [
  require('../../assets/presentation/Slide1.png'),
  require('../../assets/presentation/Slide2.png'),
  require('../../assets/presentation/Slide3.png'),
  require('../../assets/presentation/Slide4.png'),
  require('../../assets/presentation/Slide5.png'),
  require('../../assets/presentation/Slide6.png'),
  require('../../assets/presentation/Slide7.png'),
  require('../../assets/presentation/Slide8.png'),
  require('../../assets/presentation/Slide9.png'),
  require('../../assets/presentation/Slide10.png'),
  require('../../assets/presentation/Slide11.png'),
  require('../../assets/presentation/Slide12.png'),
  require('../../assets/presentation/Slide13.png'),
  require('../../assets/presentation/Slide14.png'),
  require('../../assets/presentation/Slide15.png'),
  require('../../assets/presentation/Slide16.png'),
  require('../../assets/presentation/Slide17.png'),
  require('../../assets/presentation/Slide18.png'),
  require('../../assets/presentation/Slide19.png'),
  require('../../assets/presentation/Slide20.png'),
  require('../../assets/presentation/Slide21.png'),
  require('../../assets/presentation/Slide22.png'),
  require('../../assets/presentation/Slide23.png'),
  require('../../assets/presentation/Slide24.png'),
  require('../../assets/presentation/Slide25.png'),
  require('../../assets/presentation/Slide26.png'),
  require('../../assets/presentation/Slide27.png'),
  require('../../assets/presentation/Slide28.png'),
  require('../../assets/presentation/Slide29.png'),
  require('../../assets/presentation/Slide30.png'),
  require('../../assets/presentation/Slide31.png'),
  require('../../assets/presentation/Slide32.png'),
  require('../../assets/presentation/Slide33.png'),
  require('../../assets/presentation/Slide34.png'),
  require('../../assets/presentation/Slide35.png'),
  require('../../assets/presentation/Slide36.png'),
  require('../../assets/presentation/Slide37.png'),
  require('../../assets/presentation/Slide38.png'),
  require('../../assets/presentation/Slide39.png'),
];

const SlideViewer = () => {
  return (
    
    <View style={styles.container}>
       <Stack.Screen 
                      options={{
                          headerShown: false,
                          animation: 'none'
                      }} 
                  />
      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={styles.image}
            resizeMode="contain"
          />
        )}
        showsVerticalScrollIndicator={false}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={5}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    paddingVertical: 10,
  },
  image: {
    width: width - 20,
    height: 320,
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#f0f0f0', // while loading
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});

export default SlideViewer;
