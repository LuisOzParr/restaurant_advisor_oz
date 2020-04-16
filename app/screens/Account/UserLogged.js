import React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import * as firebase from 'firebase';


export default UserLogger = () => {
  return (
    <View>
      <Text>Usuario Loggeado</Text>
      <Button
        title="Cerrar sesion"
        onPress={() => firebase.auth().signOut()}
      />
    </View>
  );
}