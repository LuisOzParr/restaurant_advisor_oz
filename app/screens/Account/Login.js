import React, {useRef} from 'react'
import { StyleSheet, View, ScrollView, Text, Image, Button } from 'react-native';
import { Divider } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import LoginForm from '../../components/Account/LoginForm';
import Toast from 'react-native-easy-toast';
import LoginFacebook from '../../components/Account/LoginFacebook';

export default Login = (props) => {
  const { navigation } = props;

  const toastRef = useRef()

  return (
    <ScrollView >
      <Image
        source={require("../../../assets/img/logo.png")}
        style={styles.logo}
        resizeMode="contain" 
      />
      <View style={styles.view}>
        <LoginForm toastRef={toastRef}/>
        <CreateAccount navigation={navigation}></CreateAccount>
      </View>
      <Divider style={styles.divider}></Divider>
      <View style={styles.view}>
        <LoginFacebook toastRef={toastRef} />
      </View>
      <Toast position="center" opacity={0.5} ref={toastRef}/>
    </ScrollView>
  );
}

const CreateAccount = (props) => {
  const {navigation} = props;

  return (
    <Text style={styles.textReguister}>
      ¿Aún no tienes una cuenta? {" "}
      <Text style={styles.btnRegister} onPress={() => navigation.navigate('Register')}>
        Registarte
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20
  },
  view: {
    marginRight: 40,
    marginLeft: 40,
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40
  },
  textReguister: {
    marginTop: 15,
    marginRight: 10,
    marginLeft: 10,
  },
  btnRegister: {
    color: "#00a680",
    fontWeight: "bold"
  }

});