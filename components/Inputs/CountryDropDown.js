import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

import { SIZES, COLORS, icons, FONTS } from "../../constants"
import { styles } from '../styles';

const CountryDropDown = ({
    containerStyle,
    selectedCountry,
    onPress,
}) => {


    return (
        <TouchableOpacity
            style={[styles.countryInput, { ...containerStyle }]}
            onPress={onPress}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                {!selectedCountry &&
                    <Text style={{ color: COLORS.grey, marginLeft: 5, ...FONTS.body3 }}>Country</Text>
                }

                {selectedCountry &&
                    <>
                        <Image
                            source={{ uri: selectedCountry?.flag }}
                            resizeMode="cover"
                            style={[styles.icon, {borderRadius: SIZES.radius}]}
                        />
                        <Text style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.h3 }}>{selectedCountry?.name}</Text>
                    </>
                }
            </View>

            <Image
                source={icons.arrow_down_fill}
                style={styles.icon}
            />
        </TouchableOpacity>
    )
}

export default CountryDropDown;