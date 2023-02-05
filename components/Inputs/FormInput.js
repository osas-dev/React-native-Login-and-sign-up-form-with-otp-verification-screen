import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SIZES, COLORS, FONTS } from "../../constants";
import { styles } from '../styles';

const FormInput = ({
    containerStyle,
    inputContainerStyle,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    onChangeText,
    onPress,
    editable,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    maxLength,
    placeholderTextColor = COLORS.grey60,
    value,
    error,
    success,
    onEndEditing
}) => {

    const [isFocused, setIsFocused] = useState(false)


    return (
        <View style={styles.form}>
            <View style={[styles.formGroup, { 
                borderColor: error ? COLORS.error :
                success ? COLORS.success :
                isFocused ? COLORS.primary : 
                COLORS.lightGrey 
                }]}>
                {prependComponent}

                <TextInput
                    style={{
                        flex: 1,
                        paddingVertical: 0,
                        ...inputStyle,
                        ...FONTS.body3,
                    }}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    maxLength={maxLength}
                    onChangeText={(text) => onChangeText(text)}
                    onChange={onChange}
                    onPressIn={onPress}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onEndEditing={onEndEditing}
                />

                {appendComponent}
            </View>
            {error && (
                <Text style={{ color: COLORS.error, marginTop: 2, paddingLeft: SIZES.base, ...FONTS.body4 }}>{error}</Text>
            )}
        </View>
    )
}

export default FormInput