import { View, Text, Pressable, Keyboard } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { BottomSheet, ErrorSheet, FailedSheet, FormInput, InfoSheet, OtpInput, styles, SuccessSheet, TextButton } from '../../components'
import { FONTS, SIZES } from '../../constants'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { bottomSheetControl } from '../../helper/control'

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [pinReady, setPinReady] = useState(false);
  const [visible, setIsVisible] = useState(false);
  const maxCodeLength = 4;
  const animation = useRef(null);

  const ButtonStyle = pinReady ? styles.authButton : styles.disabledAuthButton;

  const ref = useRef(null)

  const handleOtpVerification = () => {
    setIsVisible(!visible)
    Keyboard.dismiss()
    console.log(visible)
    bottomSheetControl({ animation, ref, visible })
  }
  const closeSheet = () => {
    setIsVisible(!visible)
    console.log(visible)
    bottomSheetControl({ animation, ref, visible })
  }


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Pressable style={styles.forgotPasswordContainer} onPress={Keyboard.dismiss}>
        <View style={{
          paddingBottom: SIZES.padding
        }}>
          <Text style={{ marginTop: SIZES.padding * 2, ...FONTS.h1 }}>Email Verification</Text>
          <Text style={{ paddingVertical: SIZES.padding, ...FONTS.body3 }}>Enter the OTP code sent to your mail.</Text>
        
          
          <OtpInput
            setPinReady={setPinReady}
            otp={otp}
            setOtp={setOtp}
            maxLength={maxCodeLength}
          />
        </View>
        <TextButton
          label="Verify"
          contentContainerStyle={ButtonStyle}
          onPress={() => handleOtpVerification()}
          disabled={!pinReady}
        />
        <BottomSheet ref={ref}>
          <SuccessSheet
            animation={animation}
            label='Otp incoming'
            onPress={() => closeSheet()}
          />
        </BottomSheet>
      </Pressable>
    </GestureHandlerRootView>
  )
}

export default OtpVerification