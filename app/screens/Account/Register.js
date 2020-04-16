import React, { useRef } from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ReguisterForm from '../../components/Account/ReguisterForm'
import Toast from 'react-native-easy-toast';

export default Register = () => {
  const toastRef = useRef();
  return (
    <KeyboardAwareScrollView>
      <Image 
        source={require("../../../assets/img/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewForm}>
        <ReguisterForm toastRef={toastRef}/>
      </View>
      <Toast position="center" opacity={0.5} ref={toastRef}/>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20
  },
  viewForm:{
    marginLeft: 40,
    marginRight: 40,
  }
});