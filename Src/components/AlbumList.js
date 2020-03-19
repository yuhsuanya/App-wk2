import React from "react";
import { StyleSheet, Text, View , Image , ScrollView } from "react-native";
import albumData from "../json/albums";

const Albumlist = () => {
    return (
    <ScrollView>
      <View style={styles.cardContainerStyle}>
          <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
             <Image
              style={styles.thumbnailStyle}
              source={{
               uri: albumData[0].thumbnail_image
              }}
             />
             <View style={styles.headerContentStyle}>
               <Text style={styles.titleStyle}>{albumData[0].title}</Text>
               <Text style={styles.artistStyle}>{albumData[0].artist}</Text>
             </View>
          </View>
          <View style={styles.cardSectionStyle}>
             <Image
               style={styles.imageStyle}
               source={{
                 uri: albumData[0].image
                }}
             />
          </View>
     </View>
     <View style={styles.cardContainerStyle}>
          <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
             <Image
              style={styles.thumbnailStyle}
              source={{
               uri: albumData[1].thumbnail_image
              }}
             />
             <View style={styles.headerContentStyle}>
               <Text style={styles.titleStyle}>{albumData[1].title}</Text>
               <Text style={styles.artistStyle}>{albumData[1].artist}</Text>
             </View>
          </View>
          <View style={styles.cardSectionStyle}>
             <Image
               style={styles.imageStyle}
               source={{
                 uri: albumData[1].image
                }}
             />
          </View>
     </View>
     <View style={styles.cardContainerStyle}>
          <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
             <Image
              style={styles.thumbnailStyle}
              source={{
               uri: albumData[2].thumbnail_image
              }}
             />
             <View style={styles.headerContentStyle}>
               <Text style={styles.titleStyle}>{albumData[2].title}</Text>
               <Text style={styles.artistStyle}>{albumData[2].artist}</Text>
             </View>
          </View>
          <View style={styles.cardSectionStyle}>
             <Image
               style={styles.imageStyle}
               source={{
                 uri: albumData[2].image
                }}
             />
          </View>
     </View>
     <View style={styles.cardContainerStyle}>
          <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
             <Image
              style={styles.thumbnailStyle}
              source={{
               uri: albumData[3].thumbnail_image
              }}
             />
             <View style={styles.headerContentStyle}>
               <Text style={styles.titleStyle}>{albumData[3].title}</Text>
               <Text style={styles.artistStyle}>{albumData[3].artist}</Text>
             </View>
          </View>
          <View style={styles.cardSectionStyle}>
             <Image
               style={styles.imageStyle}
               source={{
                 uri: albumData[3].image
                }}
             />
          </View>
     </View>
     <View style={styles.cardContainerStyle}>
          <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
             <Image
              style={styles.thumbnailStyle}
              source={{
               uri: albumData[4].thumbnail_image
              }}
             />
             <View style={styles.headerContentStyle}>
               <Text style={styles.titleStyle}>{albumData[4].title}</Text>
               <Text style={styles.artistStyle}>{albumData[4].artist}</Text>
             </View>
          </View>
          <View style={styles.cardSectionStyle}>
             <Image
               style={styles.imageStyle}
               source={{
                 uri: albumData[4].image
                }}
             />
          </View>
     </View>
    </ScrollView>
    );
  };

  const styles = StyleSheet.create({

    cardContainerStyle:{
      borderWidth:1,
      borderRadius:2,
      borderColor:"#E6E6FA",
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
      borderRadius:2,
    },
    headerContentStyle:{
      flexDirection:"column",
      justifyContent:"space-around",
    },
    cardSectionStyle:{
      padding:5,
      backgroundColor:"#F5F5F5",
      borderColor:"#F5F5F5",
      borderBottomWidth:1,
    },
    imageStyle:{
      height:400,
      width:null,
      borderRadius:2,
    },
    titleStyle:{
      fontFamily:'TimesNewRomanPS-BoldItalicMT',
      fontSize:16,
      // fontWeight:'bold',
      paddingLeft:15,
      color:"#708090",

    },
    artistStyle:{
      fontFamily:'TimesNewRomanPS-BoldItalicMT',
      fontSize:16,
      // fontWeight:'bold',
      paddingLeft:15,
      color:"#708090",
    }
   
  });
  
  export default Albumlist;