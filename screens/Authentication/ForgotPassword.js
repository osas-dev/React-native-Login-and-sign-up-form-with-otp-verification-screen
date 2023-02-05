import { View, Text, Image } from 'react-native'
import React, { useCallback, useState } from 'react'

//components
import { FormInput, IconButton, styles, TextButton } from '../../components'

//constants
import {
  icons,
  images,
  COLORS,
  SIZES,
  FONTS
} from "../../constants";
import { useRoute } from '@react-navigation/native'
import { validateEmail } from '../../helper/validate';


const ForgotPassword = ({ navigation }) => {
  //states
  const [email, setEmail] = useState('')
  const [error, setError] = useState({})
  const [success, setSuccess] = useState({})

  //error
  const errors = useCallback((errMsg, input) => {
    setError((prevState) => ({
      ...prevState,
      [input]: errMsg
    }))
  }, [])
  //success
  const valid = useCallback((message, input) => {
    setSuccess((prevState) => ({
      ...prevState,
      [input]: message
    }))
  }, [])


  return (
    <View style={styles.forgotPasswordContainer}>
      <View style={{
        paddingBottom: SIZES.padding
      }}>
        <Text style={[styles.header, { marginTop: SIZES.padding * 2, paddingBottom: SIZES.padding }]}>Forgot Password</Text>
        {/* Email */}
        <FormInput
          placeholder='Email'
          value={email}
          error={error.email}
          success={success.email}
          onEndEditing={() => validateEmail(errors, email, valid)}
          onChange={() => validateEmail(errors, email, valid)}
          onChangeText={(text) => setEmail(text)}
          prependComponent={
            <Image
              source={icons.email}
              style={[
                styles.icon,
                {
                  marginRight: SIZES.base,
                  tintColor: error.email ? COLORS.error : success.email ? COLORS.success : COLORS.primary80
                }
              ]}
            />
          }
          appendComponent={error.email ? (
            <IconButton
              icon={icons.close}
              iconStyle={{
                tintColor: COLORS.error
              }}
            />) : success.email ?
            (<IconButton
              icon={icons.checkmark}
              iconStyle={{
                tintColor: COLORS.success
              }}
            />
            ) : null
          }
        />
      </View>
      <TextButton
        label="Send Reset Password Link"
        contentContainerStyle={styles.authButton}
        onPress={() => navigation.navigate('ResetPassword')}
      />
    </View>
  )
}

export default ForgotPassword