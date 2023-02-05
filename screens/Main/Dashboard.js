import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../components/styles'
import { COLORS, FONTS, icons, images, SIZES } from '../../constants'
import { IconButton } from '../../components'
import { Shadow } from 'react-native-shadow-2'

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: '16%' }}>
        <Shadow
          offset={[4, 3]}
          distance={6}
          startColor={COLORS.shadow08}
          style={{
            width: '100%'
          }}
        >
          <View style={styles.mainHeader}>
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <IconButton
                icon={images.default_profile}
                iconStyle={{
                  width: 40,
                  height: 40
                }}
                containerStyle={{
                  marginHorizontal: SIZES.base
                }}
              />
              <Text style={{
                ...FONTS.h2
              }}>Dashboard</Text>
            </View>
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <IconButton
                icon={icons.scan}
                containerStyle={{ marginHorizontal: SIZES.base }}
              />
            </View>
          </View>
        </Shadow>
      </View>
      <View style={styles.balanceWrapper}>
        <Text style={{
          ...FONTS.body3,
          color: COLORS.dark60,
          marginVertical: 4
        }}>Your total balance</Text>
        <Text style={{ ...FONTS.h3, fontSize: SIZES.largeTitle, lineHeight: 50, marginVertical: 10 }}>N50,000,000.25</Text>
        {/* <View style={{ flexDirection: 'row' }}>
          <Text style={{ ...FONTS.h3, marginVertical: 10 }}>1BoatSLRHtKNngkdXEeobR76b53LETtpyT</Text>
          <IconButton 
          icon={icons.copy} 
          containerStyle={{ marginLeft: 4, marginTop: 5}} 
          />
        </View> */}
      </View>
    </View>
  )
}

export default Dashboard