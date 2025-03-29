import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import tw from 'twrnc';
import Card from '../../componets/card';

const Home = () => {
  const cardsData = [
    { title: 'Hand', imageUrl: 'https://example.com/hand.jpg' },
    { title: 'Spine', imageUrl: 'https://example.com/spine.jpg' },
    // ... other cards
  ];

  return (
    <ScrollView contentContainerStyle={styles.pageContent}>
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} imageUrl={card.imageUrl} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Home;