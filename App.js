import React from "react";
import { View } from "react-native";
import Header from "./Src/components/Header";
import AlbumList from "./Src/components/AlbumList";

const App = () => {
  return (
   <View>
     <Header />
     <AlbumList />
   </View>
  );
};

export default App;
