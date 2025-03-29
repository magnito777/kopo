import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import tw from 'twrnc';

const ContactUs = () => {
  return (
    <View style={tw`py-12 bg-white`}>
      <View style={tw`container mx-auto px-4 text-center`}>
        <Text style={tw`text-gray-800 text-3xl font-bold mb-6`}>Contact Us</Text>
        <Text style={tw`text-gray-700 mb-6`}>Have questions or need more information? Reach out to us!</Text>
        <View style={tw`flex flex-col gap-4 text-gray-800 max-w-md mx-auto`}>
          <View>
            <TextInput
              placeholder="Your Name"
              style={tw`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </View>
          <View>
            <TextInput
              placeholder="Your Email"
              style={tw`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </View>
          <View>
            <TextInput
              placeholder="Your Message"
              multiline
              numberOfLines={4}
              style={tw`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </View>
          <View>
            <Button
              title="Send Message"
              color="#1E90FF"
              onPress={() => {}}
              style = {tw `border rounded-lg`}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContactUs;
