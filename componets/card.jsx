import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import tw from 'twrnc';

const Card = ({ title, imageUrl }) => {
    return (
        <View style={[styles.card, tw`p-4 rounded-lg shadow-md`]}>
            <Image 
               source={{ uri: imageUrl }} 
               style={[styles.image, tw`w-full h-40 rounded-lg`]} 
            />
            <Text style={[styles.title, tw`mt-2 text-lg font-bold`]}>
            {title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 16,
    },
    image: {
        resizeMode: 'cover',
    },
    title: {
        textAlign: 'center',
    },
});

export default Card;