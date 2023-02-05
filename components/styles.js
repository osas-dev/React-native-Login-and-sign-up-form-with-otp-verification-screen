import { Platform, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from '../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
    paddingHorizontal: SIZES.padding
  },
  imgHeader: {
    alignSelf: 'center',
    marginTop: SIZES.padding * 2.5,
    width: 50,
    height: 50
  },
  authContainer: {
    flex: 1,
    width: SIZES.width - (SIZES.padding * 2),
    padding: SIZES.padding,
    backgroundColor: COLORS.light,
  },
  forgotPasswordContainer: {
    flex: 1,
    width: SIZES.width,
    padding: SIZES.padding,
    backgroundColor: COLORS.light,
    zIndex: 1,
  },
  authButton: {
    height: 55,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary
  },
  disabledAuthButton: {
    height: 55,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary60,
  },
  authFooter: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    marginHorizontal: SIZES.radius,
    paddingBottom: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
    borderBottomRightRadius: SIZES.radius,
    backgroundColor: 'transparent',
    zIndex: 0,

  },
  motiView: {
    marginTop: SIZES.padding,
    height: SIZES.height * 0.55,
  },
  header: {
    width: '60%',
    lineHeight: 45,
    color: COLORS.dark,
    ...FONTS.h1
  },
  form: {
    borderRadius: SIZES.radius,
    marginTop: SIZES.radius
  },
  formGroup: {
    flexDirection: "row",
    height: 55,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    alignItems: "center",
    backgroundColor: COLORS.lightGrey,
    borderWidth: 2
  },
  input: {
    flex: 1,
    paddingVertical: 0,
  },
  icon: {
    width: 30,
    height: 30,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.dark80
  },
  modalWrapper: {
    height: 400,
    width: SIZES.width * 0.8,
    backgroundColor: COLORS.light,
    borderRadius: SIZES.radius
  },
  countryInput: {
    flexDirection: 'row',
    height: SIZES.height > 800 ? 55 : 45,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    backgroundColor: COLORS.lightGrey,
  },
  oAuthWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    marginTop: 30,
  },
  OAuthContainer: {
    height: 55,
    width: 55,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.grey20,
  },
  OtpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SIZES.base,
  },
  HiddenOtpInput: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0
  },
  OtpWrapper: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  OtpInput: {
    borderColor: COLORS.primary,
    borderRadius: 30,
    padding: SIZES.padding / 2,
    minWidth: '15%',
    borderWidth: 3,
  },
  focusedOtpInput: {
    borderColor: COLORS.primary,
    borderRadius: 30,
    padding: SIZES.padding / 2,
    minWidth: '15%',
    borderWidth: 3,
    backgroundColor: COLORS.primary20
  },
  OtpText: {
    textAlign: 'center',
    ...FONTS.h1,
  },
  bottomSheetContainer: {
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: COLORS.light,
    borderRadius: SIZES.margin,
    position: 'absolute',
    top: SIZES.height
  },
  line: {
    width: 75,
    height: 4,
    alignSelf: 'center',
    marginVertical: 15,
    backgroundColor: COLORS.dark60,
    borderRadius: 2
  },
  bottomSheetImage: {
    alignSelf: 'center',
    width: '30%',
    aspectRatio: 1,
    marginTop: SIZES.body5
  },
  bottomSheetText: {
    ...FONTS.h2,
    alignSelf: 'center',
    marginTop: SIZES.body5,
    marginBottom: SIZES.padding * 3
  },
  bottomSheetButton: {
    backgroundColor: COLORS.light,
    padding: SIZES.body4,
    marginVertical: SIZES.body5 / 3,
    borderTopColor: COLORS.dark20,
    borderTopWidth: 1
  },
  socials: {
    flexDirection: "row",
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.error80,
    padding: SIZES.padding / 2,
    borderRadius: SIZES.radius,
    width: '90%',
    alignSelf: 'center'
  },
  mainHeader: {
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    borderRadius: SIZES.radius,
    padding: SIZES.base,
    justifyContent: 'space-between'
  },
  balanceWrapper:{
    width: '100%',
    height: "20%",
    backgroundColor: '#EC9704',
    marginVertical: SIZES.margin,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding + 5,
    borderRadius: SIZES.radius
  }
}); 