import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // Error
    error: 'rgba(246, 86, 93, 1)',
    error80: 'rgba(246, 86, 93, 0.8)',
    error60: 'rgba(246, 86, 93, 0.6)',
    error20: 'rgba(246, 86, 93, 0.2)',
    error08: 'rgba(246, 86, 93, 0.08)',

    // Primary
    primary: 'rgba(19,99,223, 1)',
    primary80: 'rgba(19,99,223, 0.8)',
    primary60: 'rgba(19,99,223, 0.6)',
    primary20: 'rgba(19,99,223, 0.2)',
    primary08: 'rgba(19,99,223, 0.08)',

    // Success
    success: 'rgba(46, 182, 44, 1)',
    success80: 'rgba(46, 182, 44, 0.8)',
    success60: 'rgba(46, 182, 44, 0.6)',
    success20: 'rgba(46, 182, 44, 0.2)',
    success08: 'rgba(46, 182, 44, 0.08)',

    // Dark
    dark: 'rgba(13, 15, 35, 1)',
    dark80: 'rgba(13, 15, 35, 0.8)',
    dark60: 'rgba(13, 15, 35, 0.6)',
    dark20: 'rgba(13, 15, 35, 0.2)',
    dark08: 'rgba(13, 15, 35, 0.08)',

    // Grey
    grey: 'rgba(160, 161, 180, 1)',
    grey80: 'rgba(160, 161, 180, 0.8)',
    grey60: 'rgba(160, 161, 180, 0.6)',
    grey20: 'rgba(160, 161, 180, 0.2)',
    grey08: 'rgba(160, 161, 180, 0.08)',

    // Light Grey
    lightGrey: 'rgba(247, 247, 247, 1)',
    lightGrey80: 'rgba(247, 247, 247, 0.8)',
    lightGrey60: 'rgba(247, 247, 247, 0.6)',
    lightGrey20: 'rgba(247, 247, 247, 0.2)',
    lightGrey08: 'rgba(247, 247, 247, 0.08)',

    // Light
    light: 'rgba(255, 255, 255, 1)',
    light80: 'rgba(255, 255, 255, 0.8)',
    light60: 'rgba(255, 255, 255, 0.6)',
    light20: 'rgba(255, 255, 255, 0.2)',
    light08: 'rgba(255, 255, 255, 0.08)',

    // Support 1
    support1: 'rgba(110, 162, 255, 1)',
    support1_08: 'rgba(110, 162, 255, 0.08)',

    // Support 2
    support2: 'rgba(255, 132, 13, 1)',
    support2_08: 'rgba(255, 132, 13, 0.08)',

    // Support 3
    support3: 'rgba(123, 96, 238, 1)',
    support3_08: 'rgba(123, 96, 238, 0.08)',

    // Shadow
    shadow: 'rgba(138, 149, 158, 1)',
    shadow08: 'rgba(138, 149, 158, 0.15)',
}

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    margin: 20,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Poppins-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Poppins-Bold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h5, lineHeight: 22 },
    body1: { fontFamily: "Poppins-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Poppins-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Poppins-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Poppins-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Poppins-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

export const darkTheme = {
    backgroundColor: COLORS.dark,
}

export const lightTheme = {
    backgroundColor: COLORS.white,
}

const appTheme = { COLORS, SIZES };

export default appTheme;