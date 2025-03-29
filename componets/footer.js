import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const Footer = () => {
    return (
        <View style={tw`bg-gray-800 py-6`}>
            <View style={tw`text-center`}>
                <Text style={tw`text-gray-400`}>&copy; 2025 OAOTA Fracture App. All rights reserved.</Text>
            </View>
        </View>
    );
};

export default Footer;
