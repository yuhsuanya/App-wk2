import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import Header from './src/components/Header';

const App = () => {
  return (
    <View>
      <View style={[
        styles.cardContainerStyle,
        styles.cardSectionStyle,    
      ]}>

       <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.thumbnailStyle}
          source={{
            uri: "https://i.imgur.com/K3KJ3w4h.jpg"
          }}
        />
        <View style={styles.headerContentStyle}>
          <Text>Eric Chou</Text>
          <Text>一樣美麗</Text>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri:
                "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg"
            }}
          />
        </View>
      </View>
      </View>
  
    </View>
   
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#E6E6FA",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2
  },
  textStyle: {
    fontSize: 20,
    color:"#8674A1",
  },
  cardContainerStyle:{
    borderWidth:1,
    borderRadius:2,
    borderColor:"#ddd",
    shadowColor:"#000",
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.1,
    shadowRadius:2,
    elevation:1,
    marginLeft:5,
    marginRight:5,
    marginTop:10,
  },
  thumbnailContainerStyle:{
    flexDirection:"row",
    justifyContent:"flex-start",
  },
  thumbnailStyle:{
    height:50,
    width:50,
  },
  headerContentStyle:{
    flexDirection:"column",
    justifyContent:"space-around",
  },
  cardSectionStyle:{
    padding:5,
    backgroundColor:"#fff",
    borderColor:"#ddd",
    borderBottomWidth:1,
  },
  imageStyle:{
    height:300,
    width:null,
  },
 
});

export default App;
