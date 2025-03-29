import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const About = () => (
  <>
    {/* About Us Section */}
    <View style={tw`py-12 bg-gray-100`}>
      <View style={tw`container mx-auto px-4 text-center`}>
        <Text style={tw`text-gray-900 text-3xl font-bold mb-6`}>About Us</Text>
        <Text style={tw`text-gray-700 mb-4`}>We provide comprehensive data about fractures to help analyze OAOTA patterns and improve patient outcomes.</Text>
        <Text style={tw`text-gray-700`}>Our mission is to leverage data to enhance the understanding and treatment of fractures, contributing to better healthcare worldwide.</Text>
      </View>
    </View>
  </>
);

export default About;