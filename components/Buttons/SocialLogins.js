import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { COLORS, FONTS, icons, images, SIZES } from '../../constants'
import IconButton from './IconButton'

const SocialLogins = ({ onPress }) => {
    return (
        <TouchableOpacity 
        style={styles.socials}
        onPress={onPress}
        >
            <Text style={{
                marginHorizontal: SIZES.padding / 1.5,
                marginVertical: 6,
                ...FONTS.body2,
                color: COLORS.light
            }}>Sign in with google</Text>
            <IconButton
                icon={icons.google}
                iconStyle={{ tintColor: COLORS.light, marginTop: 3 }}
            />
        </TouchableOpacity>
    )
}

export default SocialLogins