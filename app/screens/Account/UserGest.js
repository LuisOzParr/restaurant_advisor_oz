import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import { Button } from 'react-native-elements';

export default UserGest = () => {
  return (
    <ScrollView style={styles.viewBody} centerContent={true}>
      <Image 
        source={require("../../../assets/original.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>
        Consulta tu perfil
      </Text>
      <Text style={styles.description}>
        ¿Como describirías tu mejor restaurante? Busca y visualiza los mejores restaurantes de una froma sencilla, vota cual te aha gustado mas y comenta cual ha sido tu experiencia.
      </Text>
      <View style={styles.viewBtn}>
        <Button 
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          title="Ver tu perfil"
          onPress={console.log('Hollo word')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
  image: {
    height:300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center" 
  },
  description: {
    textAlign: "center",
    marginBottom: 20
  },
  viewBtn: {
    flex: 1,
    alignItems: "center"
  },
  btnStyle: {
    backgroundColor: "#00a680"
  },
  btnContainer:{
    width: "70%",
  }
});