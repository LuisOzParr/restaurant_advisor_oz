import React, {useState} from 'react'
import { Input, Icon } from 'react-native-elements';
import globalStyles from '../../utils/GlobalStyles';

const InputPassword = (props) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [pass, setPass] = useState('');

  return (
    <Input
        placeholder="Contraseña"
        password={true}
        secureTextEntry={hidePassword}
        containerStyle={globalStyles.inputForm}
        onChange={ e => props.onChange(e.nativeEvent.text)}
        rightIcon={
          <Icon
            name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={globalStyles.iconRight}
            type="material-community"
            onPress={()=>setHidePassword(!hidePassword)}
          />
        }
      />
  );
};

export default InputPassword;