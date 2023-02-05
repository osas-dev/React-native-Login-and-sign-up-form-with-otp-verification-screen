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
import { matchPassword, validateEmail, validatePassword } from '../../helper/validate';


const ForgotPassword = () => {
    //states
    const [error, setError] = useState({})
    const [success, setSuccess] = useState({})
  const [isVisible, setIsVisible] = useState(false)


     //input states
  const [inputs, setInputs] = useState({
    password: '',
    confirmPassword: ''
  })
  const { password, confirmPassword } = inputs

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
                <Text style={[
                    styles.header,
                    {
                        marginTop: SIZES.padding * 2,
                        paddingBottom: SIZES.padding
                    }
                ]}>Reset Password</Text>
                {/* Password */}
                <FormInput
                    placeholder='Password'
                    value={password}
                    error={error.password}
                    success={success.password}
                    onChangeText={(text) => setInputs({ ...inputs, password: text })}
                    onChange={(e) => validatePassword(errors, password, valid)}
                    onEndEditing={(e) => validatePassword(errors, password, valid)}
                    secureTextEntry={!isVisible}
                    prependComponent={
                        <Image
                            source={icons.lock}
                            style={[
                                styles.icon,
                                {
                                    marginRight: SIZES.base,
                                    tintColor: error.password ? COLORS.error : success.password ? COLORS.success : COLORS.primary80
                                }
                            ]}
                        />
                    }
                    appendComponent={
                        <IconButton
                            icon={isVisible ? icons.eye_off : icons.eye}
                            iconStyle={{
                                tintColor: COLORS.grey
                            }}
                            onPress={() => setIsVisible(!isVisible)}
                        />
                    }
                />
                {/* Confirm Password */}
                <FormInput
                    placeholder='Confirm password'
                    value={confirmPassword}
                    error={error.confirmPassword}
                    success={success.confirmPassword}
                    onChangeText={(text) => setInputs({ ...inputs, confirmPassword: text })}
                    onEndEditing={(e) => matchPassword(errors, password, confirmPassword, valid)}
                    onChange={(e) => matchPassword(errors, password, confirmPassword, valid)}
                    secureTextEntry={!isVisible}
                    prependComponent={
                        <Image
                            source={icons.lock}
                            style={[
                                styles.icon,
                                {
                                    marginRight: SIZES.base,
                                    tintColor: error.confirmPassword ? COLORS.error : success.confirmPassword ? COLORS.success : COLORS.primary80
                                }
                            ]}
                        />
                    }
                    appendComponent={
                        <IconButton
                            icon={isVisible ? icons.eye_off : icons.eye}
                            iconStyle={{
                                tintColor: COLORS.grey
                            }}
                            onPress={() => setIsVisible(!isVisible)}
                        />
                    }
                />
            </View>
            <TextButton
                label="Reset Password"
                contentContainerStyle={styles.authButton}
                onPress={() => console.log(email)}
            />
        </View>
    )
}

export default ForgotPassword