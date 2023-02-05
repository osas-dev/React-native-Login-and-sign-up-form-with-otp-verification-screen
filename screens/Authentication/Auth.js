import {
  View,
  Text,
  Image,
  Keyboard
} from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//components
import { TextButton, styles, FormInput, IconButton, CountryDropDown, CountryModal, CheckBox, SocialLogins, } from '../../components'

//constants
import {
  icons,
  images,
  COLORS,
  SIZES,
  FONTS
} from "../../constants";

//moti
import { MotiView, useAnimationState } from 'moti';

//shadow
import { Shadow } from 'react-native-shadow-2';
import { matchPassword, validateEmail, validatePassword, validateUsername } from '../../helper/validate';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



const Auth = ({ navigation }) => {


  //states
  const [mode, setMode] = useState('login')
  const [isVisible, setIsVisible] = useState(false)

  //input states
  const [inputs, setInputs] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: ''
  })
  const { username, phone, email, password, confirmPassword, country } = inputs
  // const [name, setName] = useState('')
  // const [phone, setPhone] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [error, setError] = useState({})
  const [success, setSuccess] = useState({})
  const [termsChecked, setTermsChecked] = useState(false)

  // Country states
  const [showCountryModal, setShowCountryModal] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [countries, setCountries] = useState([])


  //animation  states
  const animationState = useAnimationState({
    login: {
      height: SIZES.height * 0.5
    },
    register: {
      height: SIZES.height * 0.72
    }
  })

  useEffect(() => {
    // Fetch countries

    fetch("https://restcountries.com/v2/all")
      .then(response => response.json())
      .then(data => {
        let countryData = data.map(item => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://countryflagsapi.com/png/${item.alpha2Code}`
          }
        })

        setCountries(countryData)
      })
    animationState.transitionTo('login')
  }, [])


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

  //Login Form
  const renderLogin = () => {
    return (
      <MotiView
        state={animationState}
        style={styles.motiView}
      >
        <Shadow>
          <View style={styles.authContainer}>
            <Text style={styles.header}>
              Welcome Back
            </Text>

            <KeyboardAwareScrollView
              enableOnAndroid={true}
              keyboardShouldPersistTaps='handled'
              keyboardDismissMode='on-drag'
              extraScrollHeight={-300}
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center'
              }}
            >
              {/* Email */}
              <FormInput
                placeholder='Email'
                value={email}
                error={error.email}
                success={success.email}
                onEndEditing={() => validateEmail(errors, email, valid)}
                onChangeText={text => setInputs({ ...inputs, email: text })}
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

              <View style={{ alignItems: 'flex-end' }}>
                <TextButton
                  label='Forgot Password?'
                  contentContainerStyle={{
                    marginTop: SIZES.radius,
                    backgroundColor: null
                  }}
                  labelStyle={{
                    color: COLORS.support3,
                    ...FONTS.h4
                  }}
                  onPress={() => navigation.navigate('ForgotPassword')}
                />
              </View>
            </KeyboardAwareScrollView>
            <TextButton
              label='LOGIN'
              contentContainerStyle={styles.authButton}
              labelStyle={{ ...FONTS.h3 }}
              onPress={
                () => navigation.navigate('OtpVerification')
              }
            />
          </View>
        </Shadow>
      </MotiView>
    )
  }

  //Register Form
  const renderRegister = () => {
    return (
      <MotiView
        state={animationState}
        style={styles.motiView}
      >
        <Shadow>
            <View style={styles.authContainer}>
              <Text style={styles.header}>
                Create new account
              </Text>
              <KeyboardAwareScrollView
                enableOnAndroid={true}
                keyboardShouldPersistTaps='never'
                keyboardDismissMode='interactive'
                extraScrollHeight={-180}
                contentContainerStyle={{
                  flexGrow: 1,
                  justifyContent: 'center',
                  paddingBottom: SIZES.padding
                }}>
                {/* Name */}
                <FormInput
                  placeholder='Username'
                  value={username}
                  error={error.username}
                  success={success.username}
                  onChangeText={text => setInputs({ ...inputs, username: text })}
                  onEndEditing={() => validateUsername(errors, username, valid)}
                  prependComponent={
                    <Image
                      source={icons.person}
                      style={[
                        styles.icon,
                        {
                          marginRight: SIZES.base,
                          tintColor: error.username ? COLORS.error : success.username ? COLORS.success : COLORS.primary80
                        }
                      ]}
                    />
                  }
                  appendComponent={error.username ? (
                    <IconButton
                      icon={icons.close}
                      iconStyle={{
                        tintColor: COLORS.error
                      }}
                    />) : success.username ?
                    (<IconButton
                      icon={icons.checkmark}
                      iconStyle={{
                        tintColor: COLORS.success
                      }}
                    />
                    ) : null
                  }
                />
                {/* Email */}
                <FormInput
                  placeholder='Email'
                  value={email}
                  error={error.email}
                  success={success.email}
                  onEndEditing={() => validateEmail(errors, email, valid)}
                  onChangeText={text => setInputs({ ...inputs, email: text })}
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
                {/* Phone */}
                <FormInput
                  placeholder='Phone'
                  value={phone}
                  onChange={(text) => onChangeInput(text, 'phone')}
                  keyboardType="numeric"
                  prependComponent={
                    <Image
                      source={icons.phone}
                      style={[
                        styles.icon,
                        { marginRight: SIZES.base, tintColor: COLORS.primary80 }
                      ]}
                    />
                  }
                />

                {/* Country */}
                <CountryDropDown
                  containerStyle={{ marginTop: SIZES.radius }}
                  selectedCountry={selectedCountry}
                  onPress={() => setShowCountryModal(!showCountryModal)}
                />

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

                {/* Terms and Conditions */}
                <CheckBox
                  containerStyle={{ marginTop: SIZES.radius }}
                  isSelected={termsChecked}
                  onPress={() => setTermsChecked(!termsChecked)}
                />
              </KeyboardAwareScrollView>

              <TextButton
                label='Create Account'
                contentContainerStyle={styles.authButton}
                labelStyle={{ ...FONTS.h3 }}
                onPress={() => console.log('Log in')}
              />
            </View>
        </Shadow>
      </MotiView>
    )
  }


  const renderAuthContainer = () => {
    if (mode == 'login') {
      return renderLogin()
    } else {
      return renderRegister()
    }
  }

  const renderAuthFooter = () => {
    return (
      <View style={styles.authFooter}>
        <Text style={{ color: COLORS.grey, ...FONTS.h4 }}>
          {mode == "login" ? "Don't have an account?" : "I already have an account."}
        </Text>
        <TextButton
          label={mode == 'login' ? 'Create New Account' : 'Sign In'}
          contentContainerStyle={{
            marginLeft: SIZES.base,
            backgroundColor: null,
          }}
          labelStyle={{
            color: COLORS.support3,
            ...FONTS.h4
          }}
          onPress={() => handleForm()}
        />
      </View>
    )
  }

  const handleForm = () => {
    if (animationState.current === 'login') {
      animationState.transitionTo('register')
      setMode('register')
    } else {
      animationState.transitionTo('login')
      setMode('login')
    }
  }


  return (
    <View style={styles.container}>
      <Image
        source={images.logo}
        style={styles.imgHeader}
      />
      <View style={{ zIndex: 1 }}>
        {renderAuthContainer()}

        {/* Footer */}
        {renderAuthFooter()}

        {/* OAuth */}
        <SocialLogins
          onPress={() => navigation.navigate('Dashboard')}
        />

        {/* Country Modal */}
        <CountryModal
          showCountryModal={showCountryModal}
          setShowCountryModal={setShowCountryModal}
          countries={countries}
          setSelectedCountry={setSelectedCountry}
        />
      </View>
    </View>
  )
}

export default Auth