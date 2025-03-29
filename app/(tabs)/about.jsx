import { ScrollView, View } from "react-native";
import tw from "twrnc";

import About from "../../componets/about.js";
import Hero from "../../componets/hero.js";
import Contacts from "../../componets/contacts.js";

export default function Page() {
  return (
    <View style={tw`bg-gray-50 flex-1`}>
      
      <ScrollView>
        <Hero />
        <About />
        <Contacts />
      </ScrollView>
    </View>
  );
}
