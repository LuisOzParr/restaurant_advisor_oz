import React, {useState} from 'react';
import { SocialIcon } from 'react-native-elements';
import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';
import { FacebookApi } from '../../utils/Social';
import { withNavigation } from 'react-navigation'


const LoginFacebook = (props) => {
  const { toastRef, navigation } = props

  const [isVisibleLoading, setIsVisibleLoading] = useState(false)

  const login = async () => {
    setIsVisibleLoading(true);
    await Facebook.initializeAsync(FacebookApi.application_id)
    const {type, token } = await Facebook.logInWithReadPermissionsAsync(
      FacebookApi.application_id, 
      { permissions: FacebookApi.permissions }
    );

    if (type === "success") {
      const credentials = firebase.auth.FacebookAuthProvider.credential(token);

      await firebase.auth().signInWithCredential(credentials).then(() => {
        navigation.navigate('MyAccount')    
      });
    } else if(type === 'cancel') {
      toastRef.current.show('Inicio de sesión cancelado')
    } else {
      toastRef.current.show('Ocurrió un error desconocido')
    }

    setIsVisibleLoading(false)
  };

  return (
    <>
      <SocialIcon
        title="Iniciar seción con facebook"
        button
        type='facebook'
        onPress={login}
      />
      <Loading isVisible={isVisibleLoading} text="Iniciando sesión"/>
    </>
  
  );
};

export default withNavigation(LoginFacebook);