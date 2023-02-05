import { TouchableOpacity, Image } from 'react-native'
import React from 'react'

// component
import { styles } from '../styles';

const IconButton = ({
    icon,
    containerStyle,
    iconStyle,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={containerStyle}
            onPress={onPress}
        >
            <Image
                source={icon}
                resizeMode='contain'
                style={[styles.icon, iconStyle]}
            />
        </TouchableOpacity>
    )
}

export default IconButton