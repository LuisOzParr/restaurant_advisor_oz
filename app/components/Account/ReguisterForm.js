import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import validateEmail from '../../utils/Validation';
import * as firebase from 'firebase';
import Loading from '../Loading';
import { withNavigation } from 'react-navigation'

const RegisterForm = (props) => {
  const {toastRef, navigation} = props;
  
  const [hidePassword, setHidePassword] = useState(true);
  const [hideRepeadPassword, sethideRepeadPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [repeadPass, setRepeadPass] = useState('');
  const [isVisibleLoading, setIsVisibleLoading] = useState(false)

  const reguister = async () => {
    setIsVisibleLoading(true)
    hasError = false;
    if (!email || !pass || !repeadPass) {
      toastRef.current.show('Todos los campos son obligatorios.');
      hasError = true;
    } 
    if(!validateEmail(email)) {
      toastRef.current.show('El campo email no es valido.');
      hasError = true;
    }
    if(pass !== repeadPass) {
      toastRef.current.show('El campo email y repite tu email deben de ser iguales');
      hasError = true;
    }

    if (!hasError) {
      await firebase.auth().createUserWithEmailAndPassword(email, pass).then(() => {
        navigation.navigate('MyAccount')
      }).catch(() => {
        toastRef.current.show('Error al crear la cuenta, intentelo más tarde');
      })
    }
    setIsVisibleLoading(false);
  }

  return (
    <View style={styles.formConteiner} behavior="padding" enabled> 
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
        onChange={ e => setEmail(e.nativeEvent.text)}
        rightIcon={
          <Icon
            name="at"
            iconStyle={styles.iconRight}
            type="material-community"
          />
        }
      />

      <Input
        placeholder="Contraseña"
        password={true}
        secureTextEntry={hidePassword}
        containerStyle={styles.inputForm}
        onChange={ e => setPass(e.nativeEvent.text)}
        rightIcon={
          <Icon
            name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={styles.iconRight}
            type="material-community"
            onPress={()=>setHidePassword(!hidePassword)}
          />
        }
      />

      <Input
        placeholder="Repetir contraseña"
        password={true}
        secureTextEntry={hideRepeadPassword}
        containerStyle={styles.inputForm}
        onChange={ e => setRepeadPass(e.nativeEvent.text) }
        rightIcon={
          <Icon
          name={hideRepeadPassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={styles.iconRight}
            type="material-community"
            onPress={()=>sethideRepeadPassword(!hideRepeadPassword)}
          />
        }
      />

      <Button 
        title="Unirse"
        containerStyle={styles.btnContainerReguister}
        buttonStyle={styles.btnReguister}
        onPress={reguister}
      />

      <Loading text="Creando cuenta" isVisible={isVisibleLoading}/>
    </View>
  );
}

export default withNavigation(RegisterForm);

const styles = StyleSheet.create({
  formConteiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 30
  },
  iconRight: {
    color:"#c1c1c1"
  },
  inputForm:{
    width: "100%",
    marginTop:20,
  },
  btnContainerReguister: {
    marginTop: 20,
    width: "95%"
  },
  btnReguister: {
    backgroundColor:"#00a680"
  }
});