import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { styles } from '../../styles'
import { animations, COLORS } from '../../../constants'
import TextButton from '../../Buttons/TextButton'

const ErrorSheet = ({ animation, label, onPress }) => {
    return (
        <View style={{ flex: 1 }}>
            <LottieView
                source={animations.error}
                style={styles.bottomSheetImage}
                autoPlay={false}
                ref={animation}
                loop={true}
            />
            <Text style={[styles.bottomSheetText, { color: COLORS.error }]}>{label}</Text>
            <TextButton
                contentContainerStyle={ styles.bottomSheetButton}
                label='Close'
                labelStyle={{color: COLORS.dark}}
                onPress={onPress}
            />
        </View>
    )
}

export default ErrorSheet