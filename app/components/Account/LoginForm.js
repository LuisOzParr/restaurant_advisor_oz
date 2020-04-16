import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, icon, Button, Icon } from 'react-native-elements';
import InputPassword from '../../components/Form/InputPassword';
import globalStyles from '../../utils/GlobalStyles';
import validateEmail from '../../utils/Validation';
import Loading from '../Loading';
import * as firebase from 'firebase';
import { withNavigation } from 'react-navigation'

const LoginForm = (props) => {
  const { toastRef, navigation } = props

  const [email, setEmail] = useState('');
  const [pass, setPass]= useState('');
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);

  const login = async() => {
    setIsVisibleLoading(true);
    hasError = false;
    if (!email || !pass) {
      toastRef.current.show('Todos los campos son oblicatorios.')
      hasError = true;
      setIsVisibleLoading(false);
    }
    if (!validateEmail(email)) {
      toastRef.current.show('El email no es correcto.')
      hasError = true;
    }
    if (!hasError) {
      await firebase.auth().signInWithEmailAndPassword(email, pass).then(() => {
        navigation.navigate('MyAccount')    
      }).catch(() => {
        toastRef.current.show('Email o contraseña no validos');
      })
    }

    setIsVisibleLoading(false);
  }

  return (
    <View style={styles.fromContainer}>

      <Input 
        placeholder="Correo"
        containerStyle={globalStyles.inputForm}
        onChange={(e) => setEmail(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={globalStyles.iconRight}
          />
        }
      />

      <InputPassword
        onChange={(value) => setPass(value)}
      />

      <Button title="Iniciar sersión"
        containerStyle={globalStyles.btnContainer}
        buttonStyle={globalStyles.btnSubmit}
        onPress={login}
      />
      <Loading isVisible={isVisibleLoading} text="Iniciando sesión"/>
    </View>
  );
}

export default withNavigation(LoginForm);

const styles = StyleSheet.create({
  fromContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
});