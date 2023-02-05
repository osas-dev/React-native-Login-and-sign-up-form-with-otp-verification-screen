import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { styles } from '../../styles'
import { animations, COLORS, SIZES } from '../../../constants'
import TextButton from '../../Buttons/TextButton'

const InfoSheet = ({
    animation,
    label,
    onPress,
}) => {
    return (
        <View style={{ flex: 1 }}>
            <LottieView
                source={animations.info}
                style={styles.bottomSheetImage}
                autoPlay={false}
                ref={animation}
                loop={true}
            />
            <Text style={[styles.bottomSheetText, { color: COLORS.primary }]}>{label}</Text>
            <TextButton
                contentContainerStyle={ styles.bottomSheetButton}
                label='Close'
                labelStyle={{color: COLORS.dark}}
                onPress={onPress}
            />
        </View>
    )
}

export default InfoSheet