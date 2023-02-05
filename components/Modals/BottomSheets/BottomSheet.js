import { View, Text } from 'react-native'
import React, { forwardRef, ReactNode, useCallback, useEffect, useImperativeHandle } from 'react'
import { styles } from '../../styles'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { SIZES } from '../../../constants'

const MAX_TRANSLATE_Y = -SIZES.height + 500

// type BottomSheetProps = {
//   children?: ReactNode
// };

// export interface BottomSheetRefProps = {
//   scrollTo: (destination: number) => void;
//   isActive: boolean;
// };




const BottomSheet = forwardRef(({ children }, ref) => {
  const translateY = useSharedValue(0)
  const active = useSharedValue(false)

  const scrollTo = useCallback((destination) => {
    'worklet'
    active.value = destination !== 0
    translateY.value = withSpring(destination, { damping: 50 })
  }, [])

  const isActive = useCallback(() => {
    return active.value
  }, [])

  
  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
    scrollTo,
    isActive,
  ]);


  const context = useSharedValue({ y: 0 })
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value }
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y)
    })
    .onEnd(() => {
      if (translateY.value > -SIZES.height / 3) {
        scrollTo(0)
      } else if (translateY.value < -SIZES.height / 1.5) {
        scrollTo(MAX_TRANSLATE_Y)
      }
    });


  const reanimatedBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [SIZES.margin, 5],
      Extrapolate.CLAMP
    )
    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
      display: translateY.value === 0 ? 'none' : 'flex'
    }
  })

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, reanimatedBottomSheetStyle]}>
        <View style={styles.line}></View>
        {children}
      </Animated.View>
    </GestureDetector>
  )
})

export default BottomSheet