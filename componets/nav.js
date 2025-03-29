"use client"
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View style={tw`bg-blue-500 p-4 shadow-md`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`text-xl font-bold text-white`}>OAOTA Fracture App</Text>
        {/* Hamburger Icon */}
        <TouchableOpacity style={tw`md:hidden`} onPress={toggleMenu}>
          <Text style={tw`text-white`}></Text>
        </TouchableOpacity>
        {/* Desktop Menu */}
        <View style={tw`hidden md:flex-row space-x-4`}>
          <Text style={tw`text-white hover:underline`}>Home</Text>
          <Text style={tw`text-white hover:underline`}>About</Text>
          <Text style={tw`text-white hover:underline`}>Contact</Text>
          <Text style={tw`text-white hover:underline`}>Get Started</Text>
        </View>
      </View>
      {/* Mobile Menu */}
      {menuOpen && (
        <View style={tw`md:hidden bg-blue-600 p-4 space-y-2`}>
          <Text style={tw`text-white hover:underline`}>Home</Text>
          <Text style={tw`text-white hover:underline`}>About</Text>
          <Text style={tw`text-white hover:underline`}>Contact</Text>
          <Text style={tw`text-white hover:underline`}>Get Started</Text>
        </View>
      )}
    </View>
  );
};

export default Nav;
