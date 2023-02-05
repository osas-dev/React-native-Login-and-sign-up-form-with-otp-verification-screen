import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from '../styles'

const OtpInput = ({
  otp,
  setPinReady,
  setOtp,
  maxLength
}) => {

  const otpInputRef = useRef();
  const OtpArray = new Array(maxLength).fill(0);
  const [otpWrapperIsFocused, setOtpWrapperIsFocused] = useState(false)


  const toOtpInput = (_value, index) => {
    const emptyInputChar = " "
    const digit = otp[index] || emptyInputChar;

    //formatting
    const isCurrentDigit = index === otp.length;
    const isLastDigit = index === maxLength - 1;
    const isOtpComplete = otp.length === maxLength

    const isDigitFocused = isCurrentDigit || (isLastDigit && isOtpComplete)

    const OtpStyle = otpWrapperIsFocused && isDigitFocused ? styles.focusedOtpInput : styles.OtpInput

    return (
      <View key={index} style={OtpStyle}>
        <Text style={styles.OtpText}>{digit}</Text>
      </View>
    )
  }

  const handleOnBlur = () => {
    setOtpWrapperIsFocused(false);
  }

  const handlePress = () => {
    setOtpWrapperIsFocused(true);
    otpInputRef?.current?.focus();
  }

  useEffect(() => {
    setPinReady(otp.length === maxLength)
    return () => setPinReady(false)
  }, [otp])
  

  return (
    <View style={styles.OtpContainer}>
      <Pressable style={styles.OtpWrapper} onPress={() => handlePress()}>
        {OtpArray.map(toOtpInput)}
      </Pressable>

      <TextInput
        style={styles.HiddenOtpInput}
        value={otp}
        onChangeText={(text) => setOtp(text)}
        maxLength={maxLength}
        keyboardType='number-pad'
        returnKeyType='done'
        textContentType='oneTimeCode'
        ref={otpInputRef}
        onBlur={() => handleOnBlur()}
      />
    </View>
  )
}

export default OtpInput