import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const Hero = () => (
  <View style={tw`bg-gradient-to-r from-blue-500 to-green-500 text-white py-20 text-center`}>
    <View style={tw`container mx-auto px-4`}>
      <Text style={tw`text-4xl font-extrabold mb-4`}>Welcome to Fracture App</Text>
      <Text style={tw`text-lg mb-6`}>Empowering healthcare through data-driven insights on fractures.</Text>
      <View style={tw`space-x-4 flex-row`}>
       
         <Text  style={tw`bg-grey-200 text-4xl p-3 border-blue-200`}>
             we are orthpaedic clinicians and softwre developers located in blantyre malawi 
          </Text>


      </View>
    </View>
  </View>
);

export default Hero;